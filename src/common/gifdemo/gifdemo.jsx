import { Col, Container, Row } from "react-bootstrap";
import Styles from "./gifdemo.module.css"
function Gifdemo() {

	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="d-flex flex-column align-items-center gap-4 mt-5">

							<p className="f-40 fw-700 text-center f-24-r">See what sets <span className="text-color-blue " >Nowadays</span> apart</p>
							<img src="https://static.typecdn.com/8bb7beb9-5277-4a95-afb5-5723e0cda6b3/2Y3CHp4zw5f36MXTLos5GgK62mr_demo.gif" alt="" className={`${Styles["gif-set"]}`} />
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}
export default Gifdemo;