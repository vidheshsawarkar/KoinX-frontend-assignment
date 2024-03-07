import { InfoCard } from "./InfoCard";
import { InfoCard2 } from "./InfoCard2";
import icon from "../../assets/sentiments_icons/icon.svg"
import icon2 from "../../assets/sentiments_icons/icon2.svg"
import { Estimate } from "./Estimate";
import { Stats } from "./Stats";


export function Sentiment(){
    return <div className="bg-white rounded-lg px-8 pt-8 pb-12 mb-6 w-full">
        <p className="font-medium text-2xl pb-4">Sentiment</p>
        <div className="flex items-center pb-4">
            <p className="font-medium text-[#44475B] text-lg pr-2">Key Events</p>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_664)">
                <path d="M10.04 2.46362C5.44 2.46362 1.70667 6.19696 1.70667 10.797C1.70667 15.397 5.44 19.1303 10.04 19.1303C14.64 19.1303 18.3733 15.397 18.3733 10.797C18.3733 6.19696 14.64 2.46362 10.04 2.46362ZM10.8733 14.9636H9.20667V9.96362H10.8733V14.9636ZM10.8733 8.29696H9.20667V6.63029H10.8733V8.29696Z" fill="#ABB9BF"/>
                </g>
                <defs>
                <clipPath id="clip0_1_664">
                <rect width="20" height="20" fill="white" transform="translate(0.039978 0.796875)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
        <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start gap-4 pb-6">
            <InfoCard image={icon} />
            <InfoCard2 image={icon2} />
        </div>
        <div className="flex items-center">
            <p className="font-medium text-[#44475B] text-lg pr-2">Analyst Estimates</p>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_664)">
                <path d="M10.04 2.46362C5.44 2.46362 1.70667 6.19696 1.70667 10.797C1.70667 15.397 5.44 19.1303 10.04 19.1303C14.64 19.1303 18.3733 15.397 18.3733 10.797C18.3733 6.19696 14.64 2.46362 10.04 2.46362ZM10.8733 14.9636H9.20667V9.96362H10.8733V14.9636ZM10.8733 8.29696H9.20667V6.63029H10.8733V8.29696Z" fill="#ABB9BF"/>
                </g>
                <defs>
                <clipPath id="clip0_1_664">
                <rect width="20" height="20" fill="white" transform="translate(0.039978 0.796875)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
        <div className=" flex items-center pt-4">
            <Estimate percentage={"76"} />
            <Stats />
        </div>
    </div>
}