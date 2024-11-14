"use client";
import React, { useEffect } from "react";
import Breadcrump from "../_components/breadcrump/Breadcrump";
import TeamCategory from "../_components/TeamCategory/TeamCategory";
import TeamInfo from "../_components/TeamInfo/TeamInfo";
import AOS from "aos";
import ServicesHome from "../_components/ServicesHome/ServicesHome";

const Team = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="pt-16">
        <Breadcrump bread1="Home" title="Team Members" />
      </div>
      <div>
        <TeamCategory />
      </div>
      <div>
        <TeamInfo />
      </div>
      <div>
        <ServicesHome />
      </div>
    </div>
  );
};

export default Team;
