import { SECTIONS } from '@/constants/sections';

export const getSectionId = (sectionName) => {
	const sectionKey = `${sectionName}`.toUpperCase();

	const { path } = SECTIONS[sectionKey];

	const response = path.replace('#', '');

	return response;
};
