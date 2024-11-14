"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
const FaqAccardion = () => {
  return (
    <div>
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
                <AccordionIcon boxSize={{ base: "20px", md: "26px" }} />{" "}
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
                  Vibrat blue hues. This unique ring features London
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
                <AccordionIcon boxSize={{ base: "20px", md: "26px" }} />
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
                <AccordionIcon boxSize={{ base: "20px", md: "26px" }} />
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
                <AccordionIcon boxSize={{ base: "20px", md: "26px" }} />
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
                <AccordionIcon boxSize={{ base: "20px", md: "26px" }} />
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
  );
};

export default FaqAccardion;
