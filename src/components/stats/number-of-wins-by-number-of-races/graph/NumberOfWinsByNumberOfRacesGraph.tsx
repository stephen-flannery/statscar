import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Number of wins by number of races',
        },
    },
    scales: {
        y: {
            title: {
                display: true,
                text: 'Number Of Wins',
            },
        },
        x: {
            title: {
                display: true,
                text: 'Number Of Races',
            },
        },
    },
};

type Props = {
    dataSet: {
        label: string;
        backgroundColor: string;
        data: number[];
        hide: boolean;
    }[];
    numberOfRaces: number;
};

export default function NumberOfWinsByNumberOfRacesGraph({
    dataSet,
    numberOfRaces,
}: Props) {
    const [data, setData] = useState({
        labels: Array.from(Array(numberOfRaces).keys()),
        datasets: dataSet.filter((item) => item.hide !== true),
    });

    useEffect(() => {
        setData({
            labels: Array.from(Array(numberOfRaces).keys()),
            datasets: dataSet.filter((item) => item.hide !== true),
        });
    }, [dataSet, numberOfRaces]);

    return (
        <div className="w-full flex-1 flex items-center px-4 lg:px-12">
            <Line options={options} data={data} />
        </div>
    );
}
