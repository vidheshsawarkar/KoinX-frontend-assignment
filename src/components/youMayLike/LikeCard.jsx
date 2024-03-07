import { CoinRates } from '../trendingCoins/CoinRates'
import up from '../../assets/arrows/upArrow.svg'


export function LikeCard({image, symbol, percent, price, chart}){
    return <div className="border border-[#E3E3E3] rounded-lg p-4 flex-none w-72">
        <div className='flex items-center w-full'>
            <img className="w-6" src={image} />
            <p className="text-base text-[#202020] pl-2">{symbol}</p>
            <div className='w-max pl-2'>
                <CoinRates direction={up} percentage={percent.toFixed(2)} />
            </div>
        </div>
        <div>
            <p className='text-xl pt-3 pb-2'>{price}</p>
        </div>
        <div>
            <img src={chart} />
        </div>
    </div>
}