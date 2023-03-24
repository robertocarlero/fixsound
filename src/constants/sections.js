export const SECTIONS = {
	HERO: {
		title: 'Inicio',
		path: '/',
	},
	ABOUT: {
		title: 'Nosotros',
		path: '#about',
	},
	SERVICES: {
		title: 'Servicios',
		path: '#services',
	},
	EQUIPMENT: {
		title: 'Equipos',
		path: '#equipment',
	},
};

export const PAGE_SECTIONS = Object.entries(SECTIONS).map(([key, value]) => ({
	name: key.toLowerCase(),
	...value,
}));
