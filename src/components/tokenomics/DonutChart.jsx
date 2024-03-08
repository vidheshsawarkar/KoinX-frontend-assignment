import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function DountChart(){
    return <div className="flex items-center">
        <div className="w-40 h-40 my-4">
            <CircularProgressbar strokeWidth={16} value={75} styles={buildStyles({
            textColor: "red",
            pathColor: "#0082FF",
            trailColor: "#FAA002",
            strokeLinecap: "butt",
            })}/>
        </div> 
        <div className="ml-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-[#0082FF] rounded-full h-min"></div>
                <h1 className="font-light">Crowdsale investors: 80%</h1>
            </div>
            <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[#FAA002] rounded-full h-min"></div>
                <h1 className="font-light">Foundation: 20%</h1>
            </div>
        </div>
    </div>
};
