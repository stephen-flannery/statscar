import { useState } from 'react';
import { MultiValue } from 'react-select';
import NumberOfWinsByNumberOfRacesControls from '../components/stats/number-of-wins-by-number-of-races/controls/NumberOfWinsByNumberOfRacesControls';
import { numberOfWinsByNumberOfRacesData } from '../components/stats/number-of-wins-by-number-of-races/data/NumberOfWinsByNumberOfRacesData';
import NumberOfWinsByNumberOfRacesGraph from '../components/stats/number-of-wins-by-number-of-races/graph/NumberOfWinsByNumberOfRacesGraph';

export default function NumberOfWinsByNumberOfRacesRoute() {
    const [dataSet, setDataSet] = useState(numberOfWinsByNumberOfRacesData);
    const [numberOfRaces, setNumberOfRaces] = useState(800);

    function handleDriversChange(
        selected: MultiValue<{ value: number; label: string }>,
    ) {
        const copyDataSet = dataSet;

        copyDataSet.map((item, index) => {
            if (selected.some((select) => select.value === index)) {
                copyDataSet[index].hide = false;
            } else {
                copyDataSet[index].hide = true;
            }
        });

        setDataSet([...copyDataSet]);
    }

    function handleRacesChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.value.length) {
            setNumberOfRaces(parseInt(e.target.value));
        }
    }

    return (
        <div className="h-full flex-1 flex flex-col items-center py-12">
            <NumberOfWinsByNumberOfRacesControls
                numberOfRaces={numberOfRaces}
                dataSet={dataSet}
                handleDriversChange={handleDriversChange}
                handleRacesChange={handleRacesChange}
            />
            <NumberOfWinsByNumberOfRacesGraph
                dataSet={dataSet}
                numberOfRaces={numberOfRaces}
            />
        </div>
    );
}
