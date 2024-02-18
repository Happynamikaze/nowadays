import Alumnisec from "../../common/components/alumnisec/alumnisec";
import Hero from "../../common/components/hero/hero";
import Navbar from "../../common/components/navbar";
import Testimonial from "../../common/components/testimonial/testimonial";
import Videosec from "../../common/components/videosec/videosec";
import Gifdemo from "../../common/gifdemo/gifdemo";

function Home(){
	return(
		<>
		<Navbar/>
		<Hero/>
		<Videosec/>
		<Testimonial/>
		<Gifdemo/>
		<Alumnisec/>
		
		</>
	)
}

export default Home;