import {useState, useEffect} from 'react'
import { getTeam } from '../helpers/apicall';


const Team = () => {

const [team, setTeam] = useState();
const [loading, setLoading] = useState(false);
const [noData, setNoData] = useState(false);

useEffect (() => {

    setLoading(true);

    setTimeout(() => {

        getTeam().then(data =>{

            if(data){
                console.log(data);
                setTeam(data);
                setNoData(false)
            }

            else{
                setTeam()
                noData(true)
            }

        }).finally(
            setLoading(false)
        )

    },2000)

},[])

return(
<div>

{team &&

<>

<div className='team'>
<div className='team__TextContainer'>

        <p className='team__Headline'> Experienced Team</p>
        <p className='team__Content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ratione vero iste adipisci rerum nesciunt perspiciatis fugiat, rem error voluptates.</p>
</div>
{team.map((item) => (
    <div key={item._id} className="team__User">
        <div className='team__Profil'>
            <img  src={"images/team/" + item.image} alt="" />
        </div>
        <div className='team__ID'>
            <p className='Name'>{item.firstname} {item.lastname}</p>
            <p>{item.role}</p>
        </div>
    </div>

))}
</div>
    
</>

}

{
    noData &&
    <h1>ingen resultater</h1>
}


</div>

);

}

export default Team

