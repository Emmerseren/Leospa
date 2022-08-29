import React from 'react'
import ReactPlayer from 'react-player'


const YoutubeModal = ({closeModal, Apidata}) => {
    console.log(Apidata)
  return (


    <div className='modal'>
    
    {Apidata.map((item)=>(
        item.show &&
        <div className='youtube__Modal'>
            <ReactPlayer loop="true" playing="true"
                url={item.link}
            />
            <button onClick={() => closeModal(false)} className='close__Modal'> 
            <span className="material-symbols-outlined">close</span>
            </button>
        </div>
    ))}
  
    
    </div>
  )
}

export default YoutubeModal