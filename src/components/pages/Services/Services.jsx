import { getSectionId } from '@/helpers/sections';

import Card from '@/components/common/Card';
import Title from '@/components/common/Title';

import { SERVICES_ITEMS } from '@/constants/content';

import styles from './Services.module.css';

const Services = () => {
	const sectionId = getSectionId('services');

	return (
		<section id={sectionId} className={styles.section}>
			<div className={styles.content}>
				<Title mode="fill" text="Nuestros servicios" type="h4" color="gradient" weight={300} />
				<br />
				<Title type="h1" text="Estilo y calidad de sonido" />

				<section className={styles.cards}>
					{SERVICES_ITEMS.map((item, i) => (
						<Card {...item} scaleOnHover key={item.title} />
					))}
				</section>
			</div>
		</section>
	);
};

export default Services;
