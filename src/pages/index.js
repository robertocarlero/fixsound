import Layout from '@/components/layout/Layout';

import Hero from '@/components/pages/Hero';
import About from '@/components/pages/About';
import Services from '@/components/pages/Services';
import Equipment from '@/components/pages/Equipment';

export default function Home() {
	return (
		<Layout>
			<Hero />
			<About />
			<Services />
			<Equipment />
		</Layout>
	);
}
