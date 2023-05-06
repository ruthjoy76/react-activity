import { useState } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);


  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={toggle} onChange={handleToggle} />
      <span className="switch" />
    </label>
  );
}


export default ToggleSwitch;
