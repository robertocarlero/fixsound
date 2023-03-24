import { useFont } from '@/hooks/useFont';
import Icon from '../Icon/Icon';
import Light from '../Light/Light';
import Title from '../Title/Title';
import styles from './Card.module.css';

const Card = ({
	color = 'primary',
	icon,
	title,
	description,
	titleType = 'h4',
	scaleOnHover = false,
	children,
	...props
}) => {
	const [fontClassName] = useFont(300);

	return (
		<div className={`${styles.container} ${scaleOnHover ? styles.scale : ''}`} {...props}>
			{!!children ? (
				children
			) : (
				<>
					{!!icon && <Icon size="md" name={icon} color="gradient" />}
					{!!title && <Title type={titleType} text={title} />}
					{!!description && (
						<p className={`${styles.description} ${fontClassName}`}>{description}</p>
					)}
				</>
			)}
			{!!color && (
				<div className={styles.light}>
					<Light color={color} direction="top" />
				</div>
			)}
		</div>
	);
};

export default Card;
