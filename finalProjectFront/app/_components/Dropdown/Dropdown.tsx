import React from "react";
import Link from "next/link";

export type DropdownItem = {
  label: string;
  link: string;
};

export type DropdownProps = {
  items: DropdownItem[];
};

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <ul
      onClick={handleClick}
      className="flex-col font-medium  py-3   shadow-xl  text-[14px] z-10 transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 ease-in-out absolute w-[15rem] top-[49px] bg-[#BB9D7B] "
    >
      {items.map((item, index) => (
        <Link
          href={`/${item.link}`}
          key={index}
          className="flex py-1 items-center gap-1"
        >
          <span
            className={`text-white duration-700 py-2 hover:text-black px-5 w-full ${
              index !== items.length - 1
                ? "border-b-[1px] border-[#B18D73]"
                : ""
            }`}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </ul>
  );
};

export default Dropdown;
