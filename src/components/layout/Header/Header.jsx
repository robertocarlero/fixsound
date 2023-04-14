import { useWindowResize } from '@/hooks/useWindowResize';

import AppLogo from '@/components/common/AppLogo';
import NavList from '../NavList';

import { BREAKPOINTS } from '@/constants/breakpoints';

import styles from './Header.module.css';

const Header = () => {
	const { width } = useWindowResize();

	const isSmallDevice = width < BREAKPOINTS.SM;

	const logoProps = !isSmallDevice ? {} : { width: 180 };

	return (
		<header className={styles.header}>
			<AppLogo {...logoProps} />
			<NavList />
		</header>
	);
};

export default Header;
