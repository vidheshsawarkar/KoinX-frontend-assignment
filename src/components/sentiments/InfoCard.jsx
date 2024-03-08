
export function InfoCard({image}){
    return <div className="flex-none w-4/5 md:w-2/4">
        <div className="sm:flex place-items-start gap-2 bg-[#E8F4FD] rounded-lg px-4 pt-4 pb-8"> 
            <img className="" src={image} />
            <div className="pt-2">
                <p className="font-normal text-sm text-[#191C1F] px-0.5">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                <p className="font-light text-sm text-[#3E5765] pt-2 px-0.5">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
            </div>
        </div>
    </div>
}