import React from 'react';

<<<<<<< HEAD
export default function TeamCard(props) {
  let teamName = props.teamName;
  console.log(props, teamName);
  return (
    <div className='team-card'>
      <img src={'../Flags/' + teamName + '.png'} width='30%' alt='' />
      <p className='team-cards--team-name'>{teamName}</p>
    </div>
  );
=======
export default function TeamCard(props){
    let teamName = props.teamName;
    return(
        <div className="team-card">
            <img src={"Flags/"+teamName+".png"} width="30%" alt="" />
            <p className="team-cards--team-name">{teamName}</p>
        </div>
    )
>>>>>>> d1e50af28888651c7fb503a4ec082165f9c333ef
}
