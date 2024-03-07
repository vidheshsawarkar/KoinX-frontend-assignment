import Logo from '../assets/KoinX_logo.svg'
import { Button } from './Button'


export function Navbar(){
    return <div className='flex items-center justify-between px-12 border-b border-[#DEDFE2] shadow-sm bg-white'>
        <div className='my-2 py-6'>
            <img src={Logo} />
        </div>
        <div className='hidden md:flex items-center justify-end my-2'>
            <div  className='flex justify-end space-x-8 py-6'>
                <div>
                    <h5 className='font-medium text-base leading-5'>Crypto Taxes</h5>
                </div>   
                <div>
                    <h5 className='font-medium text-base leading-5'>Free Tools</h5>
                </div>
                <div>
                    <h5 className='font-medium text-base leading-5'>Resource Center</h5>
                </div>
            </div>
            <div className='ml-10'>
                <Button text={"Get Started"} arrow={true}/>
            </div>
        </div>
        <div class="space-y-1.5 ml-10 block md:hidden">
            <div class="w-8 h-1 bg-black"></div>
            <div class="w-8 h-1 bg-black"></div>
            <div class="w-8 h-1 bg-black"></div>
        </div>
    </div>
}