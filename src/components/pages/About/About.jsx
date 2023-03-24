import Image from 'next/image';

import { useFont } from '@/hooks/useFont';
import { getSectionId } from '@/helpers/sections';

import Icon from '@/components/common/Icon/Icon';
import Title from '@/components/common/Title/Title';
import Brightness from '@/components/common/Brightness/Brightness';

import { ABOUT_ITEMS } from '@/constants/content';

import carAsset from '@/assets/images/car-light.svg';

import styles from './About.module.css';

const About = () => {
	const sectionId = getSectionId('about');
	const [fontClassName] = useFont(300);

	return (
		<section id={sectionId} className={styles.section}>
			<div className={styles.content}>
				<Title text="A la medida de tus gustos" type="h4" color="gradient" weight={300} />
				<Title text="Sonido para tu Carro" />

				<p className={`${styles.description} ${fontClassName}`}>
					Somos una empresa dedicada a la reparación, instalación y mantenimiento de sistemas de
					sonido para autos.
				</p>

				<ol className={styles.list}>
					{ABOUT_ITEMS.map(({ icon, title }) => (
						<li className={`${styles['list-item']} ${fontClassName}`} key={title}>
							<Icon mode="fill" name={icon} color="gradient" />
							{title}
						</li>
					))}
				</ol>
			</div>
			<figure className={styles.asset}>
				<Image
					className={styles.image}
					src={carAsset.src}
					width={400}
					height={400}
					alt="FIXSOUND text"
				/>
				<Brightness color="secondary" className={styles.brightness} />
			</figure>
		</section>
	);
};

export default About;
