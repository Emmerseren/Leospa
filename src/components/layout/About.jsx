import {useState, useEffect} from 'react'
import { getSection } from '../helpers/apicall.js'
import Procedures from './Procedures'



const About = () => {

    const [section, setSection] = useState()
    const [loading, setLoading] = useState(false)
    const [noData, setNodata] = useState(false)

    useEffect (() => {

        setLoading(true);

        setTimeout(() => {
            getSection().then(cdata => {
                if (cdata) {
                    setSection(cdata);
                    setNodata(false)
                }
                else{
                    setSection()
                    setNodata(true)
                }
            }).finally(
                setLoading(false)
            )
        }, )
    },[])

  return (
    <section>
      
        

        { section &&
            <>
        {
         section?.map((item, id) => (
             <div key={item._id} className="about">
                <img className='china__Rose' src="images/china-rose.png" alt="" />

                <div className='butterfly__Container'>
                     <img src="images/butterfly.png" alt="" />
                     <p className='about__Title'>{item.title1}</p>
                </div>

                <div className="about__TextContainer">
                    <p className='about__Title2'>{item.title2}</p>
                    <p className='about__Content' dangerouslySetInnerHTML= {{ __html: item.content }} ></p>
                </div>

                <img className='jasmine' src="images/jasmine.png" alt="" />

                <div className="read__MoreButton"> READ MORE</div>

             </div>
                    
             
                ))
            }
           

             
            </>
            }

        {
           loading && <div> 
          <img className="spinner" src ="images/china-rose.png"></img>

           </div>
         }

     

      
    </section>


  )
}

export default About