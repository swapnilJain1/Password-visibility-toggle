import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="App">
      <h1>Login</h1>
      <input type="text" placeholder="User Name" />
      <input type={isShown ? "text" : "password"} placeholder="Password" />
      <button className="icon" onClick={() => setIsShown(!isShown)}>
        {!isShown ? "😃" : "😵"}
      </button>
      <button>Login</button>
    </div>
  );
}
