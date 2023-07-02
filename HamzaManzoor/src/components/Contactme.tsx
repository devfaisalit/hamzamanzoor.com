import { useState } from "react";
import { getFirestore,collection, addDoc } from "firebase/firestore";
import { app } from "../Firebase";

const firestore = getFirestore(app)

import Swal from "sweetalert2";

import { BsPerson } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";
import { TfiLocationPin } from "react-icons/tfi";
import Container from "../pages/Container";
function Contactme() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const userCollectionRef = collection(firestore, "contact-us");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addDoc(userCollectionRef, data)
      .then(() => {
        Swal.fire("Good job!", "Your data has been submitted!", "success");
        setData({ name: "", email: "", message: "", subject: "" });
      })
      .catch((error) => {
        alert(error?.message);
      });
  };

  return (
    <Container>
      <section
        id="contactme"
        className="mt-40 sm:mt-8 pt-12 md:pt-0 xl:pt-10 md:space-y-8"
      >
        <h1 className="text-4xl md:text-7xl lg:text-[100px] sm:tracking-widest lg:tracking-normal xl:tracking-widest font-Varino text-center md:text-start text-[#ffffff2a] font-normal">
          Contact me
        </h1>
        <h2 className="text-white pt-4 md:pt-0 text-2xl md:text-4xl font-Varino font-medium text-center tracking-widest">
          Let’s start project
        </h2>
        <div className="pb-10 md:pb-20 space-y-4 md:spac-y-0 opacity-80 w-full flex-col-reverse xl:flex-row flex-wrap flex justify-evenly items-center">
          <div className=" text-white flex flex-col justify-center space-y-5 border-l h-[330px] sm:h-[400px] border-white border-opacity-20 pl-4 sm:pl-10 ">
            {/* UL #1 */}
            <ul className="flex space-x-1 md:space-x-6 items-center">
              <li className="w-[40px] sm:w-[60px] text-3xl sm:text-5xl flex items-center justify-center h-[40px] sm:h-[60px] text-opacity-80 bg-[#00B7DF] bg-opacity-80">
                <BsPerson />
              </li>
              <li>
                <h5 className="font-normal text-[10px] sm:text-[12px] opacity-60">
                  Name
                </h5>
                <p className="text-[14px] font-medium tracking-[2px]">
                  Hamza Manzoor
                </p>
              </li>
            </ul>
            {/* UL #2 */}
            <ul className="flex space-x-1 md:space-x-6 items-center">
              <li className="w-[40px] sm:w-[60px] text-3xl sm:text-5xl flex items-center justify-center h-[40px] sm:h-[60px] text-opacity-80 bg-[#00B7DF] bg-opacity-80">
                <MdAlternateEmail />
              </li>
              <li>
                <h5 className="font-normal text-[10px] sm:text-[12px] opacity-60">
                  Email
                </h5>
                <p className="sm:text-[14px] text-[12px] font-medium sm:tracking-[2px]">
                  hamzamanzoor8234@gmail.com
                </p>
              </li>
            </ul>
            {/* UL #3 */}
            <ul className="flex space-x-1 md:space-x-6 items-center">
              <li className="w-[40px] sm:w-[60px] text-3xl sm:text-5xl flex items-center justify-center h-[40px] sm:h-[60px] text-opacity-80 bg-[#00B7DF] bg-opacity-80">
                <GiSmartphone />
              </li>
              <li>
                <h5 className="font-normal text-[10px] sm:text-[12px] opacity-60">
                  Phone
                </h5>
                <p className="sm:text-[14px] text-[12px] font-medium tracking-[2px]">
                  +92 303-7324393
                </p>
              </li>
            </ul>
            {/* UL #4 */}
            <ul className="flex space-x-1 md:space-x-6 items-center">
              <li className="w-[40px] sm:w-[60px] text-3xl sm:text-5xl flex items-center justify-center h-[40px] sm:h-[60px] text-opacity-80 bg-[#00B7DF] bg-opacity-80">
                <TfiLocationPin />
              </li>
              <li>
                <h5 className="font-normal text-[10px] sm:text-[12px] opacity-60">
                  Address
                </h5>
                <p className="sm:text-[14px] text-[12px] font-medium tracking-[2px]">
                  HockeyStadium Faisalabad
                </p>
              </li>
            </ul>
          </div>

          <form className="max-w-[645px] px-2 sm:px-0 flex-wrap pt-4 pb-10 lg:pb-10 space-y-5 md:space-y-9 text-white" onSubmit={handleSubmit}>
          <div className="md:space-x-2 space-y-5 md:space-y-0">
          <input
            className="bg-black bg-opacity-80 rounded-[5px] px-[20px] border border-white border-opacity-90 w-full md:w-[290px] h-[56px]"
            type="text"
            required
            placeholder="Full Name"
            value={data.name}
            onChange={(event) => {
              setData({ ...data, name: event.target.value });
            }}
          />
              <input
                className="bg-black bg-opacity-80 px-[20px] rounded-[5px] border border-white border-opacity-90 w-full md:w-[290px] h-[56px]"
                type="subject"
                required
                placeholder="Subject"
                value={data.subject}
              onChange={(event) => {
                setData({ ...data, subject: event.target.value });
              }}
              />
          </div>
            <input
              className="bg-black bg-opacity-80 rounded-[5px] px-[20px] border border-white border-opacity-90 w-full h-[56px]"
              type="email"
              required
              placeholder="E-mail"
              value={data.email}
            onChange={(event) => {
              setData({ ...data, email: event.target.value });
            }}
            />
          <textarea
            className="bg-black bg-opacity-80 rounded-[5px] pt-5 px-[20px] border border-white border-opacity-90 w-full h-[135px]"
            placeholder="Description"
            value={data.message}
          required
          onChange={(event) => {
            setData({ ...data, message: event.target.value });
          }}
          />
          <ul className="md:flex justify-between items-center space-y-4 md:space-y-0 ">
              <ol className="flex space-x-2">
                <input type="checkbox" required />{" "}
                <p>Accept Terms and Conditions</p>
              </ol>
              <li className="flex justify-end">
                <button
                  type="submit"
                  className="text-white rounded-[5px] border w-[148px] h-[56px] border-white"
                >
                  Submit
                </button>
              </li>
            </ul>
        </form>
        </div>
      </section>
    </Container>
  );
}

export default Contactme;
