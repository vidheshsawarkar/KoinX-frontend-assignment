

export function CoinRates({direction, percentage}){
    return <div className="flex gap-1.5 bg-[#EBF9F4] px-2 py-1 rounded">
        <img src={direction} />
        <p className="font-normal text-sm leading-5 text-[#14B079]">{percentage}%</p>
    </div>
}