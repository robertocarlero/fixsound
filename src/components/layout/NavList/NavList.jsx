import NavListItem from '../NavListItem';

import { PAGE_SECTIONS } from '@/constants/sections';

import styles from './NavList.module.css';

const NavList = () => (
	<nav className={styles.nav}>
		<ul className={styles.list}>
			{PAGE_SECTIONS.map((item) => (
				<NavListItem key={item?.name} {...item} />
			))}
		</ul>
	</nav>
);

export default NavList;
