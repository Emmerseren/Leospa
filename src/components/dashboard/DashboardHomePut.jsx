import {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import { getOneHero, putHero } from '../helpers/apicall'
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./60fps/sprite_60fps.css"
import css from "./dashboardHomePut.module.scss"
import logo from "./60fps/sprite_60fps.svg"



const DashboardHomePut = () => {

const [getOne, setGetOne] = useState()

    let {id} = useParams()

    const [title1, setTitle1] = useState("");
    const [title2, setTitle2] = useState("");
    const [content, setContent] = useState("");
    const [link, setLink] = useState("");
    const { setUpdate } = useContext(DataContext);
    const [clas, setClas] = useState("shapeshifter")


    const putSubmit = (e) => {
      e.preventDefault();
      putHero(title1, title2, content, link, id);
      setUpdate((prevUpdate) => !prevUpdate);
    };
  
  
    useEffect(() => {

    
        setTimeout(() => {
          getOneHero(id)
            .then((data) => {
              if (data) {
                console.log(data);
                setGetOne(data);
                setTitle1(data.title1)
                setTitle2(data.title2)
                setContent(data.content)
                setLink(data.link)
              } else {
                setGetOne();

              }
            })
            
          },);
        }, []);
        return (
          <>
    {getOne && (
      


      
      <form className={css.form} action="">

<label>title 1</label>
<textarea defaultValue={getOne.title1}  onChange={(e) => setTitle1(e.target.value)}  type="text" />
<label>title 2</label>
<textarea  defaultValue={getOne.title2}  onChange={(e) => setTitle2(e.target.value)} type="text" />
<label>content</label>
<textarea defaultValue={getOne.content} onChange={(e) => setContent(e.target.value)}  type="text" />
<label></label>
<textarea defaultValue={getOne.link}  onChange={(e) => setLink(e.target.value)}  type="text" />
<button onClick={putSubmit}> Redigere</button>
<div class={clas} onClick={(e) => setClas("shapeshifter play")} style={{backgroundImage: `url(${logo})`}}></div>
    </form>

    
        )}
    
    </>
  )
}

export default DashboardHomePut