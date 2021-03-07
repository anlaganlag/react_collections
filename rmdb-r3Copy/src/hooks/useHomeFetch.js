import { useState, useEffect } from "react";
// API
import API from "../API";
// Helpers
import { getSessionStateData } from "../helpers";

//即空容器的状态..页码和结果都为空..
const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  //即当前状态..每次+20部电影..开始0部..
  const [state, setState] = useState(initialState);
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      //获取数据马上设定数据是非常常见的套路
      //且用了await来所等你获取完数据.再往下执行..
      const movies = await API.fetchMovies(searchTerm, page);
      setTotalResults(movies.total_results)

      setState((prev) => ({
        ...movies,
        //如果是1页以上,就是添加数据到末尾..否则就是直接设定..
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Search and initial
  //开启周期函数..就是白手套要做的事情..会有effect副作用...
  useEffect(() => {
    // 如果搜索为空则从s获取数据
    if (!searchTerm) {
      const sessionState = getSessionStateData("homeData");
// 获取成功的情况
      if (sessionState?.page > 0) {
        console.log("从会话存储sessionStorage中获取数据成功");
        console.log(sessionState.page);
        setState(sessionState);
        return;
      }
    }
    console.log("当然默认是从API获取数据");
    // 安装好空白的容器
    setState(initialState);
    //获取第一页的搜索数据
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // Load More
  //如果没有下一页则结束
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm); 
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  // Write to sessionStorage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem("homeData", JSON.stringify(state));
  }, [searchTerm, state]);

  return { totalResults,state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
