"use client";
import { useState } from "react";
import { Range } from "react-range";

const RangeInput = ({ step = 0.1, min = 0.0, max = 17.0 }) => {
    const [values, setValues] = useState([0, 17.0]);

    const inputChangeHandler = (event) => {
        const updatedValue = event.target.value;
    };

    return (
        <div className="border border-dark40 rounded-4xl px-4">
            <div className="flex gap-[9vw] sm:gap-8 items-center justify-between text-sm text-dark50 mt-4 mb-[11px]">
                <div className="flex justify-end gap-1 text-base">
                    <p className="min-w-max">От</p>
                    <div className="w-16 text-left">

                        {/* Фиксированная ширина */}
                        <p className="text-dark font-medium min-w-max">{values[0] + " млн"}</p>
                    </div>
                </div>
                <div className="w-5 sm:w-10 h-px bg-dark"></div>
                {/* <div className='w-12 h-px bg-dark'></div> */}
                <div className="flex justify-end gap-1 text-base">
                    <p className="min-w-max">До</p>
                    <div className="w-16 text-right">

                        {/* Фиксированная ширина */}
                        <p className="text-dark font-medium min-w-max">{values[1] + " млн"}</p>
                    </div>
                </div>
            </div>
            <Range
                step={step}
                min={min}
                max={max}
                values={values}
                onChange={(newValues) => setValues(newValues)}
                renderTrack={({ props, children }) => {
                    // Вычисляем позиции ползунков в процентах
                    const leftPercent = ((values[0] - min) / (max - min)) * 100;
                    const rightPercent = ((values[1] - min) / (max - min)) * 100;

                    return (
                        <div
                            {...props}
                            className="relative -bottom-[0.5px] h-[3px]"
                            style={{
                                ...props.style,
                            }}
                        >
                            <div
                                className="absolute h-full bg-accent rounded-full"
                                style={{
                                    left: `${leftPercent}%`,
                                    width: `${rightPercent - leftPercent}%`,
                                }}
                            />
                            {children}
                        </div>
                    );
                }}
                renderThumb={({ props, index }) => (
                    <div
                        {...props}
                        key={index}
                        className="w-2.5 h-2.5 bg-accent rounded-full focus:outline-none cursor-pointer"
                        style={{
                            ...props.style,
                        }}
                    />
                )}
            />
        </div>
    );
};

export default RangeInput;
