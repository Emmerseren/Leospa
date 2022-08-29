import {useState} from "react";
import Nav from "./Nav.jsx";
import YoutubeModal from "./YoutubeModal.jsx";
import {DataContext} from "../context/DataContext";
import {useContext} from "react";

const Hero = () => {
  
  const [openModal, setOpenModal] = useState(false)
  
  const {hero} = useContext(DataContext);
  const {noData} = useContext(DataContext);
  const {loading} = useContext(DataContext);

  



  return (
   <>
      
    
         {  
         hero &&
         <>
          <div className="hero__Leaf"> <img  src="images/leaf.png" alt="" /></div>
         {

           hero.map((item) => (
             item.show &&
           <div key={item._id} className="hero__Container" >
                <img  className='hero__Spa' src="images/spa.png" alt="" />
               
              <div className="heroText__Content">
              <h1> {item.title1}</h1>
              <h2> {item.title2}</h2>
              <p> {item.content}</p>
              <div className="link__Container">
               <div className="hero__Reserve" > RESERVE NOW  </div>
                <div onClick={() => {setOpenModal(true);}} className="play__Logo">
                    <span className="material-symbols-outlined">play_arrow </span>
                </div>
                    <a   onClick={() => {setOpenModal(true);}} className="play__Text" > WATCH OUR STORY</a>
                </div>
              </div>
              </div>
              ))
            }
            {openModal && <YoutubeModal closeModal={setOpenModal} Apidata={hero}/>}
         </>
              
         }

         {
           loading && <div> 
          <img className="spinner" src ="images/china-rose.png"></img>

           </div>
         }


         {
           noData && 
          <h1> Ingen resultater</h1>

         }
     </>
  );
}

export default Hero;

