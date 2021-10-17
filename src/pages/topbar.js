import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CV from "../files/cv.pdf";

import './main.css'

export class Topbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return(
            <div className="flex-row flex-center topbar-style">
                <div className="flex-column pad-10">
                    <div className="flex-row flex-end">
                        <div className="pad-10"><div className="topbar-label">
                            <Link to="/">about</Link>
                        </div></div>
                        <div className="pad-10"><div className="topbar-label">
                            <Link to="/publications">publications</Link>
                        </div></div>
                        <div className="pad-10"><div className="topbar-label">
                            misc
                        </div></div>
                        <div className="pad-10"><div className="topbar-label">
                            <a href={CV}>cv</a>
                        </div></div>
                    </div>
                </div>
            </div>
        )
    }
}