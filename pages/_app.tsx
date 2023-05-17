import store from '@/redux/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react';

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <main className={poppins.className}>
          <ToastContainer />
          <Component {...pageProps} />
        </main>
      </Provider>
    </SessionProvider>
  );
}
