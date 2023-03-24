import styles from './Light.module.css';

const Light = ({ direction, color = 'primary' }) => {
	const classDirection = `direction-${direction}`;
	const classLight = `light-${color}`;
	const classBlur = `blur-${color}`;

	return (
		<div
			className={`
				${styles.container}
				${styles[classDirection]}
				${styles[color]}
			`}
		>
			<div
				className={`
					${styles.bar}
					${styles[classLight]}
				`}
			/>
			<div
				className={`
					${styles.bar}
					${styles.blur}
					${styles[classBlur]}
				`}
			/>
			<div
				className={`
					${styles.bar}
					${styles.blur}
					${styles.brightness}
					${styles[classBlur]}
				`}
			/>
		</div>
	);
};

export default Light;
