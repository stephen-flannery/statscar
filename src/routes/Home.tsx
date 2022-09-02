import { Featured } from '../components/featured';
import { Footer } from '../components/footer';
import { Hero } from '../components/hero';

export default function HomeRoute() {
    return (
        <>
            <Hero />
            <Featured />
            <Footer />
        </>
    );
}
