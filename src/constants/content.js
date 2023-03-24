import productAsset1 from '@/assets/images/product-1.png';
import productAsset2 from '@/assets/images/product-2.png';
import productAsset3 from '@/assets/images/product-3.png';
import productAsset4 from '@/assets/images/product-4.png';
import productAsset5 from '@/assets/images/product-5.png';
import productAsset6 from '@/assets/images/product-6.png';

export const ABOUT_ITEMS = [
	{
		icon: 'check',
		title: 'Soluciones a la medida de tus gustos y necesidades',
	},
	{
		icon: 'check',
		title: 'Tecnología de última generación y componentes de alta calidad',
	},
	{
		icon: 'check',
		title: 'Personalización y trabajo en equipo con nuestros clientes',
	},
	{
		icon: 'check',
		title: 'Servicio rápido y eficiente',
	},
];

export const SERVICES_ITEMS = [
	{
		icon: 'shield-star',
		title: 'Instalación',
		description:
			'Instalamos sistemas de sonido de alta fidelidad para una experiencia de audio premium.',

		color: 'primary',
	},
	{
		icon: 'tools',
		title: 'Reparación',
		description:
			'Reparamos problemas con tu sistema de sonido para que puedas volver a disfrutar de la música en tu carro.',
		color: 'secondary',
	},
	{
		icon: 'magic',
		title: 'Mantenimiento',
		description:
			'Mantenemos tus sistemas de sonido en buen estado para que sigan sonando genial en tu carro.',
		color: 'primary',
	},
	{
		icon: 'sound-module',
		title: 'Personalización',
		description:
			'Personalizamos tu sistema de sonido para que se adapte a tus gustos y necesidades.',
		color: 'secondary',
	},
];

export const EQUIPMENT_ASSETS = [
	{
		...productAsset1,
		width: 220,
		height: 220,
		alt: '',
		title: 'Tweeter',
	},
	{
		...productAsset2,
		width: 220,
		height: 220,
		alt: '',
		title: 'Tweeter',
	},
	{
		...productAsset3,
		width: 220,
		height: 220,
		alt: '',
		title: 'Tweeter',
	},
	{
		...productAsset4,
		width: 220,
		height: 150,
		alt: '',
		title: 'Tweeter',
	},
	{
		...productAsset5,
		width: 220,
		height: 130,
		alt: '',
		title: 'Tweeter',
	},
	{
		...productAsset6,
		width: 220,
		height: 180,
		alt: '',
		title: 'Tweeter',
	},
];
