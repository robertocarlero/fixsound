import AppLogo from '@/components/common/AppLogo';
import NavList from '../NavList';

import styles from './Header.module.css';

const Header = () => (
	<header className={styles.header}>
		<AppLogo />
		<NavList />
	</header>
);

export default Header;
