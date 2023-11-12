import React, { Component } from 'react'
import gloaw from '../imgs/gloaw_walking.gif'; // Tell webpack this JS file uses this image
import galaxy from '../imgs/galaxy.png'; 
import goldfish from '../imgs/goldfish_memory.png'; 
import mcbounce from '../imgs/mc_front.gif'
import { Link } from 'react-router-dom'
import { Topbar } from './topbar'


import './main.css'

export class Misc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    title: "Gloaw",
                    img: gloaw,
                    link: "/misc/gloaw"
                },
                {
                    title: "OpenGL Apps",
                    img: galaxy,
                    link: "/misc/openglapps"
                },
                {
                    title: "Android Apps",
                    img: goldfish,
                    link: "/misc/androidapps"
                }
            ]
        }
    }

    render() {
        return(
                <div>
                    <div className="top">
                        <Topbar/>
                        <div className="about-wrapper">
                                <div className="flex-column flex-center">
                                    <div id="fun-caption">
                                        <img src={mcbounce} alt="Animated GIF"/>
                                        <div></div>
                                        Some personal projects. Want to see more? Check out my <a href="https://github.com/eutopi">Github</a>!
                                        <br/>
                                        I also used to <a href="https://eutopi.portfoliobox.net/">doodle</a> a lot 🎨
                                        <br/>
                                        {/* <span className="hidden">Whoops, you found <a href="http://eutopi.weebly.com/">me</a>!</span> */}
                                    </div>
                                    <div className="gallery flex-wrap flex-center"> 
                                        {
                                            this.state.list.map((item, index) => {
                                                return (
                                                    <div key={"fun-"+index} className="flex-column flex-center pad-10">
                                                        <Link to={item.link}><img alt={"Preview image for " + item.title} className="cards-img" src={item.img}></img></Link>
                                                    </div>
                                                )
                                            })
                                        }
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