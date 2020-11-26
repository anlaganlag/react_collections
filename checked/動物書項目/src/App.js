import React, { useState, useEffect } from "react";
import { lists } from "./list";
import Grid from "./Grid";
import { Image, Text } from "./Thumb.styles";
import Pagination from "./pagination";

export default function App() {
  //每页展示多少个项目 是2,3,4,5,6的最大公倍数..
  const [perPage, setPerPage] = useState(60);
  //随机展示页码,总项目/每页的ceil即总页数..再根据总页数随机
  const [page, setPage] = useState(1);
  const [searchQuery, setQuery] = useState("");

  // const [curList, setCurList] = useState(
  // lists.slice(0,perPage)
  // );

  const filterList = lists.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleSubmit(e) {
    e.preventDefault();
    // setCurList(
    //   lists.slice(perPage * (parseInt(page) - 1), parseInt(page) * perPage)
    // );
    // console.log("当前列表", curList, "提交");
    setQuery(e.target.value);
  }
  function handleInput(e) {
    setQuery(e.target.value);
  }
  useEffect(() => {
    console.log("cur", page, typeof page);
  }, [page]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type={Number}
          value={searchQuery}
          onChange={handleInput}
          placeholder="输入页码"
        />
      </form>
      <Pagination
        currentPage={page}
        setCurrentPage={setPage}
        pageSize={perPage}
        totalData={filterList.length}
      />

      <Grid
        header={
          filterList.length > 0 ?
          `页码 ${page}/${Math.ceil(lists.length / perPage)}`
        :"404沒有找到書籍"}
      >
        {filterList
          .slice((page - 1) * perPage, page * perPage)
          .map((item, idx) => (
            <div className="Thumb">
              <a href={item.link} target="_blank">
                <Text>
                  <small>{item.animal}</small>
                </Text>

                <Image src={item.cover_src} alt="动物图片" />
                <Text>
                  <h5>{item.title}</h5>
                </Text>
              </a>
            </div>
          ))}
      </Grid>
      <Pagination
        currentPage={page}
        setCurrentPage={setPage}
        pageSize={perPage}
        totalData={filterList.length}
      />
      {filterList > 0 && (
        <form onSubmit={handleSubmit} >
          <input
            type={Number}
            value={page}
            onChange={handleInput}
            placeholder="输入页码"
          />
          <label>{`页码 ${page}/${Math.ceil(lists.length / perPage)}`}</label>
          <button onClick={() => setPage(parseInt(page) + 1)}>下一页</button>
        </form>
      )}
    </>
  );
}
