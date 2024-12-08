import React from "react";
import dollar from "../assets/Icons/circle-dollar-sign.svg"
const Services = () => {
	return (
		<div className="my-10">
			<div className="services-section text-center">
				<div className="heading">
					<h1 className=" text-lg font-bold text-sky-400">WHY CHOOSE US ?</h1>
					<img src="" alt="" />
				</div>
				<div className="flex justify-around gap-12 items-center text-center ">
					<div className="flex-col w-52 items-center gap-12 text-center  ">
						<img src={dollar}  alt="" className="h-10 w-10 mx-auto" />
						<h1 className=" text-lg font-bold text-sky-400">Potential ROI</h1>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
					<div className="card w-52 items-center">
						<img src={dollar} className="h-10 w-10 mx-auto"  alt="" />
						<h1 className=" text-lg font-bold text-sky-400" >Design</h1>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</div>
					<div className="card w-52 items-center">
						<img src={dollar} className="h-10 w-10 mx-auto"  alt="" />
						<h1 className=" text-lg font-bold text-sky-400"  >Marketing</h1>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
