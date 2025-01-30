import { useState } from "react";

function Checker() {
  const [checked, setChecked] = useState(true);
  const toggelCheck = () => {
    setChecked(!checked);
  };
}

/* <input type="checkbox" checked={checked} onChange={toggelCheck} />; */
