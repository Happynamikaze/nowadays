import { Col, Container, Row } from "react-bootstrap";
import ycom from "../../../assets/YC.svg"
import Styles from "./hero.module.css";

function Hero() {
	return (
		<>
			<Container className="my-5">
				<Row className="flex-column">
					<Col xl={7} lg={9}   className="mx-auto">
						<p className={`${Styles['sign_in-mob']} f-56 f-24-r fw-700 text-center`}>Your <span className={`${Styles['ai_text_ani']}`}>
							<span className={`${Styles['focus']}`}>
								<div className={`${Styles['focus--mask']}`}>
									<div className={`${Styles['focus--mask-inner']} f-24-r fw-600`}>AI&#9866;powered</div>
								</div>
							</span>
						</span> <br /> corporate event planner</p>
					</Col>
					<Col xl={6} lg={9} md={10} sm={10} xs={10} className="mx-auto d-flex flex-column gap-4  align-items-center gap-3">
						<p className="text-center mt-5  f-15-r f-18 fw4500">Nowadays is your AI copilot that takes the hassle out of organizing corporate events. For example, our AI can contact venues by email and phone to get availability, deal with back-and-forth negotiations, and present the best options.</p>
						<p className={`${Styles["book_a_demo"]} btn-bg-color d-inline-block `}>
							<a href="" className={`text-color-white-cream f-18 fw-500 bx-shadow`}>Book a demo!</a>
						</p>

					</Col>
				</Row>
			</Container>
			<div className={` ${Styles["backed_by"]} my-5 `}>
				<p className="f-18 fw-600 text-center text-color-white-cream">
					Backed by : <img src={ycom} alt="" width={150} />
				</p>
			</div>

		</>
	)
}
export default Hero;