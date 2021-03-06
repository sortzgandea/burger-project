import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.module.sass'
import sortIngredients from './sortIngredients'
//import Aux from '../../hoc/Aux'

//const style = {
    //height: '100px',
    //width : '100px',
    //border: '3px solid black'
//}


const burger = (props) => {
    const ingredients = sortIngredients(props.ingredients)
    let ingredientList = []
    for (let [ingredient, times] of Object.entries(ingredients)) {
        for (let i = 0; i<times; i++){
            ingredientList.push(
                <BurgerIngredients key={ingredient+i}type={ingredient}/>
            )
        }
    }
    if(ingredientList.length === 0){
        ingredientList = <div className={classes.fill}>Fill your burger</div>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top'/>
            {ingredientList}
            <BurgerIngredients type='bread-bottom'/>
        </div>
    )
    
}

export default burger
