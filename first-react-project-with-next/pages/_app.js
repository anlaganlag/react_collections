import "../styles/tailwind.css";
import { Provider } from "react-redux";
import { useStore } from "../state/store";
import Nav from "../components/nav";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}
