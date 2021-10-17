import React, { Component } from 'react'
import { Topbar } from './topbar'


import profpic from '../imgs/prof_pic.png'; // Tell webpack this JS file uses this image
import bkt from '../imgs/bkt.png'
import aerospace from '../imgs/aerospace.png'
import portalware from '../imgs/portalware.png'
import uxfactor from '../imgs/uxfactor.png'


import './main.css'

export class Publications extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pubList: [
                {  
                    "title": "The UX Factor: Using Comparative Peer Review to Evaluate Designs through User Preferences",
                    "authors": "Sarah Bawabe*, Laura Wilson*, Tongyu Zhou*, Ezra Marks, and Jeff Huang",
                    "conf": "Proceedings of the 24th ACM Conference on Computer Supported Cooperative Work & Social Computing",
                    "confshort": "(CSCW 2021)",
                    "doi": "https://doi.org/10.1145/3479863",
                    "img": uxfactor
                },
                {  
                    "title": "Portalware: Exploring Free-Hand AR Drawing with a Dual-Display Smartphone-Wearable Paradigm",
                    "authors": "Jing Qian*, Tongyu Zhou*, Meredith Young-Ng*, Jiaju Ma, Angel Cheung, Xiangyu Li, Ian Gonsher, and Jeff Huang",
                    "conf": "Designing Interactive Systems",
                    "confshort": "(DIS 2021)",
                    "doi": "https://dl.acm.org/doi/10.1145/3461778.3462098",
                    "img": portalware
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
                    "pdf": "",
                    "img": bkt
                },
            ]
        }
    }

    render() {
        return(
            <div>
                <Topbar/>
                <div className="about-wrapper">
                    <div className="flex-column pub-wrapper">
                        <div className="pub-header">
                        * denotes equal contribution
                        </div>
                        {this.state.pubList.map((pub, index) => 
                            <div key={"pub-"+index} className="flex-row flex-center pub">
                                <div><img className="pub-icon" src={pub.img}></img></div>
                                <div className="pub-text">
                                    <div className="pub-title">
                                        {pub.title}
                                    </div>
                                    <div>
                                        {pub.authors}
                                    </div>
                                    <div>
                                        In <span className="italics-text">{pub.conf}</span> <span className="bold-text"> {pub.confshort}</span>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
        )
    }
}