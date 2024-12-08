import React from "react";
import HeroImag from "../assets/Images/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg";
import { Button } from "./ui/button";

const HeroSection = () => {
	return (
		<div
			className="flex w-full h-max items-center justify-between gap-12"
			style={{ backgroundImage: `url(${HeroImag})`, height: "100vh" }}
		>
			<div className="text-2xl m-auto">
				<h1 className="text-8xl font-bold text-white">
					Consultation, <br /> Design,
					<br /> & Marketing
				</h1>
			</div>
			<div className="flex flex-col contact h-fit w-80 bg-blue-950 opacity-70 m-auto items-center gap-4 rounded-sm p-10">
				<h1 className="text-2xl ">
					Get a Free <br />
					Consultation
				</h1>
				<input
					type="text"
					className="bg-cyan-600 pl-5 py-3 border-1  placeholder-white rounded-lg"
					placeholder="FullName"
				/>
				<input
					type="text"
					className="bg-cyan-600 pl-5  py-3 placeholder-white rounded-lg"
					placeholder="Email Address"
				/>
				<input
					type="text"
					className="bg-cyan-600 pl-5  py-3 placeholder-white rounded-lg"
					placeholder="Phone Number"
				/>
				<input
					type="text"
					className="bg-cyan-600 pl-5  py-3 placeholder-white rounded-lg"
					placeholder="City"
				/>
				<Button className="bg-orange-600 h-10 w-fit ">
					Get Quick Care
				</Button>
			</div>
		</div>
	);
};

export default HeroSection;
