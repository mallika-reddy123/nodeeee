import "./index.css";
import { useState } from "react";

const Conditional = () => {
  const [isLoggin, setLogin] = useState(true);

  return (
    <div className="container">
      <h1>Hello</h1>

      {isLoggin && (
        <button className="login-btn" type="button">
          Login
        </button>
      )}
    </div>
  );
};

export default Conditional;
