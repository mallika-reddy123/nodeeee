import { useEffect } from "react";
import { useState } from "react";
import Component1 from "../component1";
const Blogitem = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [start, setStart] = useState(null);

  const fetchData = async () => {
    const data = await fetch("https://apis.ccbp.in/blogs");
    const response = await data.json();

    setStart(response);
  };

  return (
    <div>
      <p>Counter</p>
      {start?.map((each) => (
        <Component1 each={each} key={each.id}/>
      ))}
    </div>
  );
};
export default Blogitem;
