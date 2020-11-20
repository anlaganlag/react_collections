import ReactGA from "react-ga";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Theme,
  HTMLMeta,
  Header,
  BackgroundOuterOne,
  BackgroundInner,
  Form,
  BackgroundOuterTwo,
  Main,
  StatusAlert,
  isValidSearch,
  scroll,
} from "../lib";
import useAsyncFetch from "async-fetch";

function HomePage({ query }) {
  const [view, setView] = useState("search");
  const [params, setParams] = useState(query);

  const router = useRouter();

  useEffect(() => {
    router.push({ pathname: "/", query: params });
  }, [params]);

  useEffect(() => {
    process.env.NODE_ENV === "production" &&
      window &&
      ReactGA.pageview(
        window.location.pathname +
          "?" +
          new URLSearchParams({ ...params, view })
      );
  }, [params, view]);

  const { data, pending, error, sendRequest } = useAsyncFetch({
    useEffectDependency: [query],
    condition: isValidSearch(query.search),
    url: "/api/search",
    query,
    onSuccess: () => {
      setView("search");
      scroll.toMain();
    },
  });

  return (
    <Theme>
      <HTMLMeta />
      <Header setView={setView} />
      <Form params={params} setParams={setParams} pending={pending} />
      <Main
        query={query}
        data={data}
        view={view}
        setView={setView}
        pending={pending}
        error={error}
      />
      <StatusAlert error={error} />
    </Theme>
  );
}

export async function getServerSideProps({ query }) {
  return { props: { query } };
}

export default HomePage;
