// import React, { useEffect, useState } from "react";
// import axios from "axios";


// function App() {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   const fetchRecipes = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/recipes");
//       setRecipes(res.data);
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//     }
//   };
//   const [title, setTitle] = useState("");
// const [ingredients, setIngredients] = useState("");
// const [instructions, setInstructions] = useState("");

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     await axios.post("http://localhost:5000/api/recipes", {
//       title,
//       ingredients,
//       instructions,
//     });

//     // Clear form
//     setTitle("");
//     setIngredients("");
//     setInstructions("");

//     // Refresh recipe list
//     fetchRecipes();
//   } catch (error) {
//     console.error("Error adding recipe:", error);
//   }
// };


//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Recipe Blog App 🍲</h1>

//       {recipes.length === 0 ? (
//         <p>No recipes found</p>
//       ) : (
//         recipes.map((recipe) => (
//           <div
//             key={recipe._id}
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               margin: "10px 0",
//             }}
//           >
//             <h2>Add New Recipe</h2>
// <form onSubmit={handleSubmit}>
//   <input
//     type="text"
//     placeholder="Title"
//     value={title}
//     onChange={(e) => setTitle(e.target.value)}
//   />
//   <br /><br />

//   <input
//     type="text"
//     placeholder="Ingredients"
//     value={ingredients}
//     onChange={(e) => setIngredients(e.target.value)}
//   />
//   <br /><br />

//   <textarea
//     placeholder="Instructions"
//     value={instructions}
//     onChange={(e) => setInstructions(e.target.value)}
//   />
//   <br /><br />

//   <button type="submit">Add Recipe</button>
// </form>

// <hr />

//             <h2>{recipe.title}</h2>
//             <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
//             <p><strong>Instructions:</strong> {recipe.instructions}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default App;
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";



function App() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [editId, setEditId] = useState(null);

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
  const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/recipes/${id}`);
    fetchRecipes(); // refresh list
  } catch (error) {
    console.error("Error deleting recipe:", error);
  }
};
const handleEdit = (recipe) => {
  setTitle(recipe.title);
  setIngredients(recipe.ingredients);
  setInstructions(recipe.instructions);
  setEditId(recipe._id);
};



  return (
    <div className="container">
      <h1>Recipe Blog App 🍲</h1>

      {/* ✅ FORM SHOULD BE OUTSIDE MAP */}
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <br /><br />

        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <br /><br />

        <button type="submit">Add Recipe</button>
      </form>

      <hr />

      {/* ✅ DISPLAY RECIPES */}
      {recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        recipes.map((recipe) => (
         <div key={recipe._id} className="card">

            <h2>{recipe.title}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            
            <button onClick={() => handleDelete(recipe._id)}>
  Delete
</button>

          </div>
        ))
      )}
    </div>
  );
}

export default App;
