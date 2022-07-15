import { Content } from 'antd/lib/layout/layout';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <>
        <Head>
          <title>NextJs Exercise App</title>
          <meta name="description" content="Exercise App" />
        </Head>
        <Header />
        <Content
          // className="site-layout-background"
          style={{
            // padding: 24,
            margin: 0,
            // minHeight: 980,
            backgroundColor: 'white',
          }}
        >
          <Component {...pageProps} />
        </Content>

        <Footer />
      </>
    </StoreProvider>
  );
}

export default MyApp;
