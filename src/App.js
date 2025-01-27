import { useState } from "react";
import "./App.css";

function App() {
  //state
  const [checked, setChecked] = useState(true);

  // comportements
  const toggelCheck = () => {
    setChecked(!checked);
  };

  // render ( affichage)
  return (
    <form>
      <h1>COMMANDE</h1>
      <p>
        Valider la prise de commande
        <input type="checkbox" checked={checked} onChange={toggelCheck} />
        <h2>terrasse</h2>
      </p>
      {checked && <button>table 1</button>}
      {checked && <button>table 2</button>}
      {checked && <button>table 3</button>}

      <h2>salle principal</h2>
      {checked && <button>table 4</button>}
      {checked && <button>table 5</button>}
      {checked && <button>table 6</button>}
      {checked && <button>table 7</button>}
      {checked && <button>table 8</button>}
      <h2>salle coin cuisine</h2>
      {checked && <button>table 9</button>}
      {checked && <button>table 10</button>}
      {checked && <button>table 11</button>}
      {checked && <button>table 12</button>}
      {checked && <button>table 13</button>}
    </form>
  );
  // A FAIRE UN PLAN VUE DE HAUT DES TABLE DU RESTAURANT QUI SILUMIBE AU ONCLICK
  // <button onClick={reset} type="button">
  //   suppr
  // </button>  "btn de reset"
}

export default App;
