import styles from './Brightness.module.css';

const Brightness = ({ color = 'primary', ...props }) => {
	const classBlur = `blur-${color}`;

	return (
		<div className={styles.container} {...props}>
			<div className={styles.layer} />
			<div className={`${styles.blur} ${styles[classBlur]}`} />
		</div>
	);
};

export default Brightness;
