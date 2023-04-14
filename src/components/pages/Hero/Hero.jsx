import Image from 'next/image';

import { useWindowResize } from '@/hooks/useWindowResize';

import AppLogo from '@/components/common/AppLogo';
import Light from '@/components/common/Light';

import { BREAKPOINTS } from '@/constants/breakpoints';

import appIcon from '@/assets/favicon-light.svg';

import styles from './Hero.module.css';

const Hero = () => {
	const { width } = useWindowResize();

	const isSmallDevice = width < BREAKPOINTS.SM;

	const logoProps = {
		width: isSmallDevice ? 250 : 500,
		height: isSmallDevice ? 75 : 150,
	};
	const appIconProps = {
		width: isSmallDevice ? 300 : 500,
		height: isSmallDevice ? 300 : 500,
	};

	return (
		<section className={styles.section}>
			<div className={styles.lights}>
				<Light />
				<Light direction="left" color="secondary" />
			</div>
			<Image
				src={appIcon.src}
				alt="Es un circulo con dos líneas de neon brillante con ondas de sonido dentro"
				{...appIconProps}
			/>
			<AppLogo color="primary" {...logoProps} />
		</section>
	);
};

export default Hero;
