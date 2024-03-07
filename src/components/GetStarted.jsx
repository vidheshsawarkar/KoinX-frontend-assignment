import image from '../assets/girl_with_phone.svg'
import { Button } from './Button'

export function GetStarted(){
    return <div className="bg-[#0052FE] w-full h-max flex flex-col items-center rounded-2xl px-10 pt-8 pb-12">
        <p className="font-semibold text-2xl leading-10 text-center text-white w-full">Get Started with KoinX for FREE</p>
        <p className="font-xs text-sm leading-6 text-center text-white w-full px-4 pt-4">With our range of features that you can equip for free,
        KoinX allows you to be more educated and aware of your tax reports.
        </p>
        <div className='pt-10 pb-6'>
            <img src={image} />  
        </div>
        <Button text={"Get Started for FREE"} arrow={false}/> 
    </div>
}
