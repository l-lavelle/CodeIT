// Sometimes inital page load first paint not perfect is there a way to keep static version until other is loaded?
// On hover over tech give little background and grey out background
import './Homepage.css';
import '../../Variables.css'
import React, { useState, useEffect } from "react";
import homePic from '../../assets/homePic.jpg';
import Java from '../../assets/e-java.png'
import JavaScript from '../../assets/e-JS.png'
import Python from '../../assets/e-python.png'
import SQL from '../../assets/e-SQL.png'
import {Container, Row, Col} from 'react-bootstrap';
import {ArrayPlusDelay} from './HomeFunctions.js';
import {asyncCall} from './CanvasDrawing.js';

const Homepage = () => {

ArrayPlusDelay(['Gain Confidence','Expand Your Skills'], function(obj) {document.getElementById("RotatingKeywords").textContent=(obj)},5000)

setTimeout(() => {
  asyncCall();
}, "1");

asyncCall();


  return (

    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
    <h1 id="RotatingKeywords" >Build Expertise</h1>
    <h4 className="mb-3">Test and expand your coding knowledge to master web development </h4>

    <div id="canvas-container" className="pb-5">
       <canvas id="canvas"></canvas>
       <img id="above-img"  className="mt-3" src={homePic}/>
    </div>

    <div className="tech-border mx-3 mb-3">
        <div className=" home-tech-container">
            <Row> <h2 className="mt-2 mb-2">Technologies</h2> </Row>

            <Row className="mx-1">
               <Col xs={6} sm={3} className="mb-3 tech-name"><img className="tech-img" src={Java}/>Java</Col>
               <Col xs={6} sm={3} className="mb-3 tech-name"><img className="tech-img" src={JavaScript}/>JavaScript</Col>
               <Col xs={6} sm={3} className="mb-3 tech-name"><img className="tech-img" src={Python}/>Python</Col>
               <Col xs={6} sm={3} className="mb-3 tech-name"><img className="tech-img" src={SQL}/>SQL</Col>
            </Row>

        </div>
    </div>



  <div className="home-info-container pt-3 pb-3">
        <Container className="mt-3 home-language-container">
            <Row>
               <Col> <h2>Language Pics</h2> </Col>
               <Col>
               <Row>
               Learn New Languages
               </Row>
               <Row ><ul className="language-list"><li>sdf</li><li>asdf</li></ul></Row>
               </Col>
            </Row>
        </Container>
         <Container className="mt-3 home-skills-container">
                <Row>
                 <Col>
                   <Row>
                   Learn New Languages
                   </Row>
                   <Row ><ul className="language-list"><li>sdf</li><li>asdf</li></ul></Row>
                   </Col>
                    <Col> <h2>Challenge Your Skills</h2> </Col>

                </Row>
            </Container>
        <div></div>
      </div>


    </div>
  );
};

export default Homepage;