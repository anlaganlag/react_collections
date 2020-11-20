import React, { Component } from "react";

class About extends Component {
  render() {
    const data = this.props.data;
    if (!data) {
      return null;
    }
    const {
      name,
      bio,
      address: { street, city, state, zip },
      phone,
      email,
      resumedownload,
    } = data;
    const image = "images/" + data.image;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={image} alt="个人图片" />
          </div>
          <div className="nine columns main-col">
            <h2> 个人简介</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2> 联系方式</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {state} {city} {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumedownload} className="button">
                    <i className="fa fa-download"></i> 下载简历
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
