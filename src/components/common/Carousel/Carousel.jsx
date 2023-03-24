import React, { Children } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Card from '../Card/Card';

import styles from './Carousel.module.css';

const carousel = (slider) => {
	const z = 300;
	function rotate() {
		const deg = 360 * slider.track.details.progress;
		slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
	}
	slider.on('created', () => {
		const deg = 360 / slider.slides.length;
		slider.slides.forEach((element, idx) => {
			element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
		});
		rotate();
	});
	slider.on('detailsChanged', rotate);
};

const Carousel = ({ children }) => {
	const [sliderRef] = useKeenSlider(
		{
			loop: true,
			selector: '.cell',
			renderMode: 'custom',
			mode: 'free-snap',
		},
		[carousel]
	);

	return (
		<div className={styles.wrapper}>
			<div className={styles.scene}>
				<div className={styles.slider} ref={sliderRef}>
					{Children.map(children, (child, i) => (
						<Card color={null} className={`${styles.cell} cell`}>
							{child}
						</Card>
					))}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
