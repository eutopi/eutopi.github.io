import React, { Component } from 'react'
import { Topbar } from './topbar'

import bkt from '../imgs/bkt.png'
import aerospace from '../imgs/aerospace.png'
import portalware from '../imgs/portalwaretest.gif'
import uxfactor from '../imgs/uxfactor.png'
import focalpoint from '../imgs/focalpointtest.gif'
import filteredink from '../imgs/sunset.svg'
import canary from '../imgs/epigraphics_canary.gif'
import datapictorial from '../imgs/datapictorialplanets.gif'
import portalink from '../imgs/portalink_previewcropped.gif'

import './main.css'

export class Publications extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pubList: [
                {
                    "title": "PortalInk: 2.5D Visual Storytelling with SVG Parallax and Waypoint Transitions",
                    "authors": "Tongyu Zhou, Joshua Kong Yang, Vivian Hsinyueh Chan, Ji Won Chung, Jeff Huang",
                    "conf": "ACM Symposium on User Interface Software and Technology",
                    "confshort": "(UIST 2024)",
                    "doi": "https://doi.org/10.1145/3654777.3676376",
                    "img": portalink,
                    "pdf": process.env.PUBLIC_URL + '/pubs/zhou_portalink_2024.pdf',
                },
                {
                    "title": "Data Pictorial: Deconstructing Raster Images for Data-Aware Animated Vector Posters",
                    "authors": "Tongyu Zhou, Gromit Yeuk-Yin Chan, Shunan Guo, Jane Hoffswell, Chang Xiao, Victor Soares Bursztyn, Eunyee Koh",
                    "conf": "ACM Symposium on User Interface Software and Technology",
                    "confshort": "(UIST 2024 Adjunct)",
                    "doi": "https://doi.org/10.1145/3672539.3686353",
                    "img": datapictorial,
                    "pdf": process.env.PUBLIC_URL + '/pubs/zhou_datapictorial.pdf',
                },
                {
                    "title": "Epigraphics: Message-Driven Infographics Authoring",
                    "authors": "Tongyu Zhou, Jeff Huang, Gromit Yeuk-Yin Chan",
                    "conf": "ACM CHI Conference on Human Factors in Computing Systems",
                    "confshort": "(CHI 2024)",
                    "doi": "https://doi.org/10.1145/3613904.3642172",
                    "img": canary,
                    "pdf": process.env.PUBLIC_URL + '/pubs/zhou_epigraphics_2024.pdf',
                    "award1": <div className="award">🏅&nbsp;Best Paper Honorable Mention Award&nbsp;</div>,
                    "award2": <div className='highlight-grey'>🎥&nbsp;Presented at <b>Adobe SUMMIT Sneaks 2024</b> as <a href="https://www.youtube.com/watch?feature=shared&v=XSMO9-7pcq8">#ProjectInfographIt</a></div>
                },
                {
                    "title": "filtered.ink: Creating Dynamic Illustrations with SVG Filters",
                    "authors": "Tongyu Zhou, Connie Liu, Joshua Kong Yang, Jeff Huang",
                    "conf": "ACM CHI Conference on Human Factors in Computing Systems",
                    "confshort": "(CHI 2023)",
                    "doi": "https://doi.org/10.1145/3544548.3581051",
                    "img": filteredink,
                    "pdf": process.env.PUBLIC_URL + '/pubs/zhou_filteredink_2023.pdf',
                    "website": "https://filtered.ink/#/"
                },
                {
                    "title": "FocalPoint: Adaptive Direct Manipulation for Selecting Small 3D Virtual Objects",
                    "authors": "Jiaju Ma, Jing Qian, Tongyu Zhou, and Jeff Huang",
                    "conf": "ACM Conference on Interactive, Mobile, Wearable and Ubiquitous Technologies",
                    "confshort": "(IMWUT 2023)",
                    "doi": "https://doi.org/10.1145/3580856",
                    "img": focalpoint,
                    "pdf": process.env.PUBLIC_URL + '/pubs/ma_focalpoint_2023.pdf'
                },
                {  
                    "title": "The UX Factor: Using Comparative Peer Review to Evaluate Designs through User Preferences",
                    "authors": "Sarah Bawabe*, Laura Wilson*, Tongyu Zhou*, Ezra Marks, and Jeff Huang",
                    "conf": "ACM Conference on Computer Supported Cooperative Work & Social Computing",
                    "confshort": "(CSCW 2021)",
                    "doi": "https://doi.org/10.1145/3479863",
                    "img": uxfactor,
                    "pdf": process.env.PUBLIC_URL + '/pubs/bawabe_uxfactor_2021.pdf',
                    "award1": <div className="award">🏅&nbsp;Best Paper Honorable Mention Award&nbsp;</div>,
                    "award2": <div className="award">💥&nbsp;Impact Recognition Award&nbsp;</div>,
                    "website": "https://uxfactor.cs.brown.edu/"
                },
                {  
                    "title": "Portalware: Exploring Free-Hand AR Drawing with a Dual-Display Smartphone-Wearable Paradigm",
                    "authors": "Jing Qian*, Tongyu Zhou*, Meredith Young-Ng*, Jiaju Ma, Angel Cheung, Xiangyu Li, Ian Gonsher, and Jeff Huang",
                    "conf": "ACM Conference on Designing Interactive Systems",
                    "confshort": "(DIS 2021)",
                    "doi": "https://dl.acm.org/doi/10.1145/3461778.3462098",
                    "img": portalware,
                    "pdf": process.env.PUBLIC_URL + '/pubs/qian_portalware_2021.pdf',
                    "video": "https://www.youtube.com/watch?v=UaHIWJOA-PU"
                },
                {  
                    "title": "Combining Genetic Algorithms and Machine Learning for Exploring the Navigation Satellite Constellation Design Tradespace",
                    "authors": "Jacob Chang, Rachel Duquette, Katherine Thai, Tongyu Zhou, Minh Pham, Victor Lin, and Karen Wood",
                    "conf": "International Technical Meeting of the Satellite Division of the Institute of Navigation",
                    "confshort": "(ION GNSS+ 2020)",
                    "doi": "https://www.ion.org/publications/abstract.cfm?articleID=17616",
                    "img": aerospace
                },
                {  
                    "title": "Assessing Post-hoc Explainability of the BKT Algorithm",
                    "authors": "Tongyu Zhou*, Haoyu Sheng*, and Iris Howley",
                    "conf": "AAAI/ACM Conference on AI, Ethics, and Society",
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
                <a className="pad-10-right" href={url}>[{type}]</a>
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
                <object className="pub-icon" aria-label={"Icon for the paper " + pub.title} data={pub.img} type="image/svg+xml" width={165}></object>
            )
        }
        else {
            return (
                <img alt={"Icon for the paper " + pub.title} className="pub-icon" src={pub.img} width={165}></img>
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
                                           <span className="italics-text">{pub.conf}</span> <span className="bold-text"> {pub.confshort}</span>
                                        </div>
                                        {pub.award1}{pub.award2}
                                        <div>
                                            {this.displayLink(pub.website, "💻 website")}
                                            {this.displayLink(pub.pdf, "📑 pdf")}
                                            {this.displayLink(pub.video, "🎬 video")}
                                            {this.displayLink(pub.doi, "🔗 doi")}
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