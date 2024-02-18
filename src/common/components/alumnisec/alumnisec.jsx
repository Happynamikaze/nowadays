import React from "react";
import Sliders from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./alumnisec.module.css"
import yc from "../../../assets/YC.svg"

function Alumnisec() {



	var setting = {
		dots: false,
		infinite: true,
		speed: 100,
		arrows: false,
		autoplay: true,
		slidesToShow: 4,
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
					<p className="text-center f-24 fw-600 my-2 text-color-blue">Built by Alumni from</p>
					<Col>
						<Sliders {...setting}>
							<Col md={3}>
								<img src={yc} alt="" width={200} />
							</Col>
							<Col md={3}>
								<img src={yc} alt="" width={200} />
							</Col>
							<Col md={3}>
								<img src={yc} alt="" width={200} />
							</Col>
						</Sliders>

					</Col>
				</Row>

			</Container>
		</div>
	)
}
export default Alumnisec;