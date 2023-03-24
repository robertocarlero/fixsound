import Head from 'next/head';

import 'remixicon/fonts/remixicon.css';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Fixsound</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
