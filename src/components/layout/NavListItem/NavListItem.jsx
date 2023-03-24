import Link from 'next/link';
import { useRouter } from 'next/router';

import { useFont } from '@/hooks/useFont';

import styles from './NavListItem.module.css';

const NavListItem = ({ title, path }) => {
	const [fontClassName] = useFont();
	const { asPath } = useRouter();

	const isActive = asPath.includes('#')
		? asPath.slice(1, asPath.length) === path
		: asPath.includes(path);

	return (
		<li className={fontClassName}>
			<Link
				href={path}
				className={`
					${styles['list-item']}
					${isActive ? styles['list-item-active'] : ''}
				`}
			>
				{title}
			</Link>
		</li>
	);
};

export default NavListItem;
