import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;


  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> 沒有這樣的房子...</h3>
          <Link to="/rooms" className="btn-primary">
            返回海景房
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      seaview,
      breakfast,
      images
    } = room;
    const [ ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              返回海景房
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>介紹</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>信息</h3>
              <h6>房價 : ${price}</h6>
              <h6>大小 : {size/10} 平方米</h6>
              <h6>
                 人數 :
                { `${capacity}人`}
              </h6>
              <h6>{breakfast?"無敵海景" : "無敵山景(無海景)"}</h6>
              <h6>{seaview ? "含早飯":"不含早飯"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>額外信息 </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
