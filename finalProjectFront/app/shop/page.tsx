"use client";
import React, { useEffect, useState } from "react";
import Breadcrump from "../_components/breadcrump/Breadcrump";
import {
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Heading,
  Button,
  Text,
  List,
  ListItem,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Link from "next/link";

interface Suit {
  title: string;
  price: number;
  color: string;
  size: string | number;
  image1: any;
  image2: any;
  _id: any;
}
const Shop = () => {
  const [price, setPrice] = useState<[number, number]>([0, 1100]);
  const [filteredData, setFilteredData] = useState<Suit[]>([]);
  const [colorFilter, setColorFilter] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  const router = useRouter();
  const [paginationInfo, setPaginationInfo] = useState({
    totalCollections: 0,
    totalPages: 0,
    currentPage: 1,
    limit: itemsPerPage,
  });

  const [initialFetch, setInitialFetch] = useState<boolean>(true);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>("asc");

  const handleSliderChange = (value: [number, number]) => {
    setPrice(value);
    setCurrentPage(1);
    setShouldFetch(false);
  };

  const handleColorClick = (color: string) => {
    if (colorFilter.includes(color)) {
      setColorFilter(colorFilter.filter((c) => c !== color));
    } else {
      setColorFilter([...colorFilter, color]);
    }
    setCurrentPage(1);
    setShouldFetch(false);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setShouldFetch(true);
  };

  const search = searchParams.get("search") || "";
  useEffect(() => {
    setSearchQuery(search);
    setShouldFetch(true);
    setCurrentPage(1);
  }, [searchParams]);

  useEffect(() => {
    if (shouldFetch) {
      fetchFilteredData();
      setShouldFetch(false);
    }
  }, [shouldFetch, price, colorFilter, searchQuery, currentPage, sortOrder]);

  useEffect(() => {
    setCurrentPage(1);
    setShouldFetch(true);
  }, [searchQuery]);

  useEffect(() => {
    if (initialFetch && searchQuery !== "") {
      fetchFilteredData();
      setInitialFetch(false);
    }
  }, [initialFetch]);

  const handleFilterClick = () => {
    setShouldFetch(true);
  };

  const fetchFilteredData = async () => {
    try {
      const colorParam = colorFilter.length > 0 ? colorFilter.join(",") : null;

      const response = await axios.get("http://localhost:3001/api/v2/suits", {
        params: {
          color: colorParam,
          minPrice: price[0],
          maxPrice: price[1],
          page: currentPage,
          limit: itemsPerPage,
          search: searchQuery,
          sort: sortOrder,
        },
      });

      let data = response.data.suits;

      if (sortOrder === "asc") {
        data = data.sort((a: Suit, b: Suit) => a.price - b.price);
      } else if (sortOrder === "desc") {
        data = data.sort((a: Suit, b: Suit) => b.price - a.price);
      }

      console.log(response.data);
      // setFilteredData(response.data.suits);
      setFilteredData(data);
      setPaginationInfo(response.data.pagination);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
    setCurrentPage(1);
    setShouldFetch(true);
  };

  return (
    <div className="pt-16">
      <div>
        <Breadcrump bread1="Home" title="Shop" />
      </div>
      <div className="bg-black px-10">
        <div className="max-w-[1500px] mx-auto py-10">
          <div className="w-full flex flex-wrap justify-between items-center text-white mb-5">
            <Text>
              Showing {filteredData.length} of {paginationInfo.totalCollections}{" "}
              items
            </Text>
            <Select
              width="200px"
              placeholder="Sort by Price"
              onChange={handleSortChange}
              border="-moz-initial"
              className="border-b-[1px] "
              outline="none"
              value={sortOrder}
            >
              <option className="text-black" value="asc">
                Price: Low to High
              </option>
              <option className="text-black" value="desc">
                Price: High to Low
              </option>
            </Select>
          </div>
        </div>
        <div className="max-w-[1500px] flex justify-center md:justify-normal  flex-wrap md:flex-nowrap  gap-5 mx-auto pb-20">
          <div>
            <Box bg="#23201E" height="50rem" color="white" p={10} w="300px">
              <Heading size="md" mb={4}>
                Filter By Price
              </Heading>
              <RangeSlider
                defaultValue={price}
                min={0}
                max={1100}
                step={10}
                onChange={handleSliderChange}
              >
                <RangeSliderTrack bg="gray.500">
                  <RangeSliderFilledTrack bg="tan" />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={6} index={0} />
                <RangeSliderThumb boxSize={6} index={1} />
              </RangeSlider>

              <Text mt={2}>
                Price: ${price[0]} — ${price[1]}
              </Text>

              <Button
                bg="tan"
                color="white"
                mt={4}
                width="20"
                onClick={handleFilterClick}
              >
                Filter
              </Button>

              <Heading size="md" mt={6} mb={4}>
                Product Type
              </Heading>
              <List spacing={3}>
                {["pink", "purple", "red", "yellow"].map((type, idx) => (
                  <ListItem
                    key={idx}
                    display="flex"
                    className="border-b-[1px] group border-[#BB9D7B]/20 cursor-pointer pb-2"
                    justifyContent="space-between"
                    onClick={() => handleColorClick(type)}
                    style={{
                      color: colorFilter.includes(type) ? "#BB9D7B" : "white",
                    }}
                  >
                    <Text className=" group-hover:text-[#BB9D7B] duration-700">
                      {type}
                    </Text>
                    <Text>({56})</Text>
                  </ListItem>
                ))}
              </List>
              <Button
                onClick={() => {
                  const scrollY = window.scrollY;
                  window.location.href = "/shop";
                  setTimeout(() => {
                    window.scrollTo(0, scrollY);
                  }, 0);
                }}
                bg="tan"
                color="white"
                mt={4}
                width="20"
              >
                All Data
              </Button>
            </Box>
          </div>

          <div className="flex ">
            <Box
              className="flex gap-5 justify-center md:justify-normal flex-wrap"
              color="white"
            >
              {filteredData && filteredData.length > 0 ? (
                filteredData.map((item: Suit, idx: number) => (
                  <div
                    key={item._id}
                    className="max-w-[15rem]  relative max-h-[28rem] group border border-transparent  duration-700"
                  >
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:h-full"></span>
                    <div
                      onClick={() => router.push(`suits/${item._id}`)}
                      className="relative max-h-[15rem] min-h-[15rem] h-full overflow-hidden cursor-pointer"
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
                          className="min-h-[15rem] max-h-[15rem] object-cover"
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
                          className="min-h-[15rem] max-h-[15rem]  object-cover"
                        />
                      </motion.div>
                    </div>
                    <div className="text-center relative  overflow-hidden w-full  pt-10 pb-20">
                      <h3 className="text-white text-[20px] cursor-pointer hover:text-[#BB9D7B] duration-700">
                        {item?.title}
                      </h3>
                      <p className="text-gray-500">${item?.price}.00</p>
                      <div className="w-full flex justify-center items-center">
                        <button
                          onClick={() => router.push(`suits/${item._id}`)}
                          className="text-white bg-[#BB9D7B] border border-transparent hover:border-[#BB9D7B] absolute bottom-[-1rem] opacity-0  group-hover:bottom-[1rem] group-hover:opacity-100 hover:bg-transparent duration-700  py-2 px-5 mt-2"
                        >
                          Select Options
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <Text>No suits found matching the criteria</Text>
              )}
            </Box>
          </div>
        </div>
      </div>

      <div className="flex  justify-center bg-black py-10">
        {paginationInfo && paginationInfo.totalPages > 1 && (
          <div className="flex justify-center mt-6 pb-10">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 mx-1 text-white rounded disabled:opacity-50"
            >
              <FaAngleLeft />
            </button>
            {Array.from({ length: paginationInfo.totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 mx-1 ${
                  currentPage === index + 1
                    ? "bg-white-500 border-2 text-white border-[#BB9D7B] rounded-full bg-[#BB9D7B]"
                    : " border border-[#BB9D7B] text-white rounded-full "
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === paginationInfo.totalPages}
              className="px-3 py-1 mx-1 bg-white-500 text-white disabled:opacity-50"
            >
              <FaAngleRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
