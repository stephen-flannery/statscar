import { Container } from '../container';

export default function Hero() {
    return (
        <div
            className="
            h-screen 
            min-h-98 
            max-h-144 
            overflow-hidden 
            relative 
            bg-gray-800 
            z-0
            flex
            items-center
            "
        >
            <div
                className="bg-hero bg-center bg-no-repeat bg-cover absolute top-0 left-0 h-full w-full opacity-30"
                style={{ zIndex: -1 }}
            ></div>
            <Container>
                <h1 className="text-white text-8xl uppercase font-bold text-center">
                    Statscar
                </h1>
                <h2 className="text-gray-300 text-xl text-center">
                    A site to visualize nascar statistics.
                </h2>
            </Container>
        </div>
    );
}
