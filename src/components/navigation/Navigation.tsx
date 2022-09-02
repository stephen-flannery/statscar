import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="bg-blue-500 px-12 py-4 w-full">
            <div className="max-w-6xl mx-auto flex items-center justify-between w-full flex-col lg:flex-row">
                <div className="flex items-center text-white">
                    <Link
                        to="/"
                        className="font-semibold text-xl tracking-tight uppercase text-2xl"
                    >
                        Statscar
                    </Link>
                </div>
                <div className="flex items-center pt-4 lg:p-0">
                    <div className="flex gap-8 px-8">
                        <Link
                            to="/stats"
                            className="text-blue-200 leading-none inline-block py-2"
                        >
                            Stats
                        </Link>
                        <Link
                            to="/about"
                            className="text-blue-200 leading-none inline-block py-2"
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="text-blue-200 leading-none inline-block py-2"
                        >
                            Contact
                        </Link>
                    </div>
                    {/* <div className="flex gap-4">
                        <Link
                            to="#"
                            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white"
                        >
                            Login
                        </Link>
                    </div> */}
                </div>
            </div>
        </nav>
    );
}
