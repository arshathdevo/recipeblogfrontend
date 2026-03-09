import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/recipes");
      setRecipes(res.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  const [title, setTitle] = useState("");
const [ingredients, setIngredients] = useState("");
const [instructions, setInstructions] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post("http://localhost:5000/api/recipes", {
      title,
      ingredients,
      instructions,
    });

    // Clear form
    setTitle("");
    setIngredients("");
    setInstructions("");

    // Refresh recipe list
    fetchRecipes();
  } catch (error) {
    console.error("Error adding recipe:", error);
  }
};


  return (
    <div style={{ padding: "20px" }}>
      <h1>Recipe Blog App 🍲</h1>

      {recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <h2>{recipe.title}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
