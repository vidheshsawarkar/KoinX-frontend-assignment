import { LikeCard } from "./LikeCard";
import {useState, useEffect} from 'react';
import axios from "axios";

export function YouMayLike(){

    let [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const { data } = await axios.get("https://api.coingecko.com/api/v3/search/trending");
            setData(data.coins);
        }
        fetchData();
      }, [data]);

    return <div className="bg-white rounded-lg px-14 py-14 w-full overflow-scroll">
        <p className="font-medium text-2xl leading-10 text-black pb-4">You May Also Like</p>
        <div  className="flex flex-no-wrap overflow-x-scroll scrolling-touch gap-3">
            {   
                    data.map((value) => {
                        if(value.item.symbol != "COQ" && value.item.symbol != "PEPE"){
                            return <>                     
                                <LikeCard image={value.item.small} symbol={value.item.symbol} percent={value.item.data.price_change_percentage_24h.aed} price={value.item.data.price} chart={value.item.data.sparkline}/>
                            </>
                        }
                    })
            } 
         </div>
         <p className="font-medium text-2xl leading-10 text-black pb-4 pt-8">Trending Coins</p>
        <div  className="flex flex-no-wrap overflow-x-scroll scrolling-touch gap-3">
            {   
                    data.map((value) => {
                        if(value.item.symbol != "COQ" && value.item.symbol != "PEPE"){
                            return <>                     
                                <LikeCard image={value.item.small} symbol={value.item.symbol} percent={value.item.data.price_change_percentage_24h.aed} price={value.item.data.price} chart={value.item.data.sparkline}/>
                            </>
                        }
                    })
            } 
         </div>
    </div>
}