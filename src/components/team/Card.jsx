
export function Card({image, name, designation, about}){
    return <div className="grid md:flex justify-items-center gap-y-2 md:gap-x-4 bg-[#E8F4FD] mb-4 rounded-lg px-6 py-4 items-top">
        <div className="flex flex-col items-center w-fit">
            <img src={image} />
            <p className="font-medium text-sm pt-2">{name}</p>
            <p className="font-light text-xs text-[#788F9B] text-nowrap">{designation}</p>
        </div>
        <p className="font-light text-[#0F1629] text-sm w-fit pt-2">{about}</p>
    </div>
}