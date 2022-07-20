import { Content } from 'antd/lib/layout/layout';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import { StoreProvider } from '../utils/Store';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const updateDimensions = () => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const [width, setWidth] = useState(
    typeof window === 'undefined' ? 0 : window.innerWidth
  );
  const [height, setHeight] = useState(
    typeof window === 'undefined' ? 0 : window.innerHeight
  );
  useEffect(() => {
    console.log(width);
  }, [width]);
  return (
    <StoreProvider>
      <Head>
        <title>NextJs Exercise App</title>
        <meta name="description" content="Exercise App" />
      </Head>
      {router.pathname !== '/Login' ? <Header /> : <br />}
      <Content
        // className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          //width: { width },
          // minHeight: 980,
          backgroundColor: 'white',
        }}
      >
        <Component {...pageProps} />
      </Content>
      {router.pathname !== '/Login' ? <Footer /> : <br />}
    </StoreProvider>
  );
}

export default MyApp;
