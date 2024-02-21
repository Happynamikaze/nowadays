import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./rangemeater.css"
import { Col, Container, Row } from 'react-bootstrap';

function RangeMeter() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const numbers = document.querySelector('.counters');

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: numbers,
        start: 'top bottom ',
        markers: false,
        toggleActions: 'restart pause resume pause',
      },
    });

    gsap.utils.toArray('.counterOne').forEach(function (el) {
      var target = { val: 0 };
      tl.to(target, {
        val: el.getAttribute('data-number'),
        duration: 2,
        onUpdate: function () {
          el.innerText = target.val.toFixed(1);
        },
      });
    });

    gsap.utils.toArray('.counterTwo').forEach(function (el) {
      var target = { val: 0 };
      tl.to(target, {
        val: el.getAttribute('data-number'),
        duration: 2,
        onUpdate: function () {
          el.innerText = target.val.toFixed(0);
        },
      });
    });

    gsap.utils.toArray('.counterThree').forEach(function (el) {
      var target = { val: 0 };
      tl.to(target, {
        val: el.getAttribute('data-number'),
        duration: 3,
        onUpdate: function () {
          el.innerText = target.val.toFixed(0);
        },
      });
    });

    tl.play();

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <Container className='my-5 secHeightSet' >
          <p className=' f-40 fw-700 f-24-r text-center text-color-blue'>Lorem ipsum</p>
        <Row className='counters mx-auto d-flex flex-md-row flex-column wi justify-content-around gap-4  mt-5'>
          <Col>
            <div>

              <p className='f-56 f-24-r fw-700 text-center '>
                <span className="counterOne" data-number="43.5">
                  0
                </span>
                %   
              </p>
            </div>
          </Col>

          <Col>
            <div>

              <p className='f-56 f-24-r fw-700 text-center'>
                <span className="counterTwo" data-number="4">
                  0
                </span>
              </p>
            </div>
          </Col>
          <Col>

            <div>

              <p className='f-56 f-24-r fw-700 text-center'>
                <span className="counterThree" data-number="50">
                  0
                </span>
                k+
              </p>
            </div>

          </Col>
        </Row>
      </Container>

    </>
  );
}

export default RangeMeter;
