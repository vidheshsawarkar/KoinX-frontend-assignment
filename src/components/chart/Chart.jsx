import bitcoin from "../../assets/bitcoin.svg"
import { CoinRates } from "../trendingCoins/CoinRates";
import up from '../../assets/arrows/upArrow.svg'
import TradingViewWidget from "./TradingViewWidget";
import {useState, useEffect} from 'react';
import axios from "axios";

export function Chart(){

    let [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const {data} = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true");
            setData(data);
        }
        fetchData();
    }, [data]);

    // console.log(data)

  return <div className="bg-white rounded-lg px-8 py-6 mb-6 w-full">
        <div className="flex items-center pb-8">
            <img className="h-8" src={bitcoin} />
            <p className="font-medium text-2xl ml-2">Bitcoin</p>
            <p className="font-medium text-sm text-[#5D667B] ml-2">BTC</p>
            <div className="bg-[#808A9D] p-2 w-min rounded-lg ml-8">
                <p className="font-normal text-sm text-white text-nowrap">Rank #1</p>
            </div>
        </div>
        <div className="flex pb-6">
            <div>
                <p className="font-medium text-2xl ml-2 text-[#0B1426]">$46,953.04</p>
                <p className="font-light text-sm ml-2 pt-1">₹ 39,42,343</p>
            </div>
            <div className="w-max pl-6">
                <CoinRates direction={up} percentage={2.51}/>
            </div>
            <p className="font-normal text-sm text-[#768396] pl-2">(24H)</p>
        </div>
        <hr class="h-px rounded-lg pb-4"></hr>
        <p className="font-medium text-base ml-2 pt-1 pb-4">Bitcoin Price Chart (USD)</p>
        <div className="flex w-full">
            <TradingViewWidget />
        </div>
    </div>
}
