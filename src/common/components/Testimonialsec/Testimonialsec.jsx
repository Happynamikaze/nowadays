import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./Testimonialsec.module.css"
import Testimonialcard from "../testimonialcard/testimonialcard";

function Testimonialsec() {



	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		arrow:false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	return (
		<div div className="sldier-div-bg">
			<Container >
				<Row className="my-5 py-3">
					<p className="text-center f-40 f-24-r fw-700 my-2 text-color-blue">Customer Reviews</p>
					<Col className={`${Styles["slider-set-hov"]}`}>
						<Slider {...settings}>
							<Col md={3}>
								<Testimonialcard ReviewBy_name='Emily Zundel' ReviewBy_pos='Admin Business Partner at Google' Review="This was all through Al?! That's so cool!
								I can't wait to review the list of offsite
								options generated by Nowadays with
								our VP next week." />
							</Col>
							<Col md={3}>
								<Testimonialcard ReviewBy_name='Renee Mars' ReviewBy_pos='Director of Events at Y Combinator' Review="The recommendations we received
									from Nowadays for destinations and
									activities were incredibly helpful in
									lanning our partner offsite for 2024." />
							</Col>
							<Col md={3}>
								<Testimonialcard ReviewBy_name='Audrey Kim' ReviewBy_pos='Founder of On and Offsites' Review="OH MY GOSH the quotes for the offsite
									enues were so helpful and amazing — I
									can't believe Nowadays got this all
									done so quickly!" />
							</Col>
						</Slider>

					</Col>
				</Row>

			</Container>
		</div>
	)
}
export default Testimonialsec;