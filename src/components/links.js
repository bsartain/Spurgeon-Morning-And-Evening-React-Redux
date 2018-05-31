import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SpurgeonThumb from '../cs-thumb.png';


export default class Links extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand">
                <img src={SpurgeonThumb} className="spurgeon-thumb" alt="Charles Spurgon Morning and Evening Meditations"/>Spurgeon Daily Meditations
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
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
        </nav>

    )
  }
}
