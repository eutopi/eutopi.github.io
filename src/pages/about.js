import React, { Component } from 'react'
import profpic from '../imgs/prof_pic.png'; // Tell webpack this JS file uses this image
import { Topbar } from './topbar'

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
                            <img className="photo" src={profpic}/>
                        </div>
                        <div className="pad-50">
                            <div className="title">
                                tongyu zhou
                            </div >
                            <div id="bio">
                            <div>I am a Computer Science Ph.D. student at Brown University, advised by Jeff Huang. My research focuses on creativity support tools and visualization within human-computer interaction. 🖌️
                            </div>
                            <br/>
                            <div>
                            Previously, I received my B.A. from Williams College, where I double majored in Computer Science and Statistics.
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}