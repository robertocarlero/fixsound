import { useState } from 'react';

import { useWindowResize } from '@/hooks/useWindowResize';

import ButtonIcon from '@/components/common/buttons/ButtonIcon/ButtonIcon';
import NavListItem from '../NavListItem';

import { PAGE_SECTIONS } from '@/constants/sections';
import { BREAKPOINTS } from '@/constants/breakpoints';

import styles from './NavList.module.css';

const NavList = () => {
	const { width } = useWindowResize();
	const [isOpened, setIsOpened] = useState();

	const isSmallDevice = width < BREAKPOINTS.SM;

	const onButtonClick = () => {
		setIsOpened((currentState) => !currentState);
	};

	const onItemClick = () => {
		setIsOpened(false);
	};

	return (
		<nav className={styles.nav}>
			{isSmallDevice && <ButtonIcon icon="menu" size="md" onClick={onButtonClick} />}
			<ul className={`${styles.list} ${isOpened ? styles.opened : ''}`}>
				{PAGE_SECTIONS.map((item) => (
					<NavListItem key={item?.name} {...item} onClick={onItemClick} />
				))}
			</ul>
		</nav>
	);
};

export default NavList;
