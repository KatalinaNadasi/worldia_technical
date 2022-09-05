import type { AppProps } from "next/app";

import { wrapper } from "../store/initStore";

function WorldiaTestApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(WorldiaTestApp);
