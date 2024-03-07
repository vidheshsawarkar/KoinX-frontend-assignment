import image1 from '../../assets/about/bitcoin_image1.svg'
import image2 from '../../assets/about/bitcoin_image2.svg'
import { Button } from '../Button'


export function About(){
    return <div className="bg-white rounded-lg p-8 mb-6 w-full">
        <p className="font-medium text-2xl pb-6">About Bitcoin</p>
        
        <p className="font-semibold text-base pb-2">What is Bitcoin?</p>
        <p className="font-normal text-sm pb-4">Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
        
        <hr class="h-px rounded-lg pb-4"></hr>

        <p className="font-semibold text-base pb-2">Lorem ipsum dolor sit amet</p>
        <p className="font-normal text-sm pb-6">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p> 
        <p className="font-normal text-sm pb-4">Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>
        
        <hr class="h-px rounded-lg pb-6"></hr>

        <p className="font-medium text-2xl pb-6">Already Holding Bitcoin?</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-4'>
            <div className='flex items-center bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] w-full p-4 rounded-lg'>
                <img src={image1} />
                <div className='pl-6'>
                    <p className="font-medium text-xl pb-6 text-white">Calculate your Profits</p>
                    <Button text={"Check Now"} arrow={false}/> 
                </div>
            </div>

            <div className='flex items-center bg-gradient-to-r from-[#FF9865] to-[#EF3031] w-full p-4 rounded-lg'>
                <img src={image2} />
                <div className='pl-6'>
                    <p className="font-medium text-xl pb-6 text-white">Calculate your tax liabilitys</p>
                    <Button text={"Check Now"} arrow={false}/> 
                </div>
            </div>
        </div>

        <hr class="h-px rounded-lg pb-4"></hr>

        <p className="font-normal text-sm">Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
    </div>
}