import { Fundamental } from "./Fundamental";
import { PerformanceStats } from "./PerformanceStats";

export function Performance(){
    return <div className="bg-white rounded-lg w-3/5 px-8 pt-8 pb-12 mb-6 w-full">
        <p className="font-medium text-2xl pb-6">Performance</p>
        <PerformanceStats lHeading={"Today’s Low"} lValue={"46,930.22"} rHeading={"Today’s High"} rValue={"49,343.83"} value={"$48,637.83"} pointer={true}/>
        <PerformanceStats lHeading={"52W Low"} lValue={"16,930.22"} rHeading={"52W High"} rValue={"49,743.83"} pointer={false}/>
        <div className="flex items-center">
            <p className="font-normal text-[#44475B] text-lg pr-2">Fundamentals</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-24">
            <div className="w-full mr-16">
                <Fundamental text={"Bitcoin Price"} value={"$16,815.46"} />
                <Fundamental text={"24h Low / 24h High"} value={"$16,382.07 / $16,874.12"} />
                <Fundamental text={"7d Low / 7d High"} value={"$16,382.07 / $16,874.12"} />
                <Fundamental text={"Trading Volume"} value={"$23,249,202,782"} />
                <Fundamental text={"Market Cap Rank"} value={"#1"} />
            </div>
            <div className="w-full">
                <Fundamental text={"Market Cap"} value={"$323,507,290,047"} />
                <Fundamental text={"Market Cap Dominance"} value={"38.343%"} />
                <Fundamental text={"Volume / Market Cap"} value={"0.0718"} />
                <Fundamental text={"All-Time High"} value={"$69,044.77"} percentage={"-75.6%"} time={"Nov 10, 2021 (about 1 year)"}/>
                <Fundamental text={"All-Time Low"} value={"$67.81"} percentage={"24729.1%"} time={"Jul 06, 2013 (over 9 years)"}/>
            </div>
        </div>
    </div>
}