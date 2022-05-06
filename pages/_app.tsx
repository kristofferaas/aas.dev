import { AppProps } from "next/app";
import Theme from "../components/Theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}
