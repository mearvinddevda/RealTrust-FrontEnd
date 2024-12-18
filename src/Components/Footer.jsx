import React, { useState } from "react";
import bgImage from "../assets/Images/Rectangle.svg";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.svg";
// import facebok from "../assets/Icons/frame.svg";
import instagram from "../assets/Icons/Group.svg";
import linkedin from "../assets/Icons/Linkedin.svg";
import { LOCAL_SUB_URL, SUBSCRIBER_URL } from "./api.jsx";
import axios from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    console.log([...formData]);
    try {
      setLoading(true);
      const res = await axios.post(`${SUBSCRIBER_URL}/newsletter`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success("Subscribed Successfully");
        console.log(res.data.message);
      }
    } catch (error) {
      toast.error("Subscribed Successfully");
      console.log(error);
    } finally {
      // Reset the email state to empty string
      setEmail("");
      setLoading(false);
    }
  };

  return (
    <div className="text-center text-lg text-bold">
      <div
        className="footerimg h-fit w-full bg-opacity-6 "
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "65vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" text-center items-center">
          <h1 className="text-3xl font-bold text-white">
            Learn more about our listing process as well as <br />
            our staging and design work
          </h1>
          <Button className="bg-white w-72 text-blue-700 h-10 mt-5">
            Learn More
          </Button>
        </div>
      </div>
      <div className="flex items-center bg-blue-500 h-24">
        <div className=" flex items-center justify-center gap-12 text-white">
          <Link>Home</Link>
          <Link>Services</Link>
          <Link>Projects</Link>
          <Link>Testimonials</Link>
          <Link>Contact</Link>
        </div>
        <div className=" flex items-center justify-around gap-20 subscriber text-white ml-auto ">
          <h1>Subscriber</h1>
          <div className="flex   items-center p-8 justify-center">
            <input
              type="text"
              className=" h-8 bg-transparent border-b-none placeholder:text-white pl-3"
              name="email"
              value={email}
              onChange={onChangeHandler}
              placeholder="Enter Email Address"
            />
            {loading ? (
              <Button className="w-full my-4">
                <Loader2 className="ar-2 h-4 w-4 animate-spin" />
                Please Wait
              </Button>
            ) : (
              <Button
                onClick={onSubmitHandler}
                type="submit"
                className="text-blue-500 border-none bg-white font"
              >
                Subscribe
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around bg-black h-24 text-white">
        <div className="">
          <h1>© All Right Reserved</h1>
        </div>
        <div>
          <img src={logo} alt="" className="h-28 w-28 items-center" />
        </div>
        <div className=" flex justify-around items-center gap-3">
          <Link>
            <img
              src={instagram}
              alt=""
              className="bg-white rounded-full h-8 p-1"
            />
          </Link>
          <Link>
            <img
              src={linkedin}
              alt=""
              className="bg-white rounded-full h-8 p-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
