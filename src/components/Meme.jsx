import React, { useState, useEffect } from "react";
import "../componentCss/meme.css";
import "../memesData";
import memesData from "../memesData";

function Meme() {
  const [allMemes, setAllMemes] = useState({})

  const fetchData = () => {(
       fetch("https://api.imgflip.com/get_memes")
          .then((response) => response.json())
          .then((data) => setAllMemes(data.data.memes))

  )}

useEffect(() => {
  fetchData();
}, [])
   
 
  console.log("this is all meme",allMemes);
 





  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(e){
        e.preventDefault
        const {name, value} = e.target
        setMeme(prev =>({
          ...prev,
          [name] : value
        }))

        
  }

  






 


  const data = allMemes;
  let randomNum = Math.floor(Math.random() * data.length);
  const [url, setUrl] = useState("");
  
  function getMeme(e) {
    e.preventDefault();
    setUrl((prevUrl) => (prevUrl = data[randomNum].url));
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <form className="form">
        <input
         type="text"
         placeholder="Top text" 
         className="form-input"
         name="topText"
         onChange={handleChange}
         value={meme.topText}
        />
        <input 
          type="text" 
          placeholder="Bottom text" 
          className="form-input"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText} 
        />
        <button className="form-button" onClick={getMeme}>
          Get a new meme image
        </button>
      </form>
      <div className="meme-img-cont">
        <img src={meme.randomImage} alt="meme img" className="meme-img" />
        <h2 className="topText" >{meme.topText}</h2>
        <h2 className="bottomText">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
