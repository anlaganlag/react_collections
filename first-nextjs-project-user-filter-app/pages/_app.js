import "../styles/globals.css";
import "../styles/tailwind.css";
import Navigation from "../components/navigation.js";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navigation></Navigation>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
