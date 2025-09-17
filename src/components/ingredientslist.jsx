export default function IngredientsList(props){
    
    const ingredientsList=props.ingredients.map(ing=>(
        <li key={ing}>{ing}</li>
    ))
    return(
        <section className="ingredients">
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list">{ingredientsList}</ul>
                {props.ingredients.length >3 &&<div className="get-recipe">
                    <div>
                        <h3>What’s cooking today?</h3>
                        <p>Turn your ingredients into a tasty dish</p>
                    </div>
                <button onClick={props.getRecipe}>Get a recipe</button>
                </div>}
        </section>
    )
}