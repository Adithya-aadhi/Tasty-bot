import React from "react"
import IngredientsList from "./components/IngredientsList"
import Recipe from "./components/Recipe"
import { getRecipeFromMistral } from "./ai"


export default function Form() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. chicken"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button> + Add ingredient</button>
            </form>

            {ingredients.length > 0 && (
                <IngredientsList getRecipe={getRecipe} ingredients={ingredients}/>
            )}
            
            {recipe && <Recipe recipe={recipe}/>}
        </main>
    )
}
