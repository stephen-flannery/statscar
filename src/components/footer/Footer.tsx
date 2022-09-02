import { Link } from 'react-router-dom';
import { Container } from '../container';

export default function Footer() {
    return (
        <footer className="p-4 bg-white shadow md:px-6 md:py-8">
            <Container maxWidth={'6xl'}>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/">
                        <span className="flex items-center mb-4 sm:mb-0">
                            <span className="self-center whitespace-nowrap text-gray-600 font-bold uppercase text-2xl leading-none">
                                Statscar
                            </span>
                        </span>
                    </Link>

                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
                        <li>
                            <Link
                                to="/about"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/privacy"
                                className="mr-4 hover:underline md:mr-6"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center">
                © {new Date().getFullYear()}{' '}
                <a href="https://flowbite.com/" className="hover:underline">
                    Statscar™
                </a>
                . All Rights Reserved.
            </span>
        </footer>
    );
}
