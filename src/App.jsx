import { GetStarted } from './components/GetStarted'
import { Navbar } from './components/Navbar'
import { Sections } from './components/Sections'
import { TrendingCoins } from './components/trendingCoins/TrendingCoins'
import { Performance } from './components/performance/Performance'
import { About } from './components/about/About'
import { Tokenomics } from './components/tokenomics/Tokenomics'
import { Team } from './components/team/Team'
import { Sentiment } from './components/sentiments/Sentiment'
import { Chart } from './components/chart/Chart'
import { YouMayLike } from './components/youMayLike/YouMayLike'

function App() {

  return <div className='bg-[#EFF2F5] h-full'>
      <Navbar />  
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-0 gap-x-0 lg:gap-x-6 p-4 md:p-8 lg:p-12 items-start">
        <div className='col-span-2'>
          <Chart />
          <Sections />
          <Performance />
          <Sentiment />
          <About />
          <Tokenomics />
          <Team />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 w-full">
          <GetStarted />
          <TrendingCoins /> 
        </div>
      </div>
      <div className='pt-4'>
        <YouMayLike />
      </div>
  </div>
}

export default App
