import React, { Component } from 'react'
import { Topbar } from '../topbar'
import goldfish1 from '../../imgs/goldfish_memory_2.png'; 
import goldfish2 from '../../imgs/goldfish_memory_3.png'; 
import goldfish3 from '../../imgs/goldfish_memory_4.png'; 
import shopping1 from '../../imgs/shopping1.png'; 
import shopping2 from '../../imgs/shopping2.png'; 
import shopping3 from '../../imgs/shopping3.png'; 
import weatheria1 from '../../imgs/weatheria1.png'; 
import weatheria2 from '../../imgs/weatheria2.png'; 
import weatheria3 from '../../imgs/weatheria3.png'; 
import minesweeper1 from '../../imgs/minesweeper1.png'; 
import minesweeper2 from '../../imgs/minesweeper2.png'; 
import minesweeper3 from '../../imgs/minesweeper3.png'; 
import { FaGithubAlt } from 'react-icons/fa';

import '../main.css'

export class AndroidApps extends Component {
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
                            This is a selection of Android applications I built using Kotlin.
                        </div>
                        <div className="fun-text">
                            <div className="title">
                                Goldfish Memory <span className="pad-10"><a href="https://github.com/eutopi/Goldfish-Memory"><FaGithubAlt/></a></span>
                            </div>
                            A memory-based card game that supports user authentication/login, best score tracking with a cloud database, and leaderboard functionalities.
                            <div className="flex-row pad-50">
                                    <img alt="Player profile screen" className="subpage-img-small-no-shadow" src={goldfish1}></img>
                                    <img alt="Gameplay depicting flipped cards" className="subpage-img-small-no-shadow" src={goldfish2}></img>
                                    <img alt="Leaderboard screen" className="subpage-img-small-no-shadow" src={goldfish3}></img>
                            </div>
                            <div className="title">
                            Minesweeper <span className="pad-10"><a href="https://github.com/eutopi/minesweeper"><FaGithubAlt/></a></span>
                            </div>
                            A mini minesweeper game. The home screen allows the user to select the number of bombs, leading to increased difficulty.
                            <div className="flex-row pad-50">
                                    <img alt="Start screen where player can select number of mines" className="subpage-img-small-no-shadow" src={minesweeper1}></img>
                                    <img alt="Gameplay depicting a bomb" className="subpage-img-small-no-shadow" src={minesweeper2}></img>
                                    <img alt="Gameplay depicting adding flags" className="subpage-img-small-no-shadow" src={minesweeper3}></img>
                            </div>
                            <div className="title">
                            Shopping List <span className="pad-10"><a href="https://github.com/eutopi/shopping-list"><FaGithubAlt/></a></span>
                            </div>
                            A simple, no-hassle shopping list application that supports adding and editing items, easy checklist, and summary statistics with persistance data storage.
                            <div className="flex-row pad-50">
                                    <img alt="Shopping list screen showing total items in cart" className="subpage-img-small-no-shadow" src={shopping1}></img>
                                    <img alt="Screen showing how to add items to cart" className="subpage-img-small-no-shadow" src={shopping2}></img>
                                    <img alt="Screen showing a summary of items" className="subpage-img-small-no-shadow" src={shopping3}></img>
                            </div>
                            <div className="title">
                            Weatheria
                            </div>
                            A weather app that pulls accurate and up-to-date weather information from the OpenWeather API.
                            <div className="flex-row pad-50">
                                    <img alt="A list of cities added to the app" className="subpage-img-small-no-shadow" src={weatheria1}></img>
                                    <img alt="Screen showing how to add a new city" className="subpage-img-small-no-shadow" src={weatheria2}></img>
                                    <img alt="Screen showing the temperature in a selected city" className="subpage-img-small-no-shadow" src={weatheria3}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-row flex-center footer">Made with 🍄 by Tongyu Zhou</div>
            </div>
        )
    }
}