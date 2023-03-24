import styles from './Icon.module.css';

const Icon = ({ color = 'primary', mode = 'clear', size = 'sm', name, ...props }) => {
	return (
		<div className={`${styles.container} ${styles[mode]} ${styles[size]}`} {...props}>
			<i className={`${styles[color]} ri-${name}-line`}></i>
		</div>
	);
};

export default Icon;
