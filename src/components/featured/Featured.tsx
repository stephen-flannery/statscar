import { Container } from '../container';

export default function Featured() {
    return (
        <div className="py-16">
            <Container maxWidth={'6xl'}>
                <h3 className="mb-4 text-3xl font-bold leading-tight text-gray-700">
                    Featured Stats
                </h3>
                <div className="flex gap-8">
                    {/*  */}
                    <div className="max-w-sm bg-gray-200 rounded-lg shadow-md">
                        <img
                            className="rounded-t-lg"
                            src="https://cdn-1.motorsport.com/images/mgl/YKELppr0/s1200/ross-chastain-trackhouse-racin-1.webp"
                            alt=""
                        />
                        <div className="p-5">
                            <a href="/stats/number-of-wins-by-number-of-races">
                                <h5 className="mb-2 text-2xl font-bold leading-tight text-gray-700">
                                    Number of wins by number of races
                                </h5>
                            </a>
                            <p className="mb-6 font-normal text-gray-600">
                                See how drivers win more or less depending on
                                how many races they have ran in their career.
                            </p>
                            <a
                                href="/stats/number-of-wins-by-number-of-races"
                                className="inline-flex items-center py-2 pl-3 pr-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                View
                                <svg
                                    aria-hidden="true"
                                    className="ml-2 -mr-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/*  */}
                    <div className="max-w-sm bg-gray-200 rounded-lg shadow-md">
                        <img
                            className="rounded-t-lg"
                            src="https://cdn-1.motorsport.com/images/mgl/6n9g9kRY/s1200/denny-hamlin-joe-gibbs-racing--1.webp"
                            alt=""
                        />
                        <div className="p-5">
                            <a href="/stats/active-drivers-finishes-darlington">
                                <h5 className="mb-2 text-2xl font-bold leading-tight text-gray-700">
                                    Active drivers finishes at Darlington
                                </h5>
                            </a>
                            <p className="mb-6 font-normal text-gray-600">
                                See how active drivers have finished at
                                Darlington throughout their careers.
                            </p>
                            <a
                                href="/stats/active-drivers-finishes-darlington"
                                className="inline-flex items-center py-2 pl-3 pr-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                View
                                <svg
                                    aria-hidden="true"
                                    className="ml-2 -mr-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/*  */}
                    <div className="max-w-sm bg-gray-200 rounded-lg shadow-md">
                        <img
                            className="rounded-t-lg"
                            src="https://cdn-1.motorsport.com/images/mgl/68y7L1l0/s1200/ryan-blaney-team-penske-wabash-1.webp"
                            alt=""
                        />
                        <div className="p-5">
                            <a href="/stats/playoff-advancement-probability">
                                <h5 className="mb-2 text-2xl font-bold leading-tight text-gray-700">
                                    Playoff advancement probability
                                </h5>
                            </a>
                            <p className="mb-6 font-normal text-gray-600">
                                See the probability of each playoff driver
                                advancing each round.
                            </p>
                            <a
                                href="/stats/playoff-advancement-probability"
                                className="inline-flex items-center py-2 pl-3 pr-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                View
                                <svg
                                    aria-hidden="true"
                                    className="ml-2 -mr-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
