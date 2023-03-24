import Header from '@/components/layout/Header';

import styles from './Layout.module.css';

const Layout = ({ children }) => (
	<main className={styles.main}>
		<Header />
		<section className={styles.content}>{children}</section>
	</main>
);

export default Layout;
