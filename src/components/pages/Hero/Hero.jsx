import Image from 'next/image';

import AppLogo from '@/components/common/AppLogo';
import Light from '@/components/common/Light';

import styles from './Hero.module.css';

import appIcon from '@/assets/favicon-light.svg';

const Hero = () => (
	<section className={styles.section}>
		<div className={styles.lights}>
			<Light />
			<Light direction="left" color="secondary" />
		</div>
		<Image
			src={appIcon.src}
			width={500}
			height={500}
			alt="Es un circulo con dos líneas de neon brillante con ondas de sonido dentro"
		/>
		<AppLogo color="primary" width={500} height={150} />
	</section>
);

export default Hero;
