import image from '../assets/arrows/arrow.svg'

export function Button({text, arrow}){
    return <div>
        {arrow ? 
            <button className="flex bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white py-1 px-2 md:px-6 rounded-lg font-medium text-sm md:text-base leading-5">
                {text}
            </button> :
            <button className="flex bg-white text-black py-2 px-2 md:px-4 rounded-lg font-medium text-sm md:text-base leading-5">
                {text}
                <img className='pl-2' src={image} />
            </button>
        } 
    </div>
}