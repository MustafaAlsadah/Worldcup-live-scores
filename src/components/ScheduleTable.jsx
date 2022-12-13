import "./StandingsPageTableStyle.css";
import React from 'react'
import TeamCardTable from './TeamCardTable';

const ScheduleTable = ({probs}) => {
  const heders=["Team","W","D","L","+/-","PTS"];
  console.log("heelo")
  
//   probs.map((standsItem,index)=>{
//     console.log(standsItem.team.name)
// })

  return (
    <div className='warpper'>
      <table className='content-table' >
      <thead> 
        <tr> 
          {heders.map((hedersItem,index)=>(
            <th key={index}>
              {hedersItem}
            </th>
          ))}

        </tr>
      </thead>
      <tbody>
      {probs.map((standsItem,index)=>(
          <tr key={index}>
            <td>
              <TeamCardTable teamName={standsItem.team.name} />
            </td>
            <td>
              {standsItem.won}
            </td>
            <td>
              {standsItem.draw}
            </td>
            <td>
              {standsItem.lost}
            </td>
            <td>
              {standsItem.goalDifference}
            </td>
            <td>
              {standsItem.points}
            </td>
          </tr>

          ))}


      </tbody>
    </table>
    </div>
  )
}

export default ScheduleTable
