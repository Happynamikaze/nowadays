import React from "react";
import Sliders from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./alumnisec.module.css"
import yc from "../../../assets/YC.svg"
import google from "../../../assets/google.png"
import meta from "../../../assets/meta.png"
import mit from "../../../assets/mit.png"
import mk from "../../../assets/mk.png"

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
		<div className="sldier-div-bg">
			<Container >
				<Row className="my-5 py-3 ">
					<p className="text-center f-40 f-24-r fw-700 my-2 d-inline-block text-color-blue ">Built by Alumni from</p>
					<Col >
						<Sliders {...setting}>
							<Col md={3}>
								<div className="slider-logo-div">
									<div>

										<img src={yc} alt="" width={200} />
									</div>
								</div>
							</Col>
							<Col md={3}>
								<div className="slider-logo-div">
									<div>

										<img src={google} alt="" width={200} />
									</div>
								</div>
							</Col>
							<Col md={3}>
								<div className="slider-logo-div">
									<div>

										<img src={meta} alt="" width={200} />
									</div>
								</div>
							</Col>
							<Col md={3}>
								<div className="slider-logo-div">
									<div>

										<img src={mit} alt="" width={200} />
									</div>
								</div>
							</Col>
							<Col md={3}>
								<div className="slider-logo-div">
									<div>

										<img src={mk} alt="" width={200} />
									</div>
								</div>
							</Col>
						</Sliders>

					</Col>
				</Row>

			</Container>
		</div>
	)
}
export default Alumnisec;