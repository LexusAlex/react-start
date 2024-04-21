import {useEffect, useState} from "react";
import data from "bootstrap/js/src/dom/data";

export default function Application3()
{
  let [dogImage, setDogImage] = useState(null);

   useEffect(async () => {
     await fetch('https://fakerapi.it/api/v1/addresses') // url адрез запроса
       .then((res) => {
         return res.json();
       }).then((res) => {
         console.log(res);
       setDogImage(() => {res.json()});
     })
   },[]);

  return (
    <></>
  )
}
