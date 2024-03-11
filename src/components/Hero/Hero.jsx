import "./Hero.css";
import amazonLogo from "/public/images/amazon.png";
import flipkartLogo from "/public/images/flipkart.png";
import heroImage from "/public/images/hero-image.png";
function Hero() {
	return (
		<>
			<div className="hero container">
				<div className="hero__content">
					<div className="hero__content__title">YOUR FEET DESERVE THE BEST</div>
					<div className="hero__content__subtitle">
						YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
						SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
						SHOES.
					</div>
					<div className="hero__content__button-list">
						<button className="hero__content__button-list__shop-now-button">
							Shop Now
						</button>
						<button className="hero__content__button-list__category-button">
							Category
						</button>
					</div>
					<div className="hero__content__available-stores">
						<div className="hero__content__available-stores__title">
							Also Available On
						</div>
						<div className="hero__content__available-stores__link-list">
							<img src={amazonLogo} alt="" />
							<img src={flipkartLogo} alt="" />
						</div>
					</div>
				</div>
				<div className="hero__img">
					<img src={heroImage} alt="" />
				</div>
			</div>
		</>
	);
}

export default Hero;
