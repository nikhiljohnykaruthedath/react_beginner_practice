import "./Navigation.css";
import brandLogo from "/public/images/brand_logo.png";

function Navigation() {
	return (
		<>
			<nav className="nav container">
				<img src={brandLogo} alt="" />
				<ul className="nav__items">
					<li>Menu</li>
					<li>Location</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
				<button className="nav__button">Login</button>
			</nav>
		</>
	);
}

export default Navigation;
