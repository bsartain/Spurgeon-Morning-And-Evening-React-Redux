import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SpurgeonThumb from '../cs-thumb.png';


export default class Links extends Component {
  render() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <img src={SpurgeonThumb} className="spurgeon-thumb" alt="Charles Spurgon Morning and Evening Meditations"/>
            <span className="navbar-brand">Spurgeon Daily Meditations</span>
            <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to={'/'}>Todays Devotion</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/archive'}>Archive</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/about'}>About Spurgeon</Link>
                    </li>
                </ul>
            </div>
            <hr/>
        </nav>

    )
  }
}
