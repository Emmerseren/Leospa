import { useState } from "react";
import { postHome } from "../helpers/apicall";
import { deleteHero } from "../helpers/apicall";
import { DataContext } from "../context/DataContext";
import { postShow } from "../helpers/apicall";
import { useContext } from "react";
import {Link} from "react-router-dom"

import dashboardHomecss from "./dashboardHome.module.scss";

const Dashboard_Home = () => {
  const { hero } = useContext(DataContext);
  const { noData } = useContext(DataContext);
  const { loading } = useContext(DataContext);
  const { setUpdate } = useContext(DataContext);
  
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");


 const findElement = (e) => {
  let myElement = document.getElementById(e.target.value)
  myElement.scrollIntoView({
    behavior: "smooth"
  })
  console.log(myElement)
 }

  const Postpatch = (Id) => {
    postShow(Id);
    setUpdate((prevUpdate) => !prevUpdate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    postHome(title1, title2, content, link);
    setUpdate((prevUpdate) => !prevUpdate);
  };


  const Postdelete = (Id) => {
    alert("are you sure you want to delete");
    deleteHero(Id);
    setUpdate((prevUpdate) => !prevUpdate);
  };

  

  return (
    
    <>


  
      <div className={dashboardHomecss.dashboard__Home}>
        <select className={dashboardHomecss.select__One} onChange={findElement} name="" id="">
           { hero && hero.map((item) => (
              <>
              <option value={item._id}> {item.title1}</option>
             </>
        ))}
 
        </select>


        {hero &&
          hero.map((item) => (
            <div id={item._id}
              key={item._id}
              className={dashboardHomecss.heroData__Container}
            >
              <span></span>
              <div>
                <Link className={dashboardHomecss.edit} to={"./" + (item._id) } >
                <span  className="material-symbols-outlined edit">edit</span>
                </Link>
               
                <p> Title 1</p>
                <p>{item.title1}</p>
                {item.show && (
                  <span className="material-symbols-outlined toggle">radio_button_unchecked</span>
                )}
              </div>
              <div>
                <p>Title 2</p>
                <p>{item.title2}</p>
              </div>
              <div>
                <p>Content</p>
                <p>{item.content}</p>
              </div>
              <div>
                <p>Link</p>
                <p>{item.link}</p>
              </div>
              <div className={dashboardHomecss.icons}>
                <span
                  onClick={() => Postdelete(item._id)}
                  className="material-symbols-outlined delete__Hero"
                >
                  delete
                </span>
                <span
                  onClick={() => Postpatch(item._id)}
                  className="material-symbols-outlined show__Active"
                >
                  visibility
                </span>
              </div>
            </div>
          ))}
        {loading && (
          <div>
            <img className="spinner" src="../images/china-rose.png"></img>
          </div>
        )}

        {noData && <h1> Ingen resultater</h1>}

        <form className={dashboardHomecss.form} action="">
          <div>
            <label> Title 1</label>
            <textarea onChange={(e) => setTitle1(e.target.value)} type="text" />
          </div>
          <div>
            <label> Title 2</label>
            <textarea onChange={(e) => setTitle2(e.target.value)} type="text" />
          </div>
          <div>
            <label> Content</label>
            <textarea
              onChange={(e) => setContent(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label> Link</label>
            <textarea onChange={(e) => setLink(e.target.value)} type="text" />
          </div>
          <button onClick={handleSubmit}>Opret ny</button>
        </form>

        
      </div>
    </>
  );
};

export default Dashboard_Home;
