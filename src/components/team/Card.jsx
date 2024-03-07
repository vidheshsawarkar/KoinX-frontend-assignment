
export function Card({image, name, designation, about}){
    return <div className="grid grid-rows-2 md:flex justify-items-center gap-4 bg-[#E8F4FD] mb-6 rounded-lg px-6 py-4 items-top">
        <div className="flex flex-col items-center w-fit">
            <img src={image} />
            <p className="font-medium text-sm pt-2">{name}</p>
            <p className="font-light text-xs text-[#788F9B] text-nowrap">{designation}</p>
        </div>
        <p className="font-light text-[#0F1629] text-sm w-fit">{about}</p>
    </div>
}