import { Col, Container, Row } from "react-bootstrap";
import Styles from "./bookdemo.module.css"
import React, { useState } from 'react';

function Bookdemo() {

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		whyNowadays: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// You can perform further actions here, like validation or submission
		console.log(formData);
		// Reset form data after submission if needed
		setFormData({
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			whyNowadays: ''
		});
	};
	return (
		<>
			<Container>
				<Row>

					<p className="f-24 fw-600 text-center pt-4">
						<span className="text-color-blue">Book</span> a Demo Today
					</p>
					<Col lg={8} md={11} sm={10} className={`${Styles["form_container"]} mx-auto `}>
						<form onSubmit={handleSubmit} className={`${Styles["form_bg"]} mt-5 pt-5`}>

							<div className="d-flex flex-md-row flex-column mx-auto justify-content-evenly ">
								<div>
									<label htmlFor="firstName">First Name</label> <br />
									<input
										type="text"
										id="firstName"
										name="firstName"
										value={formData.firstName}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<label htmlFor="lastName">Last Name</label> <br />
									<input
										type="text"
										id="lastName"
										name="lastName"
										value={formData.lastName}
										onChange={handleChange}
										required
									/>
								</div>
							</div>

							<div className="d-flex mx-auto flex-md-row flex-column justify-content-evenly ">

								<div>
									<label htmlFor="email">Email</label> <br />
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<label htmlFor="phone">Phone</label> <br />
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="d-flex justify-content-center flex-column align-items-center">
								<label htmlFor="whyNowadays">Why Nowadays?</label> <br />
								<textarea
									id="whyNowadays"
									name="whyNowadays"
									value={formData.whyNowadays}
									onChange={handleChange}
									required
								/>
							</div>
							<div >
								<button className={`${Styles["submit-btn"]}`} type="submit">Submit</button>
							</div>
						</form>
						<div class={`${Styles['drops']} mt-5`}>
							<div class={`${Styles['drop']} ${Styles['drop-1']}  mt-5`}></div>
							<div class={`${Styles['drop']} ${Styles['drop-2']}  mt-5`}></div>
							<div class={`${Styles['drop']} ${Styles['drop-3']}  mt-5`}></div>
							<div class={`${Styles['drop']} ${Styles['drop-4']}  mt-5`}></div>
							<div class={`${Styles['drop']} ${Styles['drop-5']}  mt-5`}></div>
						</div>
					</Col>
				</Row>

			</Container>
		</>
	)
}


export default Bookdemo;