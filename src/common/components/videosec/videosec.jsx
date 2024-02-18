import { Col, Container, Row } from "react-bootstrap";
import Styles from "./videosec.module.css"
function Videosec() {
	return (
		<>
			<Container>
				<Row>
					<Col md={7} className="mx-auto mt-5">
						<div className={`${Styles["videoDiv"]}  bx-shadow`}>
							<iframe width="100%" height="400" src="https://www.youtube.com/embed/SS2bcogWkeE" title="Nowadays - AI for Event Planning (YC S23)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Videosec;