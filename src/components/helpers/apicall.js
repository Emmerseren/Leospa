import React from "react";
import axios from "axios";

const api = {
    baseUrl: "http://localhost:5029"
    
};

export const getHero = () => {


let endpoint ='/hero'

let response = axios.get(api.baseUrl + endpoint)
.then( res => {
  
    return res.data
})

.catch(() => {
    console.log("FEJL");
    return null;

  });

  return response;

}

export const getSection = () => {


    let endpoint ='/about'

    let response = axios.get(api.baseUrl + endpoint)
    .then( res => {
    
        return res.data
    })

    .catch(() => {
        console.log("FEJL");
        return null;

    });

    return response;

}

export const getRecommendation = () => {

    let endpoint ="/recommendation"

    let response = axios.get(api.baseUrl + endpoint)
    .then(res => {

        return res.data
    })

    .catch(() => {
        console.log("FEJL");
        return null
    });

    return response;
} 

export const getTeam = () => {

    let endpoint ="/team"

    let response = axios.get(api.baseUrl + endpoint)
    .then( res => {
        
        return res.data
    })

    .catch((noData) => {
        console.log("FEJL");
        return null
    });

    return response;

}

export const getFooter = () => {

    let endpoint ="/footer"

    let response = axios.get(api.baseUrl + endpoint)
    .then( res => {
        
        return res.data
    })

    .catch((noData) => {
        console.log("FEJL");
        return null
    });

    return response;

}

export const getTreatment = () => {

    let endpoint ="/treatment"

    let response = axios.get(api.baseUrl + endpoint)
    .then( res => {
        
        return res.data
    })

    .catch((noData) => {
        console.log("FEJL");
        return null
    });

    return response;

}
export const postLogin = (email, password, setSuccess) => {

    
let endpoint ="/login/login"
    
    const response = axios.post(api.baseUrl + endpoint, {email, password})
    .then( res =>{
        console.log(res.data)
        const admin = res?.data?.admin;
        console.log(admin)
        setSuccess(admin)
      })
      .catch((error) =>{
        console.log(error)
        return null
      })

    return response;

}

export const postHome = (title1, title2, content, link) => {

    let endpoint ="/hero/admin"

    const response = axios.post(api.baseUrl + endpoint, {title1, title2, content, link})
    .then(res =>{
        console.log(res.data);
     
  
    })
    .catch((error) => {
        console.log(error)
        return null
    })
    return response;
}



export const postShow = (id) => {

    let endpoint ="/hero/admin/" + (id)

    const response = axios.patch(api.baseUrl + endpoint)
    .then(res =>{
        console.log(res)
     
       
    })
    .catch((error) => {
        console.log(error)
        return null
    })
    return response;
}



 export const deleteHero = (Id) => {

    let endpoint ="/hero/admin/";
    let id = (Id);
    

    const response = axios.delete(api.baseUrl + endpoint + id)
    .then(res =>{
     
    })
 
    .catch((error) => {
        console.log(error)
        return null
    })
    return response;

    

} 


export const getOneHero = (Id) => {

    let endpoint ="/hero/" + (Id);
    
    

    let response = axios.get(api.baseUrl + endpoint)
    .then(res => {

        return res.data
     
    })
 
    .catch((error) => {
        console.log(error)
        return null
    })
    return response;

    

} 


export const putHero = (title1, title2, content, link, id) => {

    let endpoint ="/hero/admin/" + (id)

    const response = axios.put(api.baseUrl + endpoint, {title1, title2, content, link})
    .then(res =>{
        console.log(res.data);
     
  
    })
    .catch((error) => {
        console.log(error)
        return null
    })
    return response;
}