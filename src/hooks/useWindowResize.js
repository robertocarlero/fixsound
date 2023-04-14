import { useEffect, useState } from 'react';

export const getWindowSize = () => {
	return {
		width: global?.innerWidth || 0,
		height: global?.innerHeight || 0,
	};
};

export const useWindowResize = () => {
	const [size, setSize] = useState(getWindowSize());

	const handleWindowResize = () => {
		setSize(getWindowSize());
	};

	useEffect(() => {
		global?.addEventListener('resize', handleWindowResize);
	}, []);

	return size;
};
