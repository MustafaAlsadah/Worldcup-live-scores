import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useState } from 'react'
import ScheduleTable from '../components/ScheduleTable'
import CollapseListStandings from '../components/CollapseListStandings'
import StandingsTitleAndButtons from '../components/StandingsTitleAndButtons'
import "../components/components.css"
import StandingsBracket from '../components/StandingsBracket'
const StandingsPage = () => {

    const [showGroups, setShowGroups] = useState(true);

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

    return (
        <div >
            <Navbar />
            <StandingsTitleAndButtons showGroups={setShowGroups} />

                <div>
                    
                {/* {standings.map((stand,index)=>( */}
                {/* {console.log(standings)}. */}
                {showGroups&&<CollapseListStandings probs={standings} /> }
                
                {!showGroups&&<StandingsBracket/>}
                </div>

        </div>
      )


    }
export default StandingsPage
