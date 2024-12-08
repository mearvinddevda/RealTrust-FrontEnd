import React from "react";
import logo from "../assets/Images/logo.svg";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
    
	return (
		<div className="flex items-center justify-between mx-auto max-w-7xl h-16 ">
			<div className="navbar-logo">
				<img src={logo} alt=" " className="h-10" />
			</div>
			<div className="flex items-center gap-12">
				<Link>Home</Link>
				<Link>Services</Link>
				<Link>AboutProjects</Link>
				<Link>Testimonials</Link>
				<Button className="bg-orange-600 h-10 w-fit ">Contact</Button>
			</div>
		</div>
	);
};

export default Navbar;
