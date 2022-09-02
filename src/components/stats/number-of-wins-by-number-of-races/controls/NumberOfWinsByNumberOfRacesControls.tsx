import Select, { MultiValue } from 'react-select';

type Props = {
    dataSet: {
        label: string;
        backgroundColor: string;
        data: number[];
        hide: boolean;
    }[];
    numberOfRaces: number;
    handleDriversChange: (
        selected: MultiValue<{ value: number; label: string }>,
    ) => void;
    handleRacesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function NumberOfWinsByNumberOfRacesControls({
    dataSet,
    numberOfRaces,
    handleDriversChange,
    handleRacesChange,
}: Props) {
    const options = dataSet.map((driver, index) => ({
        value: index,
        label: driver.label,
    }));

    const nonHiddenData = dataSet.filter((item) => item.hide !== true);

    const defaultValues = options.filter((item) =>
        nonHiddenData.some((driver) => item.label === driver.label),
    );

    return (
        <div className="w-full flex justify-end items-start max-w-6xl gap-2 lg:gap-8 flex-col lg:flex-row px-4 lg:px-12 mb-6 lg:m-0">
            <div className="flex flex-col justify-center w-full">
                <label
                    htmlFor="exampleFormControlInput1"
                    className="inline-block text-gray-400 text-sm uppercase font-semibold"
                >
                    Drivers
                </label>
                <Select
                    options={options}
                    isMulti
                    placeholder="Driver Select"
                    defaultValue={defaultValues}
                    onChange={handleDriversChange}
                />
            </div>
            <div className="flex flex-col justify-center">
                <label
                    htmlFor="exampleFormControlInput1"
                    className="inline-block text-gray-400 text-sm uppercase font-semibold"
                >
                    # of races
                </label>
                <input
                    type="number"
                    defaultValue={numberOfRaces}
                    step={10}
                    min={10}
                    max={1200}
                    className="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                    id="exampleFormControlInput1"
                    placeholder="Example label"
                    onChange={handleRacesChange}
                />
            </div>
        </div>
    );
}
