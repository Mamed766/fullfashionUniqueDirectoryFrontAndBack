import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";

const Footer = () => {
  const footerStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/07/home-1-footer-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  return (
    <footer style={footerStyle} className="bg-black text-white py-20">
      <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="flex   flex-col gap-5">
          <img
            src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/Light-logo.svg"
            alt="darkfashion logo"
            className="mb-4 max-w-[200px]"
          />
          <p className="mb-4">
            Quisque eleifend eu dolor a pulvinar. Vestibulum auctor dolor justo,
            a dignissim orci rutrum a. Integer finibus mauris risus.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="hover:text-[#BB9D7B] duration-300" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="hover:text-[#BB9D7B] duration-300" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="hover:text-[#BB9D7B] duration-300" />
            </a>
            <a href="#" aria-label="Pinterest">
              <FaPinterestP className="hover:text-[#BB9D7B] duration-300" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">ORDER ASSISTANCE</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Book An Appointment
              </a>
            </li>
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Gift Wrapping
              </a>
            </li>
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Follow Your Order
              </a>
            </li>
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Stores
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">COMPANY</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Awards
              </a>
            </li>
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Our Mission
              </a>
            </li>
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Press Release
              </a>
            </li>
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Hire Me
              </a>
            </li>
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Affiliates And Creators
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">SUPPORT</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Shipping And Returns
              </a>
            </li>
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Tracking
              </a>
            </li>
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Size Charts
              </a>
            </li>
            <li>
              <a className="hover:text-[#BB9D7B] duration-300" href="#">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold mb-4">TALK TO US</h3>
          <p>Got Questions? Call us</p>
          <p className="hover:text-[#BB9D7B] duration-300 cursor-pointer">
            (+11) - 415 - 5552671
          </p>
          <p className="hover:text-[#BB9D7B] duration-300">
            <FaEnvelope className="inline-block mr-2 " /> contact@example.com
          </p>
          <p className="flex items-center gap-2 hover:text-[#BB9D7B] duration-300">
            <FaHome />
            No 58A, Baltimore Street, USA
          </p>
        </div>
      </div>
      <div className="max-w-[1440px] pt-10 mx-auto">
        <hr className="border-gray-500" />
        <div className="flex gap-2 flex-wrap justify-center md:justify-between pt-5">
          <div>© 2023 dark fashion, All Rights Reserved</div>
          <div className="">
            <Image
              alt=""
              src={
                "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/payment-icon.png"
              }
              width={200}
              height={200}
              quality={100}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
