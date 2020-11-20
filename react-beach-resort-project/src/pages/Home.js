import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
const home = () => {
  let myDate = new Date();
  let now = myDate.toLocaleDateString();     //获取当前日期
  return (
    <>
      <Hero>
        <Banner
          title="豪華海景房"
          subtitle={`雙人豪華間￥299 只限今天(${now}) `}
        >
          <Link to="/rooms" className="btn-primary">
             查看房源
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;
