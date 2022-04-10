import Theme from '../styles/theme';

const prefix = '/MyPortfolio'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <link rel="shortcut icon" href={prefix+'/favicon.ico'}/>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 