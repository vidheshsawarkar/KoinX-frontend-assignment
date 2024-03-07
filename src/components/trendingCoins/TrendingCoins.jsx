import { Coins } from "./Coins";
import {useState, useEffect} from 'react';
import axios from "axios";


export function TrendingCoins(){
    let [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const { data } = await axios.get("https://api.coingecko.com/api/v3/search/trending");
            setData(data.coins);
        }
        fetchData();
      }, [data]);
    //   console.log(data);

    //   for(let key in data){
    //     if(key < 3){
    //         console.log(data[key].item.name)
    //     }
    //   }

    return <div className="w-full bg-white px-6 py-8 rounded-xl h-min">
        <p className="font-medium text-2xl text-black pb-6">Trending Coins (24h)</p>
        {/* {
            data.map((value, key) => {
                if(key < 3){
                    console.log(value.item.name)
                }
            })
        } */}
        <div className="grid gap-y-5 w-full">
            {
                data.map((value, key) => {
                    if(key < 3){
                        return <>
                            <Coins text={value.item.name} image={value.item.small} symbol={value.item.symbol} percent={value.item.data.price_change_percentage_24h.aed}/>
                        </>
                    }
                })
            } 
            {/* <Coins text={"Ethereum (ETH)"} image={ethereum} />
            <Coins text={"Bitcoin (BTC)"} image={bitcoin} />
            <Coins text={"Polygon (MATIC)"} image={polygon} /> */}
        </div>
    </div>
}