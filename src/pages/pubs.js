import React, { Component } from 'react'
import { Topbar } from './topbar'

import bkt from '../imgs/bkt.png'
import aerospace from '../imgs/aerospace.png'
import portalware from '../imgs/portalware.png'
import uxfactor from '../imgs/uxfactor.png'
import focalpoint from '../imgs/focalpoint.png'
import filteredink from '../imgs/sunset.svg'

import './main.css'

export class Publications extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pubList: [
                {
                    "title": "filtered.ink: Creating Dynamic Illustrations with SVG Filters",
                    "authors": "Tongyu Zhou, Connie Liu, Joshua Kong Yang, Jeff Huang",
                    "conf": "Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems",
                    "confshort": "(CHI 2023)",
                    "doi": "https://doi.org/10.1145/3544548.3581051",
                    "img": filteredink,
                    "pdf": process.env.PUBLIC_URL + '/pubs/zhou_filteredink_2023.pdf'
                },
                {
                    "title": "FocalPoint: Adaptive Direct Manipulation for Selecting Small 3D Virtual Objects",
                    "authors": "Jiaju Ma, Jing Qian, Tongyu Zhou, and Jeff Huang",
                    "conf": "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",
                    "confshort": "(IMWUT 2023)",
                    "doi": "https://doi.org/10.1145/3580856",
                    "img": focalpoint,
                    "pdf": process.env.PUBLIC_URL + '/pubs/ma_focalpoint_2023.pdf'
                },
                {  
                    "title": "The UX Factor: Using Comparative Peer Review to Evaluate Designs through User Preferences",
                    "authors": "Sarah Bawabe*, Laura Wilson*, Tongyu Zhou*, Ezra Marks, and Jeff Huang",
                    "conf": "Proceedings of the 24th ACM Conference on Computer Supported Cooperative Work & Social Computing",
                    "confshort": "(CSCW 2021)",
                    "doi": "https://doi.org/10.1145/3479863",
                    "img": uxfactor,
                    "pdf": process.env.PUBLIC_URL + '/pubs/bawabe_uxfactor_2021.pdf',
                    "award1": <div className="award">🏅&nbsp;Honorable Mention Award&nbsp;</div>,
                    "award2": <div className="award">💥&nbsp;Impact Recognition Award&nbsp;</div>,
                },
                {  
                    "title": "Portalware: Exploring Free-Hand AR Drawing with a Dual-Display Smartphone-Wearable Paradigm",
                    "authors": "Jing Qian*, Tongyu Zhou*, Meredith Young-Ng*, Jiaju Ma, Angel Cheung, Xiangyu Li, Ian Gonsher, and Jeff Huang",
                    "conf": "Designing Interactive Systems",
                    "confshort": "(DIS 2021)",
                    "doi": "https://dl.acm.org/doi/10.1145/3461778.3462098",
                    "img": portalware,
                    "pdf": process.env.PUBLIC_URL + '/pubs/qian_portalware_2021.pdf',
                    "video": "https://www.youtube.com/watch?v=UaHIWJOA-PU"
                },
                {  
                    "title": "Combining Genetic Algorithms and Machine Learning for Exploring the Navigation Satellite Constellation Design Tradespace",
                    "authors": "Jacob Chang, Rachel Duquette, Katherine Thai, Tongyu Zhou, Minh Pham, Victor Lin, and Karen Wood",
                    "conf": "Proceedings of the 33rd International Technical Meeting of the Satellite Division of The Institute of Navigation",
                    "confshort": "(ION GNSS+ 2020)",
                    "doi": "https://www.ion.org/publications/abstract.cfm?articleID=17616",
                    "img": aerospace
                },
                {  
                    "title": "Assessing Post-hoc Explainability of the BKT Algorithm",
                    "authors": "Tongyu Zhou*, Haoyu Sheng*, and Iris Howley",
                    "conf": "Proceedings of the AAAI/ACM Conference on AI, Ethics, and Society",
                    "confshort": "(AIES 2020)",
                    "doi": "https://dl.acm.org/doi/10.1145/3375627.3375856",
                    "pdf": process.env.PUBLIC_URL + '/pubs/zhou_assessing_2020.pdf',
                    "img": bkt
                },
            ]
        }
    }

    displayLink(url, type) {
        if (url !== undefined) {
            return(
                <a className="pad-10" href={url}>[{type}]</a>
            )
        }
    }

    filterMe(authorList) {
        var myName = "Tongyu Zhou"
        let arr = authorList.split(myName)
        return <span>{arr[0]}<i className='highlight'>{myName}</i>{arr[1]}</span>
    }

    renderThumbnailImg(pub) {
        if (pub.img.endsWith(".svg")) {
            return (
                <object aria-label={"Icon for the paper " + pub.title} data={pub.img} type="image/svg+xml" width={150}></object>
            )
        }
        else {
            return (
                <img alt={"Icon for the paper " + pub.title} className="pub-icon" src={pub.img} width={150}></img>
            )
        }
    }

    render() {
        return(
            <div>
                <div className="top">
                    <Topbar/>
                    <div className="about-wrapper">
                        <div className="flex-column pub-wrapper">
                            <div className="pub-header">
                            * denotes equal contribution
                            </div>
                            {this.state.pubList.map((pub, index) => 
                                <div key={"pub-"+index} className="flex-row pub">
                                    <div>
                                        {this.renderThumbnailImg(pub)}
                                    </div>
                                    <div className="pub-text">
                                        <div className="pub-title">
                                            {pub.title}
                                        </div>
                                        <div>
                                            {this.filterMe(pub.authors)}
                                        </div>
                                        <div>
                                            In <span className="italics-text">{pub.conf}</span> <span className="bold-text"> {pub.confshort}</span>
                                        </div>
                                        {pub.award1}{pub.award2}
                                        <div>
                                            {this.displayLink(pub.pdf, "pdf")}
                                            {this.displayLink(pub.video, "video")}
                                            {this.displayLink(pub.doi, "doi")}
                                        </div>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </div>
                <div className="flex-row flex-center footer">
                    <footer className="bottom">made while boppin' to city pop 🌃🎶 by Tongyu Zhou</footer>
                </div>
            </div>
        )
    }
}