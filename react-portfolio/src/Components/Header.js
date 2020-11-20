import React, { Component } from "react";

class Header extends Component {
  render() {
    const data = this.props.data;
    if (!data) {
      return null;
    }
    const {
      name,
      occupation,
      description,
      address: { city },
      social,
    } = data;
    //遍历社交媒体
    const networks = social.map((network) => {
      return (
        <>
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
        </>
      );
    });

    return (
      <header id="首页">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            显示导航栏
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            隐藏导航栏
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#top">
                回到顶部
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                个人简介
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                简历
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                项目
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                客户评价
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                联系我
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">我的名字 {name}.</h1>
            <h3>
              现住在{city},
              <span>
                <a href="https://github.com/anlaganlag">{occupation}</a>
              </span>
              .<br />
              {description}.
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
