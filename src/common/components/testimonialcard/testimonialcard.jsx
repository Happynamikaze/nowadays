import Styles from "./testimonialcard.module.css"
function Testimonialcard(props) {
	const { ReviewBy_name, ReviewBy_pos, Review, mode, fontClass, nth } = props;
	return (
		
		<div className={`${Styles["sldier-divs"]}`}>
			<p className="f-24 fw-700 text-center">{ReviewBy_name}</p>
			<p className="f-18 fw-600 text-center fst-italic"> - {ReviewBy_pos}</p>
			<p className="f-15 fw-400 text-center fst-italic">"{Review}"</p>
		</div>
	)
}
export default Testimonialcard;