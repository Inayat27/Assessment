import { useState } from "react"

interface iter { 
    noOf : number,
    total:number
}

const Card2 = ({title ,task1 , task2,task3 , no,tot}) => {
    const [iter, setiter] = useState<iter>({
        noOf:no,
        total:tot
    });
  return (
    <div className='border rounded bg-white w-[250px]  p-2'>
       <div className="flex justify-between py-2">
       <p>{title}</p>
       {task3 !=="" ?
        <span><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8.52144" cy="7.59078" r="7.5649" fill="#26D75A"/>
</svg>
</span>
:
<span>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8.39058" cy="7.59078" r="7.5649" fill="#FF6E66"/>
</svg>

</span>
  }
       </div>

       <div className="flex flex-col p-2">
  <div className="flex justify-between"> 
    <div>{task1}</div>  
    <div className="">{iter.noOf}</div>
  </div>
  <div className="flex justify-between">  
    <div>{task2}</div>  
    <div className="">{iter.total}</div>
  </div>
  {task3 ===""?"":
  <div className="flex justify-between">  
    <div>% {task3} </div>  
    <div className="">{Math.ceil((iter.noOf / iter.total) * 100)}%</div>
  </div>
}
</div>

      
    </div>
  )
}

export default Card2
