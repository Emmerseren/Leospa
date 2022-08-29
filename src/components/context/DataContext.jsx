import { createContext, useState, useEffect } from "react";
import { getHero } from "../helpers/apicall";
import {getTreatment} from "../helpers/apicall.js"

export const DataContext = createContext();

const DataProvider = ({children}) => {

    
    
  const [treatment, setTreatment] = useState() 
  const [hero, setHero] = useState();
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false)
  const [update, setUpdate] = useState(false)

  console.log(loading, hero, treatment)

  //Hero
  useEffect(() => {

    setLoading(true);
    
    setTimeout(() => {

        getHero().then( data => { 
            
            if (data) {
                setHero(data);
                setNoData(false)
                }
         else {
            setHero()  
            setNoData(true)    
           }
      }).finally(
        setLoading(false)
      )
    },)
 
}, [update])

//Treatments
 useEffect(() => {

    setLoading(true)

    setTimeout(() => {
      getTreatment().then(data =>{
        if(data) {
          setTreatment(data);
          setNoData(false);
        }
        else{
          setTreatment()
          setNoData(true)
        }
      }).finally(setLoading(false))
    },)

  },[]) 

    return (
        <DataContext.Provider value={{ treatment:treatment, hero:hero,  loading:loading, noData:noData, setUpdate: setUpdate}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;