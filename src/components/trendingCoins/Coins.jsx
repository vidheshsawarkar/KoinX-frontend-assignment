import { CoinRates } from "./CoinRates";
import up from '../../assets/arrows/upArrow.svg'

export function Coins({text, image, symbol, percent}){
    return <div className="flex justify-between items-center">
        <div className="flex gap-1.5">
            <img className="w-6" src={image} />
            <p className="font-normal text-sm leading-6 text-center text-black text-nowrap">{text} ({symbol})</p>
        </div>
        <div>
            <CoinRates direction={up} percentage={percent.toFixed(2)}/>
        </div>
    </div>
}
