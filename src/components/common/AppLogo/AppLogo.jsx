import Image from 'next/image';
import Link from 'next/link';

import { SECTIONS } from '@/constants/sections';

import logo from '@/assets/app-logo.svg';
import logoLight from '@/assets/app-logo-light.svg';

const AppLogo = ({ width = 208, height = 20, color = 'light' }) => (
	<Link href={SECTIONS.HERO.path}>
		<Image
			src={color === 'light' ? logo.src : logoLight.src}
			width={width}
			height={height}
			alt="FIXSOUND text"
		/>
	</Link>
);

export default AppLogo;
