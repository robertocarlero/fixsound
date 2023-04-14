import Icon from '../../Icon';

import styles from './ButtonIcon.module.css';

const ButtonIcon = ({ icon, onClick, color = 'white', ...props }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			<Icon name={icon} {...props} color="white" />
		</button>
	);
};

export default ButtonIcon;
