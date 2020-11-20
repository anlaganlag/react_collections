import ReactGA from "react-ga";

process.env.NODE_ENV === "production" && ReactGA.initialize("UA-180169708-1");

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
