//jshint esversion:10

import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title,image,calories,ingredients}) => {

    const calo = calories.toFixed(2);

    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
              {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
              ))}
            </ol>
            <p>{calo}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
};

export default Recipe;
