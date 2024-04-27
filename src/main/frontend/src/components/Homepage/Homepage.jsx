import './Homepage.css';
import '../../Variables.css'
import React, { useState, useEffect } from "react";
import homePic from '../../assets/homePic.jpg';
import Java from '../../assets/java.svg'
import JavaScript from '../../assets/JS.png'
import Python from '../../assets/Python.svg'
import SQL from '../../assets/SQL.png'
import {Container, Row, Col} from 'react-bootstrap';

const Homepage = () => {

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}


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

    ArrayPlusDelay(['Gain Confidence','Expand Your Skills','z'], function(obj) {document.getElementById("RotatingKeywords").textContent=(obj)},5000)

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}



asyncCall();

async function asyncCall(){
const elm = await waitForElm('#canvas');
// if (document.querySelector("canvas")){

const canvas = document.querySelector("canvas");

// const imgHeight= document.getElementById("overlay-img");
// console.log(imgHeight)
canvas.height = 800;
canvas.width = window.innerWidth;

const ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#F1B866";
ctx.strokeStyle = "rgba(219, 237, 243, 1)";

const particles = [];

function getDist(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function init() {
  for (let i = 0; i < 100; i += 1) {
    const x = Math.floor(Math.random() * canvas.width);
    const y = Math.floor(Math.random() * canvas.height);
    const speedX = Math.random();
    const speedY = Math.random();
    const dirX = Math.random() > 0.5 ? 1 : -1;
    const dirY = Math.random() > 0.5 ? 1 : -1;

    particles.push({
      x,
      y,
      speedX: dirX * speedX,
      speedY: dirY * speedY,
      neighbors: [],
    });
  }
  requestAnimationFrame(draw);
}

let mouseX;
let mouseY;

function draw() {
  ctx.fillStyle = "rgba(255,255,255,.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#F1B866";

  for (let i = 0; i < particles.length; i += 1) {
    let x = particles[i].x + particles[i].speedX;
    let y = particles[i].y + particles[i].speedY;
    if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
      x = Math.floor(Math.random() * canvas.width);
      y = Math.floor(Math.random() * canvas.height);
    }

    const x1 = mouseX || 2000;
    const y1 = mouseY || 2000;
    const dist = getDist(x, y, x1, y1);
    if (dist < 200) {
      if (x < x1) {
        x -= 2;
      } else {
        x += 2;
      }
      if (y < y1) {
        y -= 2;
      } else {
        y += 2;
      }
    }

    ctx.moveTo(x, y);
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    particles[i].x = x;
    particles[i].y = y;
  }
  ctx.fill();

  for (let i = 0; i < particles.length; i += 1) {
    const x = particles[i].x;
    const y = particles[i].y;
    const neighbors = particles[i].neighbors;
    for (let j = 0; j < neighbors.length; j += 1) {
      const x1 = neighbors[j].x;
      const y1 = neighbors[j].y;
      const dist = getDist(x, y, x1, y1);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}

init();

canvas.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  setTimeout(() => {
    if (mouseX === e.clientX && mouseY === e.clientY) {
      for (let i = 0; i < particles.length; i += 1) {
        let x = particles[i].x;
        let y = particles[i].y;
        const x1 = e.clientX;
        const y1 = e.clientY;
        const dist = getDist(x, y, x1, y1);

        if (dist < 200) {
          if (x < x1) {
            x -= 2;
          } else {
            x += 2;
          }
          if (y < y1) {
            y -= 2;
          } else {
            y += 2;
          }
        }
        particles[i].x = x;
        particles[i].y = y;
      }
    }
  }, 10);
});

setInterval(() => {
  const copy = [...particles];
  for (let i = 0; i < particles.length; i += 1) {
    const x = particles[i].x;
    const y = particles[i].y;

    copy.sort((a, b) => {
      const x1 = a.x;
      const x2 = b.x;
      const y1 = a.y;
      const y2 = b.y;
      const dist1 = getDist(x, y, x1, y1);
      const dist2 = getDist(x, y, x2, y2);
      return dist1 - dist2;
    });

    particles[i].neighbors = copy.slice(0, 10);
  }
}, 250);
}


  return (

    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
    <h1 id="RotatingKeywords" >Build Expertise</h1>
    <h4 className="mb-3">Test and expand your coding knowledge to master web development </h4>

    <div id="trial-container" className="pb-5">
       <canvas id="canvas"></canvas>
{/*     <div id="trial"> </div> */}
    <img id="overlay"  className="mt-3 home-main-pic" src={homePic}/>
    </div>

{/*      Image sizes need to fix    */}
<div className="home-info-container mt-3 pt-3 pb-3">
    <Container className="mt-3 home-tech-container">
        <Row> <h2 className="mt-1 mb-1">Technologies</h2> </Row>

        <Row>
           <Col xs={6} md={3}><img className="tech-img" src={Java}/>Java</Col>
           <Col xs={6} md={3}><img className="tech-img" src={JavaScript}/>JavaScript</Col>
           <Col xs={6} md={3}><img className="tech-img" src={Python}/>Python</Col>
           <Col xs={6} md={3}><img className="tech-img" src={SQL}/>SQL</Col>
        </Row>

    </Container>
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

{/*    <canvas></canvas> */}
    </div>
  );
};

export default Homepage;