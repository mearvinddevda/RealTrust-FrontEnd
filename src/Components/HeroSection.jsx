import React, { useState } from "react";
import HeroImag from "../assets/Images/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { FORM_URL, LOCAL_SUB_URL } from "./api.jsx";
import axios from "axios";

const HeroSection = () => {
	const [input, setInput] = useState({
		email:"",
		fullName:"",
		mobile:"",
		city:"",

	});

	const [loading , setLoading] =useState(false);

	const onChangeHandler = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	const onSubmitHandler = async (e) => {
		e.preventDefault();
		const {email ,fullName ,mobile ,city} = input
		console.log({email ,fullName ,mobile ,city});
		
		const formDataa = new FormData();
        formDataa.append('email',input.email);
        formDataa.append('fullName',input.fullName);
        formDataa.append('mobile',input.mobile);
        formDataa.append('city',input.city);
		
		console.log([...formDataa]);
        try {
			setLoading(true);
            const res = await axios.post(`${FORM_URL}/create` , formDataa,{

                headers: {
                    'Content-Type': "multipart/form-data",
                  },
                withCredentials:true,
            });
            console.log(res);
			if (res.data.success) {
				toast.success(res.data.message);
				console.log(res.data.message);
			}
            
        } catch (error) {
			toast.error(error.message);
            console.log(error);
        }
		finally{
			setLoading(false);
		  }
	};
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
					name="fullName"
					className="bg-cyan-600 pl-5 py-3 border-1  placeholder-white rounded-lg"
					placeholder="FullName"
					onChange={onChangeHandler}
				/>
				<input
					type="text"
					name="email"
					onChange={onChangeHandler}

					className="bg-cyan-600 pl-5  py-3 placeholder-white rounded-lg"
					placeholder="Email Address"
				/>
				<input
					type="text"
					name="mobile"
					onChange={onChangeHandler}

					className="bg-cyan-600 pl-5  py-3 placeholder-white rounded-lg"
					placeholder="Phone Number"
				/>
				<input
					type="text"
					name="city"
					onChange={onChangeHandler}

					className="bg-cyan-600 pl-5  py-3 placeholder-white rounded-lg"
					placeholder="City"
				/>
				<Button 
				onClick={onSubmitHandler}
				className="bg-orange-600 h-10 w-fit ">
					Get Quick Care
				</Button>
			</div>
		</div>
	);
};

export default HeroSection;
