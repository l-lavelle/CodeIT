import './Homepage.css';
import '../../Variables.css'
import React, { useState } from "react";
import homePic from '../../assets/homePic.jpg'
import {Container, Row, Col} from 'react-bootstrap';

const Homepage = () => {

    function ArrayPlusDelay(array, delegate, delay) {

      var i = 0

      var interval = setInterval(function() {
          delegate(array[i]);

          if (i++ >= array.length - 1)
              clearInterval(interval);
        // loop would be i=0
      }, delay)
      return interval
    }

    ArrayPlusDelay(['Gain Confidence','Expand Skill Set','z'], function(obj) {document.getElementById("RotatingKeywords").textContent=(obj)},5000)

  return (

    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
    <h1 id="RotatingKeywords">Build Expertise</h1>
    <h4>Test and expand your coding knowledge to master web development </h4>
    <img src={homePic}/>
{/*      Need to fix the layout for responsiveness */}
<div className="home-info-container">
    <Container className=" mt-3 mx-3 home-tech-container">
        <Row>
           <Col sm={12} md={3}> <h2>Technologies</h2> </Col>
           <Col sm={6} md={3}>Java</Col>
           <Col sm={6} md={3}>JavaScript</Col>
           <Col sm={6} md={3}>Python</Col>
           <Col sm={6} md={3}>SQL</Col>
        </Row>
    </Container>
    <Container className="home-language-container">
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
     <Container className="home-skills-container">
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