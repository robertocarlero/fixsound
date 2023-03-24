import Image from 'next/image';

import { useFont } from '@/hooks/useFont';
import { getSectionId } from '@/helpers/sections';

import Title from '@/components/common/Title';
import Light from '@/components/common/Light/Light';

import platformAsset from '@/assets/images/platform.svg';

import styles from './Equipment.module.css';
import Carousel from '@/components/common/Carousel/Carousel';
import { EQUIPMENT_ASSETS } from '@/constants/content';

const Equipment = () => {
	const sectionId = getSectionId('equipment');
	const [fontClassName] = useFont(300);

	return (
		<section id={sectionId} className={styles.section}>
			<div className={styles.content}>
				<section className={styles.assets}>
					<div className={styles.light}>
						<Light color="primary" direction="bottom" />
						<Light color="secondary" direction="bottom" />
					</div>
					<Carousel>
						{EQUIPMENT_ASSETS.map((item, i) => (
							<div key={i} className={styles['image-container']}>
								<Image className={styles.image} alt="" {...item} />
							</div>
						))}
					</Carousel>
					<Image
						className={styles.image}
						src={platformAsset.src}
						width={400}
						height={180}
						alt="FIXSOUND text"
					/>
				</section>
				<Title text="Sonido de alta calidad" />
				<br />
				<p className={`${styles.description} ${fontClassName}`}>
					Todos nuestros productos son de las mejores marcas y ofrecen un sonido potente y claro
					para que puedas disfrutar al máximo tu música favorita.
				</p>
			</div>
		</section>
	);
};

export default Equipment;
