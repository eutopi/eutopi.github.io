import React, { Component } from 'react'
import profpic from '../imgs/prof_pic3.jpg'; // Tell webpack this JS file uses this image
import { Topbar } from './topbar'
import { FaGithubAlt } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
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
                                    <a href="https://x.com/_tongyu"><FaTwitter className="pad-10 icon"/> </a>
                                    <a href="https://github.com/eutopi"><FaGithubAlt className="pad-10 icon"/> </a>
                                    <a href="mailto:me@tongyu_zhou@brown.edu"><MdEmail className="pad-10 icon"/></a>
                                </div>
                                </div>
                            </div>
                            <div className="pad-50">
                                <div className="title">
                                tongyu zhou <span class="wave"></span>
                                </div >
                                <div id="bio">
                                <div>I am a 5th year Computer Science Ph.D. Candidate at the <a href="https://www.brown.edu/">Brown University</a> <a href="https://hci.brown.edu/">HCI Lab</a>, advised by <a href="https://jeffhuang.com/">Jeff Huang</a>. My research focuses on creative systems from an artist- or designer-centric perspective, specifically addressing pain points of new form factors and interactions across 2D and 3D spaces. These systems span the web and augmented reality domains and have use cases within illustration and visualization. 🖌️

                                {/* My research focuses on creating systems to support individual, collective, and collaborative creativity.  */}
                                </div>
                                <br/>
                                <div>For the past two summers, I interned at the AI-Experiences Lab at Adobe Research. Currently, I am at Autodesk Research--details coming soon!
                                </div>
                                <br/>
                                <div>
                                Previously, I received my B.A. from <a href="https://www.williams.edu/">Williams College</a>, where I was advised by <a href="https://www.cs.williams.edu/~iris/">Iris Howley</a> and double majored in Computer Science and Statistics.
                                </div>
                                <br/>
                                <div className="bold-text">
                                📢 recent news
                                </div >
                                <br/>
                                <div className='smaller-font'>
                                    Super excited to be accepted to the 2024 Rising Stars in EECS Workshop this year!
                                    {/* Recently, my internship project at Adobe with my mentor <a href="https://gromitchan.com/">Gromit Chan</a> was selected to be presented as <a href="https://www.youtube.com/watch?v=XSMO9-7pcq8">#ProjectInfographIt</a> at Adobe SUMMIT Sneaks 2024, where I showed Shaq how cool infographics could be! */}
                                </div>
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