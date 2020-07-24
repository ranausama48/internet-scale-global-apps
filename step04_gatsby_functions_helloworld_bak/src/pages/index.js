import React, {useEffect, useState} from "react"

export default function Home() {
//  const [mydata, setData] = useState("Default Hello");
/** 
  useEffect(() => {
    console.log("useEffect Called");
    fetch(`/.netlify/functions/hello?name=from Serverless Function`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log("Data: " + JSON.stringify(data));
        
      });
  }, []);*/

  return <div>
    <div>The message from netlify function:</div>
    
    </div>
}
