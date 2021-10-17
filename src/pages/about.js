import React, { Component } from 'react'
import profpic from '../imgs/prof_pic.png'; // Tell webpack this JS file uses this image
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
                    <Topbar/>
                    <div className="about-wrapper">
                        <div className="flex-row flex-center">
                            <div>
                            <img className="photo" src={profpic}/>
                            <div id="socials">
                                <a href="https://scholar.google.com/citations?user=xhnEDvAAAAAJ&hl=en"><FaGraduationCap className="pad-10 icon"/> </a>
                                <a href="https://github.com/eutopi"><FaGithubAlt className="pad-10 icon"/> </a>
                                <a href="mailto:me@tongyuzhou.com"><MdEmail className="pad-10 icon"/></a>
                            </div>
                            </div>
                        </div>
                        <div className="pad-50">
                            <div className="title">
                                tongyu zhou
                            </div >
                            <div id="bio">
                            <div>I am a Computer Science Ph.D. student at <a href="https://www.brown.edu/">Brown University</a>, advised by <a href="https://jeffhuang.com/">Jeff Huang</a>. My research focuses on creativity support tools and visualization within human-computer interaction. 🖌️
                            </div>
                            <br/>
                            <div>
                            Previously, I received my B.A. from <a href="https://www.williams.edu/">Williams College</a>, where I double majored in Computer Science and Statistics.
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}