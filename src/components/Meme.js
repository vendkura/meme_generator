import React from "react"
import memesData from "./memesData"

export default function Meme() {
    // const [memesUrl,setMemesUrl] = React.useState("http://i.imgflip.com/1bij.jpg");
    
    const [allMemes, setAllMemes] = React.useState([]);


    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res =>res.json())
        .then(data =>setAllMemes(data.data.memes))
    },[])
    

    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
  


    function getMemeImage(){
        const memesArray = allMemes;
        const randomNumber =  Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        
        setMeme((prevState)=>({
            ...prevState,
            randomImage:url
        }))
    }

   function handleChange(event){
    const {name, value}= event.target
    setMeme((prevState)=>{
        return{
            ...prevState,
            [name]:value
        }
    })
   }

  

  /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */

  /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */
    return (
        <main>
           <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}

                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>

            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Meme_Image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}