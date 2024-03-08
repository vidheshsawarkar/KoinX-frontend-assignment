
export function PerformanceStats({lHeading, rHeading, lValue, rValue, value, pointer}){
    return <div className={"flex " + (pointer ? "items-end" : "items-center") + " justify-between w-full pb-8"}>
        <div className="grid">
            <p className="font-light text-sm pb-2 text-nowrap">{lHeading}</p>
            <p className="font-normal text-base">{lValue}</p>
        </div>
        <div className="w-full mx-4 md:mx-12">
            <hr class="h-1 rounded-lg bg-gradient-to-r from-[#FF4949] via-[#FF4E11] via-[#FC870A] via-[#FFAF11] via-[#C2CB21] to-[#11EB68]"></hr>
            { pointer ?
                <div className="flex flex-col items-center w-max ml-auto">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0L11.5 8H0.5L6 0Z" fill="#000000"/>
                </svg>
                <p className="font-light text-sm pb-2">{value}</p>
            </div>: "" }
        </div>
        <div className="grid">
            <p className="font-light text-sm pb-2 text-nowrap text-right">{rHeading}</p>
            <p className="font-normal text-base text-right">{rValue}</p>
        </div>
    </div>


}