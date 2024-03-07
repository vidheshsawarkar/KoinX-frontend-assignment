

export function Fundamental({text, value, percentage, time}){
    return <div className="flex items-center justify-between border-b border-[#D3E0E6]">
        <p className="font-normal text-xs text-[#768396] py-4 pr-3">{text}</p>
        {percentage ? parseInt(percentage) < 0 ?
         <div>
            <p className="flex justify-end font-normal text-xs text-[#768396]">{value}
                <p className="pl-1 text-[#F7324C]">{percentage}</p>
            </p>
            <p className="font-light text-xs text-[#111827] py-1">{time}</p>
         </div> :
         <div>
            <p className="flex justify-end font-normal text-xs text-[#768396]">{value}
                <p className="pl-1 text-[#0FBA83]">{percentage}</p>
            </p>
            <p className="font-light text-xs text-[#111827] py-1">{time}</p>
        </div>
         :
         <p className="font-normal text-xs text-[#111827]">{value}</p>
        }
    </div>
}