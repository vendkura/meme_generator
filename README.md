# Meme Generator

This project is a Meme Generator built with React. It allows users to create memes by selecting a random meme image and adding custom text to it. This project is part of a React learning journey and aims to provide a fun and interactive way to learn React concepts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [API](#api)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, clone the repository and install the dependencies:

```sh
git clone https://github.com/your-username/meme_generator.git
cd meme_generator
npm install
```
# Usage
To run the project locally, use the following command:
```sh
npm start
```
# Project Structure
The project has the following structure:
```
.gitignore
package.json
public/
    images/
    index.html
    manifest.json
    robots.txt
README.md
src/
    App.css
    App.js
    App.test.js
    boxes_source.js
    components/
        Box.js
        Form.js
        FormChallenge.js
        Header.js
        Meme.js
        memesData.js
    index.css
    index.js
    reportWebVitals.js
    setupTests.js
```
# Components
## Header
The Header component displays the header of the application, including an image and titles.
```js
import React from "react";
export default function Header() {
    return (
        <header className="header">
            <img src="./images/TrollFace.jpg" alt="TrollFace" className="header--image" />
            <h2 className="header--title">Header component</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    );
}
```

## Meme
The Meme component allows users to generate a meme by selecting a random image and adding custom text.
```js
import React from "react";
import memesData from "./memesData";

export default function Meme() {
    const [allMemes, setAllMemes] = React.useState([]);
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes));
    }, []);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

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
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Meme_Image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
```
# API
The project uses the following APIs:

- Imgflip API: Used to fetch meme images.

# Styling
The project uses CSS for styling. The main styles are defined in src/App.css and src/index.css.

Example styles from src/App.css:
```css
.header--image {
  height: 100%;
  margin-right: 6px;
}
.header--title {
  font-size: 1.25rem;
  margin-right: auto;
}
.header--project {
  font-size: 0.75rem;
  font-weight: 500;
}
.form {
  display: grid;
  grid-template: 40px 40px / 1fr 1fr;
  gap: 17px;
  margin-bottom: 17px;
}
.form--input {
  font-family: "Karla", sans-serif;
  border-radius: 5px;
  border: 1px solid #D5D4D8;
  text-indent: 5px;
}
.form--button {
  grid-column: 1 / -1;
  font-family: "Karla", sans-serif;
  border-radius: 5px;
  background: linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%);
  color: white;
  border: none;
  cursor: pointer;
}
.meme {
  position: relative;
}
.meme--image {
  max-width: 100%;
}
```

# Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.