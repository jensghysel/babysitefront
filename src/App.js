import React, { Component } from 'react';
import './css/fontello-icon.css';
import './css/linea-icon.css';
import './css/bootstrap.min.css';
import './css/animate.css';
import './css/main.css';
import './css/color-1.css';
import 'jquery';
import 'react-bootstrap';
import Head from "./components/head";
import Geslacht from "./components/Geslacht";
import Gallery from "./components/Gallery";
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// optional alert configuration
const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
};

export default class App extends Component {
  render() {
    require('./js/main');
    return (
        <AlertProvider template={AlertTemplate} {...options}>
          <div className="page-overlay">
            <div id="preloader">
              <div className="alignment">
                <div className="v-align center-middle">
                  <div className="heart-animation one">
                    <i className="icon icon-heart"></i>
                  </div>
                  <div className="heart-animation two">
                    <i className="icon icon-heart"></i>
                  </div>
                  <div className="heart-animation three">
                    <i className="icon icon-heart"></i>
                  </div>
                  <div className="heart-animation four">
                    <i className="icon icon-heart"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-image-bg reveal scale-in"></div>
            <div className="overlay-bg-black overlay-opacity"></div>
            <header>
              <nav className="navbar navbar-fixed-top">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 text-white col-transform">
                      <div className="navbar-wrapper">
                        <button className="navbar-button show-info" data-href="#content">
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
            <Head/>
            <div id="content" className="page-content col-md-12 text-center bg-white">
              <Geslacht/>
              <div className="bezel"></div>
              <Gallery/>
              <div className="footer copyrights">
                <div className="copyright">© 2019 babyghysel | Development by Jens Ghysel</div>
              </div>
            </div>
          </div>
        </AlertProvider>
    );
  }
}
