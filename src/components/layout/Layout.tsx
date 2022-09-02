import { Outlet } from 'react-router-dom';
import { Footer } from '../footer';
import { Navigation } from '../navigation';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <div className="flex-1 flex flex-col">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
