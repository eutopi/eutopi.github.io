import React, { Component } from 'react'
import profpic from '../imgs/prof_pic2.JPG'; // Tell webpack this JS file uses this image
import { Topbar } from './topbar'
import { FaGithubAlt } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import './main.css'

export class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return(
                <div>
                    <div className="top">
                        <Topbar/>
                        <div className="about-wrapper">
                            <div className="flex-row flex-center">
                                <div>
                                <img className="photo" alt="profile" src={profpic}/>
                                <div id="socials">
                                    <a href="https://scholar.google.com/citations?user=xhnEDvAAAAAJ&hl=en"><FaGraduationCap className="pad-10 icon"/> </a>
                                    <a href="https://github.com/eutopi"><FaGithubAlt className="pad-10 icon"/> </a>
                                    <a href="mailto:me@tongyu_zhou@brown.edu"><MdEmail className="pad-10 icon"/></a>
                                </div>
                                </div>
                            </div>
                            <div className="pad-50">
                                <div className="title">
                                    tongyu zhou
                                </div >
                                <div id="bio">
                                <div>I am a 4th year Computer Science Ph.D. Candidate at the <a href="https://www.brown.edu/">Brown University</a> <a href="https://hci.brown.edu/">HCI Lab</a>, advised by <a href="https://jeffhuang.com/">Jeff Huang</a>. My research focuses on creativity support tools and visualization within human-computer interaction. 🖌️
                                </div>
                                <br/>
                                <div>
                                Previously, I received my B.A. from <a href="https://www.williams.edu/">Williams College</a>, where I was advised by <a href="https://www.cs.williams.edu/~iris/">Iris Howley</a> and double majored in Computer Science and Statistics.
                                </div>
                                <br/>
                                {/* <div className="bold-text">
                                💭 current project
                                </div >
                                <br/>
                                <div className='smaller-font'>
                                    <a href="https://filtered.ink/#/">filtered.ink</a>: a web-based tool for animated SVG painting to explore interactions in parameter-based art creation
                                </div> */}
                            </div>
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