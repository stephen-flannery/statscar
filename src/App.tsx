import HomeRoute from './routes/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NumberOfWinsByNumberOfRacesRoute from './routes/NumberOfWinsByNumberOfRaces';
import { Layout } from './components/layout';
import ActiveDriversFinishesAtDarlington from './routes/ActiveDriversFinishesAtDarlington';
import PlayoffAdvancementProbability from './routes/PlayoffAdvancementProbability';
import AboutRoute from './routes/About';
import PrivacyRoute from './routes/Privacy';
import ContactRoute from './routes/Contact';
import StatsRoute from './routes/Stats';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomeRoute />} />
                <Route path="/stats" element={<Layout />}>
                    <Route index element={<StatsRoute />} />
                    <Route
                        path="/stats/number-of-wins-by-number-of-races"
                        element={<NumberOfWinsByNumberOfRacesRoute />}
                    />
                    <Route
                        path="/stats/active-drivers-finishes-darlington"
                        element={<ActiveDriversFinishesAtDarlington />}
                    />
                    <Route
                        path="/stats/playoff-advancement-probability"
                        element={<PlayoffAdvancementProbability />}
                    />
                </Route>
                <Route path="/" element={<Layout />}>
                    <Route path="/about" element={<AboutRoute />} />
                    <Route path="/privacy" element={<PrivacyRoute />} />
                    <Route path="/contact" element={<ContactRoute />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
