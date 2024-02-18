import { Col, Container, Row } from "react-bootstrap";
import Style from "./navbar.module.css";
import logo_img from "../../assets/logo_sml.png"
import { useEffect, useState } from 'react';


export function useMediaQuery(query) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);

		}

		const listener = () => {
			setMatches(media.matches);
		};

		if (typeof media.addEventListener === "function") {
			media.addEventListener("change", listener);
		} else {
			media.addListener(listener);
		}

		return () => {
			if (typeof media.removeEventListener === "function") {
				media.removeEventListener("change", listener);
			} else {
				media.removeListener(listener);
			}

		};
	}, [matches, query]);
	return matches;

}

function Navbar() {


	const [open, setOpen] = useState(false);
	const hadlerSetOpen = () => setOpen(!open);

	useEffect(() => {
		const constTrigger = document.querySelectorAll('.contact-toggler');
		if (constTrigger) {

			constTrigger.forEach(e => {
				e.addEventListener('click', hadlerSetOpen)

			});
		}
	}, []);

	const isSmall = useMediaQuery("(max-width: 767px)");

	const [navOpen, setNavOpen] = useState(false);

	const variants = isSmall ? {
		open: { opacity: 1, x: 0, transition: { ease: "linear" } },
		closed: { opacity: 0, x: "-100" }
	} : {
		closed: { opacity: 1, x: 0, transition: { ease: "linear" } },
	}

	useEffect(() => {
		const size = {
			width: window.innerWidth
		}
		window.addEventListener("resize", () => {
			size.width = window.innerWidth;
			if (window.innerWidth >= 768) {
				navHandler();
			} else {
				setNavOpen(false);
			}

		})
		function navHandler() {


			setNavOpen(true);
		}
		if (size.width >= 768) {

			navHandler();
		} else {

			setNavOpen(false);
		}
	}, [])


	return (


		<>
			<Container className={`${Style["navbar_fix"]} bx-shadow mt-3  py-2`}>
				<Row className="  align-items-center">
					<Col xs={6}  >
						<div className={`${Style["left_side"]} d-flex    align-items-center gap-2`}>
							<img src={logo_img} alt="" width={30} />
							<p className="f-24 fw-500 text-color-black text-shadow">NOWADAYS</p>
						</div>
					</Col>
					<Col xs={6} >
						<div className={`${Style["right_side"]} d-flex align-items-center justify-content-end gap-5`}>
							<ul className={`${Style['menu_li_set']}  list-unstyled mb-0  ${navOpen ? Style['open'] : ''}  `} >
								<p><a href="" className={` ${Style['sign_in-mob']} text-color-black f-18 fw-500 text-shadow `}>Sign in</a></p>
								<p className={`${Style["create_acc"]} btn-bg-color `}>
									<a href="" className={`  text-color-white-cream f-18 fw-500 bx-shadow`}>Create Account</a>
								</p>
							</ul>
							<div id={Style['hamburger']} className={`d-block d-md-none navbar_cl ${navOpen ? Style['open'] : ''}`} onClick={() => setNavOpen(!navOpen)}>
								<svg width="30" height="30" viewBox="0 0 100 100">
									<path className={`${Style['line']} ${Style['line1']}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
									<path className={`${Style['line']} ${Style['line2']}`} d="M 20,50 H 80" />
									<path className={`${Style['line']} ${Style['line3']}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
								</svg>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}
export default Navbar;