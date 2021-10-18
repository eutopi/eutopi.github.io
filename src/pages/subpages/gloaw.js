import React, { Component } from 'react'
import { Topbar } from '../topbar'
import demo from '../../imgs/gloaw_demo.gif'; 
import scene1 from '../../imgs/gloaw_scene1.png'; 
import scene2 from '../../imgs/gloaw_scene2.png'; 
import scene3 from '../../imgs/gloaw_scene3.png'; 
import '../main.css'

export class Gloaw extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return(
            <div className="main-wrapper">
                <Topbar/>
                <div className="about-wrapper">
                    <div className="flex-column pub-wrapper">
                        <div className="center">
                            ✧ glow in the gloam ✧
                        </div>
                        <div className="fun-text">
                            <div className="center">
                                <div className="light-text">
                                    You find yourself in an endless corridor. The cityscape outside the windows appears foreign--this place must be far from home. You notice that specks of light are falling from somewhere way up high. They resemble iridescent snow. "Catch them," a nearby voice beckons you, "And you will receive what you desire."
                                </div>
                                <div className="pad-50">
                                    <img alt="Gameplay showing the girl collecting stars" className="subpage-img" src={demo}></img>
                                </div>
                                <div className="subpage-smalltext">
                                    Why is he watching you?
                                </div>
                                <div className="flex-row pad-50">
                                    <img alt="Gameplay screen showing high visibility" className="subpage-img-small" src={scene1}></img>
                                    <img alt="Gameplay screen showing medium visibility" className="subpage-img-small" src={scene2}></img>
                                    <img alt="Gameplay screen showing low visibility" className="subpage-img-small" src={scene3}></img>
                                </div>
                                <div className="subpage-smalltext">
                                    Visibility is getting low...
                                </div>
                                <div className="pad-50 dont-center">
                                    This is a simple 2D pixel sidescroller game made with <a href="https://godotengine.org/">Godot</a>. All of the source code can be found on my <a href="https://github.com/eutopi/gloaw">Github repo</a>. Extensions are welcome!
                                    <ul>
                                        <li>Art by me :)</li>
                                        <li>Font by <a href="https://managore.itch.io/m5x7">Daniel Linssen</a></li>
                                        <li>Start menu music: <a href="http://dig.ccmixter.org/files/_ghost/25389">Reverie (small theme)</a> by _ghost Ft: Pitx </li>
                                        <li>Game background music: <a href="http://dig.ccmixter.org/files/gurdonark/56524">Autumn's Dream Lullaby</a> by gurdonark Ft: Scomber</li>
                                    </ul>
                                    <font size="2">
                                        The source code is licensed under MIT, the art under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC-BY-NC-ND</a>, and all other assets under Creative Commons. 
                                    </font>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-row flex-center footer">Made with 🍄 by Tongyu Zhou</div>
            </div>
        )
    }
}