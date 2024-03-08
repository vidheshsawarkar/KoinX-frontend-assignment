

export function Stats(){
    return  <div className="w-full ml-6 md:ml-12">
        <div className="flex items-center mb-3">
            <p className="font-normal text-base text-[#7C7E8C]">Buy</p>
            <hr class="h-2 rounded-sm bg-[#00B386] w-1/2 ml-6 mr-4"></hr>
            <p className="font-normal text-base text-[#7C7E8C]">76%</p>
        </div>
        <div className="flex items-center mb-3">
            <p className="font-normal text-base text-[#7C7E8C]">Hold</p>
            <hr class="h-2 rounded-sm bg-[#C7C8CE] w-10 ml-4 mr-4"></hr>
            <p className="font-normal text-base text-[#7C7E8C]">8%</p>
        </div>
        <div className="flex items-center mb-3">
            <p className="font-normal text-base text-[#7C7E8C]">Sell</p>
            <hr class="h-2 rounded-sm bg-[#F7324C] w-20 ml-6 mr-4"></hr>
            <p className="font-normal text-base text-[#7C7E8C]">16%</p>
        </div>
    </div>
}