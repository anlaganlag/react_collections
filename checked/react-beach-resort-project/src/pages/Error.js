import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="沒有找到該頁面">
        <Link to="/" className="btn-primary">
           返回主頁
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
