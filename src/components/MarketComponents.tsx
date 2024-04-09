import {Card} from "../components"
import { chart,chart2,chart3,chart4 ,live} from "../utils"
import Card2 from "./Card2"


const MarketComponents = () => {
  return (
    <>
    <div className="flex  justify-evenly">
      <Card title ="Efficency" bgDiv="669bdb32" bgImg="4ba4e3af" chart={chart} />
      <Card title ="Time to Market" bgDiv="669bdb32" bgImg="4ba4e3af" chart={chart2} />
      <Card title ="Tech Debt" bgDiv="669bdb32" bgImg="4ba4e3af" chart={chart3} />
      <Card title ="Predictabilty" bgDiv="669bdb32" bgImg="4ba4e3af" chart={chart4} />

    </div>

    <div className=" flex justify-around py-2">
        <Card2  title="On Time" task1="Completed Iterations" task2="Total Iterations" task3="Iterations Done"  no={7} tot={9}/>
        <Card2  title="On Scope" task1="Story Point Done" task2="Total Story Points" task3="Stories Done"  no={3200} tot={4230}/>
        <Card2  title="On Velocity" task1="Average Velocity" task2="Required Velocity" task3=""  no={428.6} tot={615.0}/>
    </div>

    <div className=" flex justify-center">

        <img src={live} className="overflow-hidden" />
    </div>
    </>
  )
}

export default MarketComponents
