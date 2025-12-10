// import axios from "axios";
import { getRanran } from "../services/GetService";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../components/UI/card";

export const Random = () => {
const  [data, setData] = useState([]);
// const API = "https://boringapi.com/api/v1/photos"; 


const getRandom = async () => {
    try{ 
        const res = await getRanran();    //if we are not calling function use: axios.get(API);
        console.log(res.data);

        const fetchedData = Array.isArray(res.data) ? res.data : res.data.photos;
        setData(fetchedData);
    }catch( error ){
        console.log("Error fetching data:", error);
    }
}

useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getRandom();
    }

    return () => {
      isMounted = false;
    };
  }, []);
    
  return (
    <>
   
  <ul className="container grid grid-cols-2 ">
    {
    data.map((curElem) => {
        return <Card key={curElem.id}
            randomData={curElem} />;
        })
    }
  </ul>
   </>
  );
};

