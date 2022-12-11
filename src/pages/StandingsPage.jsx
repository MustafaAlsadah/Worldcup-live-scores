import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useState } from 'react'
import ScheduleTable from '../components/ScheduleTable'
import CollapseListStandings from '../components/CollapseListStandings'
import StandingsTitleAndButtons from '../components/StandingsTitleAndButtons'
import "../components/components.css"

const StandingsPage = () => {

    const[standing,setStanding] =useState([]);

    function getMatches(){
        
        fetch(
            `http://api.football-data.org/v4/competitions/2000/standings
            `,
            {
                headers: {
                    "X-Auth-Token": "418737ec05fd43bc9a0add42b8df40f2"
                }
            }
        ).then((res)=>{
            return res.json();
        }).then((data) => {
            setStanding(data.standings)
        }).catch((error) => {
            console.error('Error:', error);
          });
    }

    useEffect(function(){
        getMatches();
      },[]);

    const standings = standing.map((standing)=>{
        const standingProps = {
          group: standing.group,
          teams:[standing.table[0],standing.table[1],standing.table[2],standing.table[3]]
        }
        return standingProps ;
    });

//     function getTabels(){
//         let tabels =[]
//         {standings.forEach((stand)=>{
//            tabels.push( <ScheduleTable probs={stand.teams} />) 
//            { console.log(stand)}
// })}
//         // console.log(tabels);
//     }

    

    // function gwtstandings(){
    //     return standings;
    // }

      

    //   let standings = standing.map((standing)=>{
    //     let group=standing.group
    //     let teamNames= [standing.table[0].team.name,standing.table[1].team.name,standing.table[2].team.name,standing.table[3].team.name]
        
    //   });


    return (
        <div >
            <Navbar />
            <StandingsTitleAndButtons />

                <div>
                    
                {/* {standings.map((stand,index)=>( */}
                {/* {console.log(standings)}. */}
                <CollapseListStandings probs={standings} /> 
                {/* ))} */}
                </div>

        </div>
      )


//   return (
//     <div className="warpper">
//         <Navbar />
//         <div className="warpper">
//             <div className="accordion">
                
//             {/* {standings.map((stand,index)=>( */}
//             {/* {console.log(standings)}. */}
//             <CollapseListStandings probs={standings} /> 
//             {/* ))} */}
//             </div>
//         </div>
//     </div>
//   )
}

export default StandingsPage
