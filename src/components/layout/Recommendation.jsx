import {useState, useEffect} from 'react'
import {getRecommendation} from "../helpers/apicall.js"
import Carousel from 'nuka-carousel';




const Recommendation = () => {

    const [recommendation, setRecommendation] = useState()
    const [loading, setLoading] = useState(false)
    const [noData, setNodata] = useState(false)

    useEffect (() => {

        setLoading(true);

        setTimeout(() => {

            getRecommendation().then(data => {

                if (data) {
                    console.log(data)
                    setRecommendation(data);
                    setNodata(false)

                }
                else{
                    setRecommendation()
                    setNodata(true)
                }

            }).finally(
                setLoading(false)
            )
        },2000)
    }, [])

  return (
    <div>


{recommendation &&
<>


<Carousel autoplay ="true" autoplayInterval={3000} wrapAround ="true" defaultControlsConfig={{nextButtonClassName: "next", prevButtonClassName: "prev", pagingDotsClassName: "dots",  } } >
{
    recommendation?.map((item, id) => (

        <div key={item._id} className=" user__Recommendations">
        <img className='quote__Img'  src="/images/quote.png"/>
        <p className='recommendation__Content'>{item.content}</p>
        <img  className="user__Profil" src={"images/recommendation/" + item.image} alt="" />
            <div className="user__ID">
        <p className="user__Name">{item.name},</p>
        <p className="user__Title">{item.title}</p>
            </div>
        </div>
    ))
}
        </Carousel>

</>}


    </div>

    
  )
}

export default Recommendation