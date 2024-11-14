"use client";
import React from "react";
import Breadcrump from "../breadcrump/Breadcrump";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { IoMdArrowUp } from "react-icons/io";
import SaleLogo from "@/app/_assets/SaleLogo";

const FaqAccardionBottom = () => {
  return (
    <div>
      <div className="flex flex-row-reverse flex-wrap lg:flex-nowrap gap-10">
        <div className="relative  w-full md:w-[35rem] ">
          <SaleLogo
            number={50}
            className="absolute bottom-[-2rem] right-[-3rem] z-20"
          />
          <div className="relative h-[30rem] md:w-[35rem]  md:h-[50rem]  overflow-hidden">
            <Image
              alt=""
              src={
                "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/DF-Offer-banner-img-01.jpg"
              }
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </div>
        <div className="text-white w-full ">
          <h2 className="font-medium">FREQUENT QUERIES</h2>
          <h1 className="text-3xl md:text-5xl font-medium">
            Questions About Clothing
          </h1>

          <Accordion width="100%" maxW="full" mx="auto" allowToggle mt={8}>
            <AccordionItem
              className="hover:bg-[#BB9D7B] duration-500"
              border="none"
              mb={4}
            >
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: "#BB9D7B",
                    color: "white",
                    border: "1px solid transparent",
                  }}
                  border="1px solid gray"
                  color="white"
                  px={6}
                  py={8}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    How Do I Choose The Right Style Suit?
                  </Box>
                  <AccordionIcon as={IoMdArrowUp} boxSize={6} />
                </AccordionButton>
              </h2>
              <AccordionPanel px={6} py={4} color="white" bg="#BB9D7B">
                Egestas purus viverra accumsan in nisl nisi. Sed odio morbi quis
                commodo odio aenean. Nec nam aliquam sem et tortor consequat id.
                Morbi tempus iaculis urna id volutpat lacus faucibus turpis.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              className="hover:bg-[#BB9D7B] duration-500"
              border="none"
              mb={4}
            >
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: "#BB9D7B",
                    color: "white",
                    border: "1px solid transparent",
                  }}
                  border="1px solid gray"
                  color="white"
                  px={6}
                  py={8}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    Why Are There Two Columns Of Buttons On Some Blazers?
                  </Box>
                  <AccordionIcon as={IoMdArrowUp} boxSize={6} />
                </AccordionButton>
              </h2>
              <AccordionPanel px={6} py={4} color="white" bg="#BB9D7B">
                Elementum curabitur vitae nunc sed velit dignissim sodales ut
                eu. Et tortor consequat id porta nibh venenatis. Sed sed risus
                pretium quam vulputate dignissim suspendisse in egestas
                fringilla.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              className="hover:bg-[#BB9D7B] duration-500"
              border="none"
              mb={4}
            >
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: "#BB9D7B",
                    color: "white",
                    border: "1px solid transparent",
                  }}
                  border="1px solid gray"
                  color="white"
                  px={6}
                  py={8}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    What Details Do I Require?
                  </Box>
                  <AccordionIcon as={IoMdArrowUp} boxSize={6} />
                </AccordionButton>
              </h2>
              <AccordionPanel px={6} py={4} color="white" bg="#BB9D7B">
                Donec adipiscing tristique risus nec feugiat in fermentum
                posuere urna. Tristique et egestas quis ipsum. Malesuada fames
                ac turpis egestas integer. Magna eget est lorem ipsum dolor sit
                amet.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              className="hover:bg-[#BB9D7B] duration-500"
              border="none"
              mb={4}
            >
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: "#BB9D7B",
                    color: "white",
                    border: "1px solid transparent",
                  }}
                  border="1px solid gray"
                  color="white"
                  px={6}
                  py={8}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    How Do I Choose The Right Style Suit?
                  </Box>
                  <AccordionIcon as={IoMdArrowUp} boxSize={6} />
                </AccordionButton>
              </h2>
              <AccordionPanel px={6} py={4} color="white" bg="#BB9D7B">
                Egestas purus viverra accumsan in nisl nisi. Sed odio morbi quis
                commodo odio aenean. Nec nam aliquam sem et tortor consequat id.
                Morbi tempus iaculis urna id volutpat lacus faucibus turpis.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              className="hover:bg-[#BB9D7B] duration-500"
              border="none"
              mb={4}
            >
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: "#BB9D7B",
                    color: "white",
                    border: "1px solid transparent",
                  }}
                  border="1px solid gray"
                  color="white"
                  px={6}
                  py={8}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    Are There Pockets On Blazers?
                  </Box>
                  <AccordionIcon as={IoMdArrowUp} boxSize={6} />
                </AccordionButton>
              </h2>
              <AccordionPanel px={6} py={4} color="white" bg="#BB9D7B">
                Neque viverra justo nec ultrices. Lectus arcu bibendum at varius
                vel pharetra vel turpis. Nisl suscipit adipiscing bibendum est
                ultricies integer quis auctor elit. Risus in hendrerit gravida
                rutrum.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqAccardionBottom;
