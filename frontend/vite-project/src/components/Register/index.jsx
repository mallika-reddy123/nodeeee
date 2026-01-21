import { useState } from "react";
import "./index.css";
const Resgister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const inputValues = {
      name,
      email,
      password,
      age,
      address,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValues),
    };

    try {
      const response = await fetch("http://localhost:3000/register", options);
      const data = await response.json();

      console.log("Success:", data);
    } catch (error) {
      console.log("Error:", error);
      alert("Server error ❌");
    }

    setName("");
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePass = (event) => {
    setPass(event.target.value);
  };
  const onChangeAge = (event) => {
    setAge(event.target.value);
  };
  const onChangeAdd = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div>
          <input
            className="name-input"
            value={name}
            type="text"
            onChange={onChangeName}
            placeholder="enter you name"
          />
        </div>
        <div>
          <input
            className="name-input"
            type="text"
            value={email}
            onChange={onChangeEmail}
            placeholder="enter tour email"
          />
        </div>
        <div>
          <input
            className="name-input"
            type="password"
            onChange={onChangePass}
            value={password}
            placeholder="enter your pass"
          />
        </div>
        <div>
          <input
            className="name-input"
            type="number"
            value={age}
            onChange={onChangeAge}
            placeholder="enter your age"
          />
        </div>
        <div>
          <input
            className="name-input"
            type="text"
            value={address}
            onChange={onChangeAdd}
            placeholder="enter  your age"
          />
        </div>

        <button className="name-input" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
export default Resgister;
