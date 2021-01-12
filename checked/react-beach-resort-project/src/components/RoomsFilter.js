import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  // react hooks
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    seaview,
    breakfast
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["所有", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="搜索房源" subtitle="商務含早 豪華含早及海景"/>
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type"> 房間類型</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">人數</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">房價(最高預算) ${price}</label>
          <input
            type="number"
            name="price"
            step="50"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price*/}
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">大小(平方米) </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              step="5"
              max="100"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              step="5"
              min="20" 
              max="100"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="seaview"
              id="seaview"
              checked={seaview}
              onChange={handleChange}
            />
            <label htmlFor="seaview">海景</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id= 'seaview'
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="seaview">早餐</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
