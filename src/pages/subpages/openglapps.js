import React, { Component } from 'react'
import { Topbar } from '../topbar'
import galaxy1 from '../../imgs/galaxy1.png'; 
import galaxy2 from '../../imgs/galaxy2.png'; 
import galaxy3 from '../../imgs/galaxy3.png'; 
import tigger1 from '../../imgs/tigger2.png'; 
import tigger2 from '../../imgs/tigger3.png'; 
import tigger3 from '../../imgs/tigger6.png'; 
import beach from '../../imgs/raytracingbeach.png'; 
import { FaGithubAlt } from 'react-icons/fa';

import '../main.css'

export class OpenGLApps extends Component {
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
                            This is selection of games and environment-simulations I built using OpenGL and GLUT.
                        </div>
                        <div className="fun-text">
                            <div className="title">
                                Galaxy <span className="pad-10"><a href="https://github.com/eutopi/galaxy"><FaGithubAlt/></a></span>
                            </div>
                            A 2D game inspired by Gem Swap and Space Invaders, Galaxy features an UFO avatar navigating through a grid of asteroids. The UFO avatar is trailed by a small goldfish (non-aggro) and can shoot other objects, create mini black holes, etc.
                            <div className="flex-row pad-50">
                                    <img alt="Galaxy OpenGL game screenshot displaying full grid of asteroids" className="subpage-img-small" src={galaxy1}></img>
                                    <img alt="Galaxy OpenGL game screenshot displaying asteroids suck into black hole" className="subpage-img-small" src={galaxy2}></img>
                                    <img alt="Galaxy OpenGL game screenshot display UFO shooting asteroids" className="subpage-img-small" src={galaxy3}></img>
                            </div>
                            <div className="title">
                                Tigger <span className="pad-10"><a href="https://github.com/eutopi/3D-OpenGL-Environment"><FaGithubAlt/></a></span>
                            </div>
                            A 3D simulation of Tigger walking through an infinitely-tiled world. Some topics explored include mesh loading, VS transformations with 3D camera, texturing, and various shading techniques.
                            <div className="flex-row pad-50">
                                    <img alt="Tigger with mirror texture and realistic background" className="subpage-img-small" src={tigger1}></img>
                                    <img alt="Tigger with diffuse shading" className="subpage-img-small" src={tigger2}></img>
                                    <img alt="Tigger with diffuse lighting" className="subpage-img-small" src={tigger3}></img>
                            </div>
                            <div className="title">
                                Ray-traced Beach <span className="pad-10"><a href="https://github.com/eutopi/3D-OpenGL-Environment"><FaGithubAlt/></a></span>
                            </div>
                            A 3D simulation of a beach scene rendered using ray-tracing techniques.
                            <div className="pad-50">
                                <img alt="Beach scene rendered using ray tracing" className="subpage-img" src={beach}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-row flex-center footer">made while boppin' to city pop 🌃🎶 by Tongyu Zhou</div>
            </div>
        )
    }
}