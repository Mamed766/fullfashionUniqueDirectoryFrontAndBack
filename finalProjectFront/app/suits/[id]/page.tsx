"use client";
import Breadcrump from "@/app/_components/breadcrump/Breadcrump";
import { useRequest } from "@/app/_http/axiosFetcher";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import InterestingStar from "@/app/_assets/InterestingStar";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ReviewForm from "@/app/_components/Review/Review";
import { useRecoilState } from "recoil";
import { cartQuantityState } from "../../atoms/CartState";

const SuitProducts = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [cartQuantity, setCartQuantity] = useRecoilState(cartQuantityState);

  const router = useRouter();

  const colors = [
    { name: "Pink", colorCode: "bg-pink-500" },
    { name: "Purple", colorCode: "bg-purple-700" },
    { name: "Red", colorCode: "bg-red-600" },
    { name: "Yellow", colorCode: "bg-yellow-400" },
  ];

  const sizes = [4, 6, 8, 10];

  const { id } = useParams();

  const { data, isLoading, error } = useRequest(
    () => (id ? `suits/${id}` : null),
    {
      method: "GET",
      module: "suitApi",
    }
  );

  const {
    data: SuitData,
    isLoading: suitLoad,
    error: isSuitError,
  } = useRequest("suits", {
    method: "GET",
    module: "suitApi",
  });

  useEffect(() => {
    if (data && data.suit && data.suit.stock) {
      setStock(data.suit.stock);
    }
  }, [data]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) =>
      prevQuantity < stock ? prevQuantity + 1 : prevQuantity
    );
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );
  };

  const handleAddToCart = async () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please choose color and size!");
      return;
    }

    try {
      const token = getCookie("token");
      const response = await axios.post(
        "http://localhost:3001/api/v2/cart/add",
        {
          productId: data?.suit?._id,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      setStock((prevStock) => prevStock - quantity);
      setCartQuantity((prevQuantity) => prevQuantity + quantity);
      toast.success("Item added to cart");
    } catch (error: any) {
      console.error(
        "Error occured when adding",
        error.response?.data || error.message
      );
      toast.error(error.response?.data || error.message);
    }
  };

  const handleAddToWishlist = async () => {
    try {
      const token = getCookie("token");
      const response = await axios.post(
        "http://localhost:3001/api/v2/wishlist/add",
        {
          productId: data?.suit?._id,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      toast.success("Item added to wishlist");
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error("Item already in wishlist");
      } else {
        toast.error("An error occurred while adding to wishlist");
      }
    }
  };

  useEffect(() => {
    const countdownDate = new Date("2024-12-31T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return (
      <>
        {Array.from({ length: 5 }, (_, index) =>
          index < rating ? (
            <FaStar key={index} className="text-[#BB9D7B]" />
          ) : (
            <FaRegStar key={index} className="text-gray-400" />
          )
        )}
      </>
    );
  };

  return (
    <>
      <div className="pt-16 ">
        <Breadcrump title="Shop" bread1="Home" />
        <div className="bg-black">
          <div className="py-10 max-w-[1500px] mx-auto">
            <div className="flex gap-20 flex-wrap ">
              <div className="flex max-w-[50rem] flex-col gap-4">
                <Image
                  alt=""
                  src={`http://localhost:3001/${data && data?.suit.image1}`}
                  height={1000}
                  width={1000}
                  quality={100}
                  className="min-h-[50%] max-h-[80%] max-w-[100%] object-cover"
                />

                <Image
                  alt=""
                  src={`http://localhost:3001/${data && data?.suit.image2}`}
                  height={1000}
                  width={1000}
                  quality={100}
                  className="min-h-[50%] max-h-[80%] max-w-[100%] object-cover"
                />
              </div>
              <div className="sticky top-20  self-start ">
                <div className="flex flex-col gap-2">
                  <h1 className="text-[50px] max-w-[400px] text-white">
                    {data && data.suit.title}
                  </h1>
                  <p className="text-white text-[20px]">
                    Our Price: ${data && data.suit.price}
                  </p>
                  <div className="flex">
                    {data && renderStars(data.suit.rating)}
                  </div>
                </div>
                <div>
                  <div className="border-y-[1px] mt-5 py-5 border-[#BB9D7B]/20 bg-black text-white">
                    <div className="mb-4">
                      <h3 className="mb-2">
                        Size:{" "}
                        <span className="text-[#BB9D7B]">
                          {selectedSize && selectedSize}{" "}
                        </span>
                      </h3>
                      <div className="flex gap-3">
                        {sizes.map((size) => (
                          <button
                            key={size}
                            className={`px-4 py-2 border ${
                              selectedSize === size.toString()
                                ? "border-white bg-[#BB9D7B]"
                                : "border-[#BB9D7B]"
                            }`}
                            onClick={() => setSelectedSize(size.toString())}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p>
                        InStock: <span className="text-[#BB9D7B]">{stock}</span>
                      </p>
                      {stock <= 0 && (
                        <p className="text-red-500 mt-2">Out of Stock</p>
                      )}
                    </div>

                    <div className="mb-4 mt-4">
                      <h3 className="mb-2">
                        Color:{" "}
                        <span className="text-[#BB9D7B]">
                          {selectedColor && selectedColor}{" "}
                        </span>
                      </h3>
                      <div className="flex flex-wrap items-center border-[#BB9D7B]">
                        {colors.map((color) => (
                          <div
                            key={color.name}
                            className="border-[1px] border-[#BB9D7B] flex items-center px-2 py-2"
                          >
                            <button
                              className={`w-5 h-5 rounded-full ${
                                color.colorCode
                              } ${
                                selectedColor === color.name
                                  ? "border-2 border-gray-700"
                                  : ""
                              }`}
                              onClick={() => setSelectedColor(color.name)}
                            ></button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                      <div className="flex items-center gap-2">
                        <button
                          className="border border-[#BB9D7B] px-5 py-2"
                          onClick={decreaseQuantity}
                          disabled={quantity === 1}
                        >
                          -
                        </button>
                        <span className="border border-[#BB9D7B] px-5 py-2">
                          {quantity}
                        </span>
                        <button
                          className="border border-[#BB9D7B] px-4 py-2"
                          onClick={increaseQuantity}
                          disabled={quantity >= stock}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={handleAddToCart}
                        className="px-6 py-2 font-medium hover:bg-transparent duration-700 bg-[#BB9D7B] border-[#BB9D7B] text-white"
                        disabled={stock <= 0}
                      >
                        ADD TO CART
                      </button>
                      <button
                        onClick={handleAddToWishlist}
                        className="px-6 py-2 bg-transparent duration-700 hover:border-[#BB9D7B] border border-[#] text-white"
                      >
                        ADD TO WISHLIST
                      </button>
                    </div>

                    <div className="mt-6">
                      <p className="mb-2">Hurry up! Deals end up:</p>
                      <div className="flex gap-3">
                        <div className="border border-[#BB9D7B] p-2">{`${timeLeft.days} Days`}</div>
                        <div className="border border-[#BB9D7B] p-2">{`${timeLeft.hours} Hrs`}</div>
                        <div className="border border-[#BB9D7B] p-2">{`${timeLeft.minutes} Mins`}</div>
                        <div className="border border-[#BB9D7B] p-2">{`${timeLeft.seconds} Secs`}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            flex="1"
                            textAlign="left"
                            fontSize={{ base: "16px", md: "26px" }}
                            color="white"
                          >
                            Specification
                          </Box>
                          <AccordionIcon
                            boxSize={{ base: "20px", md: "26px" }}
                          />{" "}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        color="white"
                        fontSize={{ base: "14px", md: "16px" }}
                      >
                        {" "}
                        <ul>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            Vibrant blue hues. This unique ring features London
                          </li>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            10 USA Blue Topaz stones
                          </li>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            24k gold band
                          </li>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            Natural Gemstones
                          </li>
                        </ul>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            flex="1"
                            textAlign="left"
                            fontSize={{ base: "16px", md: "26px" }}
                            color="white"
                          >
                            Shipping Info
                          </Box>
                          <AccordionIcon
                            boxSize={{ base: "20px", md: "26px" }}
                          />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        color="white"
                        fontSize={{ base: "14px", md: "16px" }}
                      >
                        <ul>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            Free shipping for orders $75.00 USD+
                          </li>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            2-year warranty
                          </li>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            30-day returns
                          </li>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            Sustainable practices
                          </li>
                        </ul>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            flex="1"
                            textAlign="left"
                            fontSize={{ base: "16px", md: "26px" }}
                            color="white"
                          >
                            Description
                          </Box>
                          <AccordionIcon
                            boxSize={{ base: "20px", md: "26px" }}
                          />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        color="white"
                        fontSize={{ base: "14px", md: "16px" }}
                      >
                        <ul>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            Morbi id ligula scelerisque, auctor nisl quis,
                          </li>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            2-year warranty
                          </li>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            30-day returns
                          </li>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            Sustainable practices
                          </li>
                        </ul>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            flex="1"
                            textAlign="left"
                            fontSize={{ base: "16px", md: "26px" }}
                            color="white"
                          >
                            Additional Details
                          </Box>
                          <AccordionIcon
                            boxSize={{ base: "20px", md: "26px" }}
                          />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        color="white"
                        fontSize={{ base: "14px", md: "16px" }}
                      >
                        <ul>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            Morbi id ligula scelerisque, auctor nisl quis,
                          </li>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            2-year warranty
                          </li>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            30-day returns
                          </li>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            Sustainable practices
                          </li>
                        </ul>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            flex="1"
                            textAlign="left"
                            fontSize={{ base: "16px", md: "26px" }}
                            color="white"
                          >
                            Product Certificate
                          </Box>
                          <AccordionIcon
                            boxSize={{ base: "20px", md: "26px" }}
                          />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        color="white"
                        fontSize={{ base: "14px", md: "16px" }}
                      >
                        <ul>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            Morbi id ligula scelerisque, auctor nisl quis,
                          </li>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            2-year warranty
                          </li>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            30-day returns
                          </li>
                          <li className="flex items-center gap-1">
                            <FaStar className="text-[#BB9D7B]" />
                            Sustainable practices
                          </li>
                        </ul>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="py-20 ">
              <div className="">
                <div className=" relative z-20">
                  <div className="flex flex-col gap-1 text-white justify-center items-center">
                    <h2 className="text-[#BB9D7B]">TOP RATED</h2>
                    <h1 className="text-[50px]">Related Product</h1>
                  </div>
                  <div className="flex  pt-5 gap-5 flex-wrap justify-center">
                    {SuitData &&
                      SuitData?.suits
                        .slice(0, 3)
                        .map((item: any, index: number) => {
                          return (
                            <div className="max-w-[30rem]  relative max-h-[48rem] group border border-transparent  duration-700">
                              <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:w-full"></span>
                              <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:h-full"></span>
                              <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:w-full"></span>
                              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:h-full"></span>
                              <div
                                onClick={() => router.push(`${item._id}`)}
                                className="relative max-h-[30rem] min-h-[30rem] h-full overflow-hidden cursor-pointer"
                              >
                                <motion.div
                                  initial={{ opacity: 1, scale: 1 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  whileHover={{ opacity: 0, scale: 0.8 }}
                                  transition={{ duration: 0.7 }}
                                >
                                  <Image
                                    alt=""
                                    src={`http://localhost:3001/${item?.image1}`}
                                    height={1000}
                                    width={1000}
                                    quality={100}
                                    className="min-h-[30rem] max-h-[30rem] object-cover"
                                  />
                                </motion.div>

                                <motion.div
                                  className="absolute top-0 left-0"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 0, scale: 0.8 }}
                                  whileHover={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.7 }}
                                >
                                  <Image
                                    alt=""
                                    src={`http://localhost:3001/${item?.image2}`}
                                    height={1000}
                                    width={1000}
                                    quality={100}
                                    className="min-h-[30rem] max-h-[30rem]  object-cover"
                                  />
                                </motion.div>
                              </div>
                              <div className="text-center relative  overflow-hidden w-full  pt-10 pb-20">
                                <h3 className="text-white text-[20px] cursor-pointer hover:text-[#BB9D7B] duration-700">
                                  {item?.title}
                                </h3>
                                <p className="text-gray-500">
                                  ${item?.price}.00
                                </p>
                                <div className="w-full flex justify-center items-center">
                                  <button
                                    onClick={() => router.push(`${item._id}`)}
                                    className="text-white bg-[#BB9D7B] border border-transparent hover:border-[#BB9D7B] absolute bottom-[-1rem] opacity-0  group-hover:bottom-[1rem] group-hover:opacity-100 hover:bg-transparent duration-700  py-2 px-5 mt-2"
                                  >
                                    Select Options
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black px-5 md:px-2 pb-20">
        <div className="max-w-[1500px] mx-auto">
          <ReviewForm />
        </div>
      </div>
    </>
  );
};

export default SuitProducts;
