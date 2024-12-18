import React, { useState, useRef } from "react";
import HeroImag from "../assets/Images/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { FORM_URL, LOCAL_SUB_URL } from "./api.jsx";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    fullName: "",
    mobile: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  // Refs for each input field
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const cityRef = useRef(null);

  const onChangeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { email, fullName, mobile, city } = input;

    const formDataa = new FormData();
    formDataa.append("email", input.email);
    formDataa.append("fullName", input.fullName);
    formDataa.append("mobile", input.mobile);
    formDataa.append("city", input.city);

    try {
      setLoading(true);
      const res = await axios.post(`${FORM_URL}/create`, formDataa, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success("Data Submitted Successfully");
        console.log(res.data.message);
      }
    } catch (error) {
      toast.error("Data Submitted Successfully");
      console.log(error);
    } finally {
      // Clear the input fields manually using refs
      fullNameRef.current.value = "";
      emailRef.current.value = "";
      mobileRef.current.value = "";
      cityRef.current.value = "";

      // Reset state as well
      setInput({
        email: "",
        fullName: "",
        mobile: "",
        city: "",
      });
      
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
          ref={fullNameRef}
          type="text"
          name="fullName"
          className="bg-cyan-600 pl-5 py-3 border-1  placeholder-white rounded-lg"
          placeholder="FullName"
          onChange={onChangeHandler}
        />
        <input
          ref={emailRef}
          type="text"
          name="email"
          onChange={onChangeHandler}
          className="bg-cyan-600 pl-5 py-3 placeholder-white rounded-lg"
          placeholder="Email Address"
        />
        <input
          ref={mobileRef}
          type="text"
          name="mobile"
          onChange={onChangeHandler}
          className="bg-cyan-600 pl-5 py-3 placeholder-white rounded-lg"
          placeholder="Phone Number"
        />
        <input
          ref={cityRef}
          type="text"
          name="city"
          onChange={onChangeHandler}
          className="bg-cyan-600 pl-5 py-3 placeholder-white rounded-lg"
          placeholder="City"
        />

        {loading ? (
          <Button className="w-full my-4">
            <Loader2 className="ar-2 h-4 w-4 animate-spin" />
            Please Wait
          </Button>
        ) : (
          <Button
            onClick={onSubmitHandler}
            className="bg-orange-600 h-10 w-fit "
          >
            Get Quick Care
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
