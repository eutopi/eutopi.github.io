window.interactionZoomEnabled = window.interactionZoomEnabled || false;
window.interactionPanEnabled = window.interactionPanEnabled || false;

function formatParams(params) {
    const formattedParams = {};

    for (const key in params) {
        const value = params[key];

        // Convert values based on their expected types
        if (key === 'parallaxOn') {
            formattedParams[key] = value === 'true'; // Convert to boolean
        } else if (key === 'zoomSensitivity' || key === 'panSensitivity' || key === 'depth') {
            formattedParams[key] = parseFloat(value); // Convert to number
        } else if (key === 'position') {
            formattedParams[key] = JSON.parse(value); // Convert to array
        } else if (key === 'depthToTeleportationMap') {
            formattedParams[key] = JSON.parse(value); // Convert to object
        } else {
            formattedParams[key] = value; // Keep as string for any other cases
        }
    }
    console.log(formattedParams)

    return formattedParams;
}

function svgRuntime(interactionParams, div) {
    interactionParams = formatParams(interactionParams)
    let parallaxOn = interactionParams["parallaxOn"]; // PARAM_1
    let viewbox = interactionParams["viewbox"]; // PARAM_2
    const svg = document.getElementById('main-canvas');
    svg.setAttribute('viewBox', viewbox);
    const layersGroup = document.getElementById('sketchGroup');
    const layersContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    layersContainer.id = 'layers-container';
    layersContainer.appendChild(layersGroup);
    svg.appendChild(layersContainer);
    /** @type {SVGGElement[]} */
    const layers = Array.from(layersGroup.children);

    const imageElement = document.getElementById("portal-preview-transition");
    svg.insertBefore(imageElement, layersContainer.nextSibling);

    const multiTrue = (bools) => bools.every(bool => bool);
    const ternary = (cond, a, b) => { if (cond) { return a } else { return b } };

    const layersSeparatedTransforms = layers.map(layer => {
        let rawstr = null;
        if (layer.hasAttribute('separatedTransform')) {
            rawstr = layer.getAttribute('separatedTransform');
        } else if (layer.hasAttribute('separatedtransform')) {
            rawstr = layer.getAttribute('separatedtransform');
        }
        if (rawstr === null || rawstr === undefined) {
            return {
                baseTranslate: [0, 0],
                baseScale: [1, 1],
                parallaxTranslate: [0, 0],
                parallaxScale: [1, 1]
            };
        }

        const nums = rawstr.split(',').map(parseFloat);
        return {
            baseTranslate: [nums[0], nums[1]],
            baseScale: [nums[2], nums[3]],
            parallaxTranslate: [nums[4], nums[5]],
            parallaxScale: [nums[6], nums[7]]
        };
    });

    let position = [0, 0];
    let rotation = 0;
    let depth = ternary(parallaxOn, 0, 1);
    let focalLength = 100;

    depth = interactionParams["depth"]; // PARAM_3
    position = interactionParams["position"]; // PARAM_4

    let zoomSensitivity = interactionParams["zoomSensitivity"]; // PARAM_5
    let panSensitivity = interactionParams["panSensitivity"]; // PARAM_6

    let portalTransitioning = false
    let depthToTeleportationMap = interactionParams["depthToTeleportationMap"] // PARAM_7
    let waypoints = []
    let rawWaypointData = [...document.getElementById("[[filtered.ink-waypoint-data]]").children].map(child => child.id)
    let patterns = document.querySelector('#main-canvas defs').childNodes
    for (const [index, w] of rawWaypointData.entries()) {
        const args = w.split('==');
        const waypoint = JSON.parse(args[2])
        if (patterns[index + 1].id === waypoint.id) {
            waypoint.url = patterns[index + 1].childNodes[0].href.baseVal
        }
        waypoints.push(waypoint)
    }
    let LInkWithDepth = {}
    let depthInkElement = document.getElementById("[[filtered.ink-depth-l-ink-data]]")
    if (depthInkElement) {
        let rawDepthLInkData = [...document.getElementById("[[filtered.ink-depth-l-ink-data]]").children].map(child => child.id)
        for (const [index, w] of rawDepthLInkData.entries()) {
            const args = w.split('==');
            LInkWithDepth[args[0]] = { "startDepth": args[1] };
        }
    }

    let leftMouseDown = false;
    let middleMouseDown = false;

    let lastZoomEvent = null;
    let lastMouseMoveEvent = null;

    let zoomConstant = 0.95
    let zoomVelocity = 0;
    let speedFactor = 0.4;
    let addVelocity = 0.8 * speedFactor;
    let maxVelocity = 5 * speedFactor;
    let deaccelConst = 0.3 * speedFactor;

    let prevFrameX, prevFrameY;

    // ****************************************
    // ZOOM AND PAN LOGIC
    // ****************************************

    const canvasZoom = (zoomDir, useMouseLocation, e, useFactor, factor) => {
        if (useMouseLocation === undefined) useMouseLocation = false;
        if (useFactor === undefined) useFactor = false;
        if (factor === undefined) factor = 0;

        let rect = svg.getBoundingClientRect()
        if (portalTransitioning || checkIfPortalTriggeredViaCanvasBbox(e, rect)) return
        if (parallaxOn) {
            let flip = -1;
            let zf = ternary(zoomDir > 0, -zoomConstant, zoomConstant) * flip;

            let oldDepth = depth
            if (!useFactor) depth += zf;
            else depth += Math.sign(zf) * factor;

            // additional check for parallax (handles edge cases where going beyond depth toggles visibility of layer off, so bbox check w/ canvas doesn't work)
            let depthInRange = getNumberInRange(Object.keys(depthToTeleportationMap), oldDepth / 5, depth / 5)
            if (depthInRange) {
                let teleports = depthToTeleportationMap[depthInRange]
                for (let i = 0; teleports.length > i; i++) {
                    if (isMouseInsideDiv(e.clientX, e.clientY, teleports[i]["portalID"])) {
                        let waypoint = waypointModeMatchesLayerMode(teleports[i]["waypointID"])
                        if (waypoint) {
                            const moveableDivBBox = document.getElementById(teleports[i]["portalID"] + "-preview").getBoundingClientRect()
                            const portalTransition = document.getElementById("portal-preview-transition")
                            animatePortalTransition(portalTransition, moveableDivBBox, rect, waypoint)
                            waitMilliseconds(250, () => {
                                layersGroup.style.opacity = 1
                                handleWaypointClick(waypoint)
                                portalTransition.style.display = "none"
                                portalTransition.setAttribute("href", "")
                                portalTransitioning = false
                                return
                            })
                        }
                    }
                }
            }

            let zoomLocationX = Math.round(e.clientX - rect.left) - rect.width / 2;
            let zoomLocationY = Math.round(e.clientY - rect.top) - rect.height / 2;

            // factor in rotation while zooming ("fake it" by rotating zoom location!)
            let newZoomLocation = rotatePoint([zoomLocationX, zoomLocationY], -rotation);
            zoomLocationX = newZoomLocation[0];
            zoomLocationY = newZoomLocation[1];

            let sign = Math.sign(zf) * -1;
            if (!useFactor) {
                position[0] += sign * zoomLocationX * 0.1;
                position[1] += sign * zoomLocationY * 0.1;
            } else {
                let finalFactor = (0.1 / 0.95) * factor; // I don't remember where this constant comes from...
                position[0] += sign * zoomLocationX * finalFactor;
                position[1] += sign * zoomLocationY * finalFactor;
            }

            animateDepthBasedLInk();
            canvasDrawAlternativeParallax();
        }

        else {

            let Mx = Math.round(e.clientX - rect.left) - rect.width / 2 + 1;
            let My = Math.round(e.clientY - rect.top) - rect.height / 2 + 1;

            let rotated_M = rotatePoint([Mx, My], -rotation);
            Mx = rotated_M[0];
            My = rotated_M[1];

            const dS = (1 + factor * Math.sign(zoomDir) * 0.05);
            let Sx = depth * rect.width;
            let Sy = depth * rect.height;
            depth *= dS

            let Lxept = position[0] - Sx / 2;
            let Rxept = position[0] + Sx / 2;
            let ax1 = Mx - Lxept;
            let ax2 = Rxept - Mx;
            let bx1 = ax1 * dS;
            let bx2 = ax2 * dS;
            let Lxpept = Mx - bx1;
            let Rxpept = Mx + bx2;
            let tpx = (Lxpept + Rxpept) / 2;
            position[0] = tpx;

            let Lyept = position[1] - Sy / 2;
            let Ryept = position[1] + Sy / 2;
            let ay1 = My - Lyept;
            let ay2 = Ryept - My;
            let by1 = ay1 * dS;
            let by2 = ay2 * dS;
            let Lypept = My - by1;
            let Rypept = My + by2;
            let tpy = (Lypept + Rypept) / 2;
            position[1] = tpy;

            canvasDrawNoParallax();
        }
    }

    const canvasPan = (e) => {
        let offsetX = (e.clientX - prevFrameX) * (parallaxOn ? 1.5 : 1);
        let offsetY = (e.clientY - prevFrameY) * (parallaxOn ? 1.5 : 1);

        if (parallaxOn) {
            offsetX *= panSensitivity;
            offsetY *= panSensitivity;
        }

        // factor in rotation while panning ("fake it" by rotating offsets!)
        let newOffsets = rotatePoint([offsetX, offsetY], -rotation);
        offsetX = newOffsets[0];
        offsetY = newOffsets[1];

        const factor = ternary(parallaxOn, 1, 1);
        position[0] += offsetX * factor;
        position[1] += offsetY * factor;

        prevFrameX = e.clientX || 0
        prevFrameY = e.clientY || 0

        if (parallaxOn) {
            canvasDrawAlternativeParallax();
        } else {
            canvasDrawNoParallax();
        }
    }

    const canvasRotate = (e) => {
        let offsetX = e.clientX - prevFrameX;
        prevFrameX = e.clientX || 0;
        let dRot = offsetX / 4; // TODO: can tune...
        rotation += dRot;

        if (parallaxOn) {
            canvasDrawAlternativeParallax();
        } else {
            canvasDrawNoParallax();
        }
    }

    const canvasDrawAlternativeParallax = () => {
        const x = position[0], y = position[1];
        let maxDepth = Infinity;

        for (let i = 0; layers.length > i; i++) {
            let currLayer = layers[i]
            let curDepth = parseFloat(currLayer.getAttribute('depth'));
            let distance = curDepth * 50 - depth * zoomSensitivity * 10;
            if (multiTrue([distance > 0, maxDepth > distance])) {
                maxDepth = distance;
            }
            if (0 > distance) { // layer behind camera, hide it
                currLayer.style.display = 'none';
            }

            else {
                if (currLayer.style.display === 'none') currLayer.style.display = 'block';

                let proj_x = focalLength / distance * x * zoomSensitivity;
                let proj_y = focalLength / distance * y * zoomSensitivity;
                let scaleFac = focalLength / distance;

                setParallax(i, [proj_x, proj_y], [scaleFac, scaleFac]);
            }
        }
    }

    const setParallax = (layerIndex, parallaxTranslate, parallaxScale) => {
        let baseTranslate = layersSeparatedTransforms[layerIndex].baseTranslate;
        let baseScale = layersSeparatedTransforms[layerIndex].baseScale;

        const matrix = mat_compose([
            mat_ccwrotate(rotation * Math.PI / 180),
            mat_translate(parallaxTranslate[0], parallaxTranslate[1]),
            mat_scale(parallaxScale[0], parallaxScale[1]),
            mat_translate(baseTranslate[0], baseTranslate[1]),
            mat_scale(baseScale[0], baseScale[1]),
        ]);

        const matrixAttribute = 'matrix(' +
            matrix[0][0] + ' ' + matrix[1][0] + ' ' + matrix[0][1] + ' ' +
            matrix[1][1] + ' ' + matrix[0][2] + ' ' + matrix[1][2] + ')';
        layers[layerIndex].setAttribute('transform', matrixAttribute);
    }

    const canvasDrawNoParallax = () => {
        for (let i = 0; layers.length > i; i++) {
            let baseTranslate = layersSeparatedTransforms[i].baseTranslate;
            let baseScale = layersSeparatedTransforms[i].baseScale;

            const matrix = mat_compose([
                mat_ccwrotate(rotation * Math.PI / 180),
                mat_translate(position[0], position[1]),
                mat_scale(depth, depth),

                mat_translate(baseTranslate[0], baseTranslate[1]),
                mat_scale(baseScale[0], baseScale[1]),
            ]);

            const matrixAttribute = 'matrix(' +
                matrix[0][0] + ' ' + matrix[1][0] + ' ' + matrix[0][1] + ' ' +
                matrix[1][1] + ' ' + matrix[0][2] + ' ' + matrix[1][2] + ')';
            layers[i].setAttribute('transform', matrixAttribute);
        }
    }

    // ****************************************
    // UTIL FOR DEPTH-BASED L-INK SIMULATION
    // ****************************************

    const animateDepthBasedLInk = () => {
        const displayedDepth = depth / 5;

        Object.entries(LInkWithDepth).forEach(([key, { startDepth }]) => {
            const groupElement = document.getElementById(key);
            if (!groupElement) return;

            const endDepth = Number(groupElement.parentNode.getAttribute("depth"));
            const minDepth = Math.min(startDepth, endDepth);
            const maxDepth = Math.max(startDepth, endDepth);
            if (minDepth > displayedDepth || displayedDepth > maxDepth) return;

            const basePolyline = groupElement.querySelector("polyline");
            const progress = (displayedDepth - minDepth) / (maxDepth - minDepth);

            // Base stroke
            if (basePolyline) {
                const totalLength = basePolyline.getTotalLength();
                Object.assign(basePolyline.style, {
                    strokeDasharray: totalLength,
                    strokeDashoffset: totalLength * (1 - progress),
                });
            }

            // Branch growth
            const groupContainer = [...groupElement.children].find(el => el.tagName === "g");
            if (!groupContainer) return;

            const allBranchPolylines = [...groupContainer.querySelectorAll("polyline")]
                .sort((a, b) => parseInt(a.id.replace(/\D/g, ""), 10) - parseInt(b.id.replace(/\D/g, ""), 10));

            const baseLength = basePolyline?.getTotalLength() || 0;
            const baseProgressLength = baseLength * progress;

            allBranchPolylines.forEach((polyline, index, arr) => {
                const branchLength = polyline.getTotalLength();
                const branchStartProgress = index / arr.length;
                const branchStartLength = baseLength * branchStartProgress;

                let dashOffset, opacity;
                if (branchStartLength > baseProgressLength) {
                    dashOffset = branchLength;
                    opacity = "0";
                } else if (baseProgressLength >= branchStartLength + branchLength) {
                    dashOffset = 0;
                    opacity = "1";
                } else {
                    const clampedProgress = Math.min(1, Math.max(0, (baseProgressLength - branchStartLength) / branchLength));
                    dashOffset = branchLength * (1 - clampedProgress);
                    opacity = "1";
                }

                Object.assign(polyline.style, { strokeDasharray: branchLength, strokeDashoffset: dashOffset, strokeOpacity: opacity });
            });
        });
    }

    // ****************************************
    // UTIL FOR PORTAL CALCULATION
    // ****************************************

    const checkIfPortalTriggeredViaCanvasBbox = (e, canvasBbox) => {
        for (const key in depthToTeleportationMap) {
            const teleports = depthToTeleportationMap[key];
            for (let i = 0; teleports.length > i; i++) {
                if (multiTrue([isDivBeyondCanvas(teleports[i]["portalID"], canvasBbox), isMouseInsideDiv(e.clientX, e.clientY, teleports[i]["portalID"])])) {
                    let waypoint = waypointModeMatchesLayerMode(teleports[i]["waypointID"])
                    if (waypoint) {
                        const moveableDivBBox = document.getElementById(teleports[i]["portalID"] + "-preview").getBoundingClientRect()
                        const portalTransition = document.getElementById("portal-preview-transition")
                        animatePortalTransition(portalTransition, moveableDivBBox, canvasBbox, waypoint)
                        waitMilliseconds(250, () => {
                            layersGroup.style.opacity = 1
                            handleWaypointClick(waypoint)
                            portalTransition.style.display = "none"
                            portalTransition.setAttribute("href", "")
                            portalTransitioning = false
                            return true
                        })
                    }
                }
            }
        }
        return false
    }

    const animatePortalTransition = (portalTransition, moveableDivBBox, canvasBbox, waypoint) => {
        const portalTransitionStyle = portalTransition.style
        portalTransitionStyle.display = "block"
        portalTransition.setAttribute("href", waypoint.url)
        layersGroup.style.opacity = 0
        let ogViewboxList = viewbox.split(" ").map(parseFloat);
        portalTransitionStyle.x = (ogViewboxList[0] + (moveableDivBBox.left - canvasBbox.left) / (canvasBbox.width / ogViewboxList[2])) + "px"
        portalTransitionStyle.y = (ogViewboxList[1] + (moveableDivBBox.top - canvasBbox.top) / (canvasBbox.height / ogViewboxList[3])) + "px"
        portalTransitionStyle.width = (moveableDivBBox.width) + "px"
        portalTransitionStyle.height = (moveableDivBBox.height) + "px"

        portalTransitioning = true
        waitMilliseconds(1, () => {
            let viewboxList = waypoint.viewboxString.split(" ").map(parseFloat);
            portalTransitionStyle.transition = "all 0.25s ease"
            portalTransitionStyle.x = (-(viewboxList[2] - ogViewboxList[2]) / 2) + "px"
            portalTransitionStyle.y = (-(viewboxList[3] - ogViewboxList[3]) / 2) + "px"
            portalTransitionStyle.width = viewboxList[2] + "px"
            portalTransitionStyle.height = viewboxList[3] + "px"
        })
    }

    const waypointModeMatchesLayerMode = (waypointID) => {
        let index = waypoints.findIndex(function (w) { return w.id === waypointID })
        let waypoint = waypoints[index]
        if (parallaxOn === waypoint.parallaxIsOn) { return waypoint }
        else { return false }
    }

    const handleWaypointClick = (waypoint, transition=false) => {
        if (parallaxOn === waypoint.parallaxIsOn) {
            if (transition) {
                const duration = 2000;
                const frames = 20;
                const interval = duration / frames;
                const startDepth = depth;
                const endDepth = waypoint.depth;
                const startX = position[0];
                const startY = position[1];
                const endX = waypoint.posX;
                const endY = waypoint.posY;
                let currentFrame = 0;

                const interpolate = () => {
                    const t = currentFrame / frames; // Normalized time (0 to 1)
                    depth = startDepth + t * (endDepth - startDepth);
                    position = [startX + t * (endX - startX), startY + t * (endY - startY),];

                    if (parallaxOn) { 
                        animateDepthBasedLInk();
                        canvasDrawAlternativeParallax();
                    } 
                    else { canvasDrawNoParallax();}
                    currentFrame++;
                    if (currentFrame <= frames) { requestAnimationFrame(interpolate);}
                };
                requestAnimationFrame(interpolate);
            }
            else {
                depth = waypoint.depth
                position = [waypoint.posX, waypoint.posY]
                if (parallaxOn) { 
                    animateDepthBasedLInk();
                    canvasDrawAlternativeParallax() 
                }
                else { canvasDrawNoParallax() }
            }
            return true
        }
        else { return false }
    }

    const getNumberInRange = (numbers, x, y) => {
        for (const num of numbers) {
            if (multiTrue([num >= x, y >= num])) { return num }
        }
        return false
    }

    const isMouseInsideDiv = (x, y, divID) => {
        const divElement = document.getElementById(divID)
        if (divElement) {
            const divRect = divElement.getBoundingClientRect()
            if (multiTrue([x >= divRect.left, divRect.right >= x, y >= divRect.top, divRect.bottom >= y])
            ) { return true }
            else { return false }
        }
        else { return false }
    }

    const isDivBeyondCanvas = (divID, canvasRect) => {
        const divElement = document.getElementById(divID + String.fromCharCode(45) + "preview");
        if (divElement) {
            const divRect = divElement.getBoundingClientRect();
            if (
                multiTrue([canvasRect.top >= divRect.top, divRect.bottom >= canvasRect.bottom,
                canvasRect.left >= divRect.left, divRect.right >= canvasRect.right])
            ) { return true; }
            else { return false; }
        } else { return false; }
    };


    const waitMilliseconds = (millisecs, f) => {
        setTimeout(function () {
            f()
        }, millisecs);
    }

    // ****************************************
    // MATRIX MATH
    // ****************************************

    const mat_identity = () => [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    const mat_mul = (a, b) => [
        [a[0][0] * b[0][0] + a[0][1] * b[1][0] + a[0][2] * b[2][0], a[0][0] * b[0][1] + a[0][1] * b[1][1] + a[0][2] * b[2][1], a[0][0] * b[0][2] + a[0][1] * b[1][2] + a[0][2] * b[2][2]],
        [a[1][0] * b[0][0] + a[1][1] * b[1][0] + a[1][2] * b[2][0], a[1][0] * b[0][1] + a[1][1] * b[1][1] + a[1][2] * b[2][1], a[1][0] * b[0][2] + a[1][1] * b[1][2] + a[1][2] * b[2][2]],
        [a[2][0] * b[0][0] + a[2][1] * b[1][0] + a[2][2] * b[2][0], a[2][0] * b[0][1] + a[2][1] * b[1][1] + a[2][2] * b[2][1], a[2][0] * b[0][2] + a[2][1] * b[1][2] + a[2][2] * b[2][2]]
    ];
    const mat_compose = (matrices) => {
        if (matrices.length === 0) matrices = [mat_identity()];
        let mat = matrices[matrices.length - 1];
        for (let i = matrices.length - 2; i >= 0; i--) mat = mat_mul(matrices[i], mat);
        return mat;
    }
    const mat_translate = (x, y) => [[1, 0, x], [0, 1, y], [0, 0, 1]];
    const mat_scale = (sx, sy) => {
        if (sy === undefined) sy = sx;
        return [[sx, 0, 0], [0, sy, 0], [0, 0, 1]];
    }
    const mat_ccwrotate = (theta) => [[Math.cos(theta), -Math.sin(theta), 0], [Math.sin(theta), Math.cos(theta), 0], [0, 0, 1]];

    const rotatePoint = (point, degrees) => {
        const theta = degrees * Math.PI / 180;
        return [
            point[0] * Math.cos(theta) - point[1] * Math.sin(theta),
            point[0] * Math.sin(theta) + point[1] * Math.cos(theta),
        ];
    }

    // ****************************************
    // INPUT AND LOGIC INITIALIZATION
    // ****************************************

    // eslint-disable-next-line no-use-before-define
    let frameCounter = 0; // eslint-disable-line no-use-before-define
    let firstFrame = true;
    const runOnFirstFrame = () => {
        if (parallaxOn) {
            canvasDrawAlternativeParallax();
        } else {
            canvasDrawNoParallax();
        }
    }
    const renderFrame = () => {
        if (zoomVelocity > maxVelocity) zoomVelocity = maxVelocity;
        if (0 > zoomVelocity) zoomVelocity = 0;
        if (multiTrue([lastMouseMoveEvent, lastZoomEvent, zoomVelocity !== 0])) {
            const e1 = lastZoomEvent;
            const e2 = lastMouseMoveEvent;
            canvasZoom(-e1.deltaY, true, e2, true, zoomVelocity);
            zoomVelocity -= deaccelConst;
        }

        if (firstFrame) {
            runOnFirstFrame();
            firstFrame = false;
        }

        frameCounter += 1;
    }

    const maxFrameRate = 30;
    let previousTime = new Date().getTime();
    const renderLoop = () => {
        let newTime = new Date().getTime();
        if (1000 / maxFrameRate > newTime - previousTime) {
            // skip frame
        } else {
            renderFrame();
            previousTime = newTime;
        }

        window.requestAnimationFrame(renderLoop);
    }
    renderLoop();

    /**
     *  CUSTOM EXTENSION CODE
     */

    function toggleZoom() {
        if (!interactionZoomEnabled) {
            interactionZoomEnabled = true;
            console.log("Interactions enabled");
        }
        else if (interactionZoomEnabled) {
            interactionZoomEnabled = false;
            console.log("Interactions disabled");
        }
    }

    function togglePan() {
        if (!interactionPanEnabled) {
            interactionPanEnabled = true;
            console.log("Pan enabled");
        }
        else if (interactionPanEnabled) {
            interactionPanEnabled = false;
            console.log("Pan disabled");
        }
    }

    function getDepth() {
        return depth;
    }

    function getPosition() {
        return position;
    }

    // END CUSTOM EXTENSION CODE

    function mousedownHandler(event) {
        if (interactionPanEnabled) {
            if (event.button === 0) leftMouseDown = true;
            else if (event.button === 1) {
                event.preventDefault();
                middleMouseDown = true;
            }
            prevFrameX = event.clientX;
            prevFrameY = event.clientY;
        }
    }

    function mousemoveHandler(event) {
        if (interactionPanEnabled) {
            lastMouseMoveEvent = event;
            if (leftMouseDown) canvasPan(event);
            else if (middleMouseDown) {
                event.preventDefault();
                canvasRotate(event);
            }
        }
    }

    function mouseleaveHandler() {
        if (interactionPanEnabled) {
            leftMouseDown = false;
            middleMouseDown = false;
        }
    }

    function mouseupHandler(event) {
        if (interactionPanEnabled) {
            if (event.button === 0) leftMouseDown = false;
            else if (event.button === 1) middleMouseDown = false;
        }
    }

    function wheelHandler(event) {
        if (interactionZoomEnabled) {
            event.preventDefault();
            lastZoomEvent = event;
            lastMouseMoveEvent = event;
            zoomVelocity += addVelocity;
        }
    }
    document.addEventListener('mousedown', mousedownHandler);
    document.addEventListener('mousemove', mousemoveHandler);
    document.addEventListener('mouseleave', mouseleaveHandler);
    document.addEventListener('mouseup', mouseupHandler);
    document.addEventListener('wheel', wheelHandler, { passive: false });

    window.togglePan = togglePan;
    window.toggleZoom = toggleZoom;
    window.handleWaypointClick = handleWaypointClick;
    window.getPosition = getPosition;
    window.getDepth = getDepth;

    return waypoints
}

window.svgRuntime = svgRuntime;