import { useFont } from '@/hooks/useFont';

import styles from './Title.module.css';

const Title = ({
	type = 'h1',
	text,
	children,
	color = 'light',
	weight = 700,
	mode = 'clear',
	...props
}) => {
	const [fontClassName] = useFont(weight);

	const colorClassName = `color-${color}`;

	const titleProps = {
		className: `${fontClassName} ${styles.title} ${styles[colorClassName]}`,
		children: children || text || '',
		...props,
	};

	const Wrapper = ({ children }) => {
		if (mode !== 'fill') {
			return children;
		}

		return <div className={styles.wrapper}>{children}</div>;
	};

	const elements = {
		h1: <h1 {...titleProps} />,
		h2: <h2 {...titleProps} />,
		h3: <h3 {...titleProps} />,
		h4: <h4 {...titleProps} />,
		h5: <h5 {...titleProps} />,
	};

	return <Wrapper>{elements[type] || elements.h1}</Wrapper>;
};

export default Title;
