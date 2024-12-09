import React, { useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
// import imgg  from ".../assets/Images/pexels-brett-sayles-2881232.svg"
// import imgg from "src/assets/Images/pexels-brett-sayles-2881232.svg"

const ClientDetails = () => {
	const [input, setInput] = useState({
		name: "",
		description: "",
		designation: "",
		file: "",
	});
	const onChangeHandler = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	const onFileChange = (e) => {
		setInput({ ...input, file: e.target.files?.[0] });
	};
	const onSubmitHandler = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("name", input.fullname);
		formData.append("designation", input.email);
		formData.append("description", input.phoneNumber);
		if (input.file) {
			formData.append("file", input.file);
		}
		try {
			const { name, description, designation, file } = input;
			const res =await axios.post(`${USER_API_END_POINT}/register`, formData, {
				headers: {
				  'Content-Type': "multipart/form-data",
				},
				withCredentials: true,
			  });
			  console.log(res);
			  if (res.data.success) {
				// toast.success(res.data.message);
				console.log(res.data.message);
			  }
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<div className="text-center">
				<h1 className=" text-lg font-bold text-sky-400">
					Client Details
				</h1>
				<div className="cards  max-w-56 min-w-64 max-h-fit bg-white pb-3 rounded-xl grid">
					<img src="" alt="" className="rounded-xl" />
					<h1 className="px-6 text-xl font-bold text-sky-400">
						Client Name
					</h1>
					<p className="px-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<p>Designation</p>
				</div>
			</div>

			<div className="form text-left ">
				<form
					onSubmit={onSubmitHandler}
					action=""
					className="w-96 h-96 bg-slate-500 flex flex-col gap-4 p-6 m-auto"
				>
					<h1 className=" text-lg font-bold text-sky-400 text-center">
						Creating Users
					</h1>
					<div className="field">
						<input
							onChange={onChangeHandler}
							type="text"
							name="name"
							value={input.name}

							placeholder="Name"
							className="placeholder-white bg-slate-500 border-2 border-black pl-3 rounded-sm"
						/>
					</div>
					<div className="field">
						<input
							type="text"
							name="description"
							value={input.description}
							
							onChange={onChangeHandler}
							placeholder="Description"
							className="placeholder-white bg-slate-500 border-2 border-black pl-3 rounded-sm"
						/>
					</div>
					<div className="field">
						<input
							type="text"
							name="designation"
							value={input.designation}
							onChange={onChangeHandler}
							placeholder="Designation"
							className="placeholder-white bg-slate-500 border-2 border-black pl-3 rounded-sm"
						/>
					</div>
					<div className="field ">
						<label className="text-white">
							Enter Profile Image
						</label>{" "}
						<br />
						<input type="file" name="file" accept="image/*" onClick={onFileChange} />
					</div>
					<div className="field flex justify-center  ">
						<Button
							type="submit"
							className="bg-cyan-600 border-black border-2 "
						>
							Submit
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ClientDetails;
