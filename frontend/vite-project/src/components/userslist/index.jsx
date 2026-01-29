// const userDetailsList = [
//   {
//     uniqueNo: 1,
//     imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
//     name: "Esther Howard",
//     role: "Software Developer",
//   },
//   {
//     uniqueNo: 2,
//     imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
//     name: "Floyd Miles",
//     role: "Software Developer",
//   },
//   {
//     uniqueNo: 3,
//     imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
//     name: "Jacob Jones",
//     role: "Software Developer",
//   },
//   {
//     uniqueNo: 4,
//     imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png",
//     name: "Devon Lane",
//     role: "Software Developer",
//   },
// ];
// const Users=()=>{
//     return(
//         <div>
//             <h1>hello world</h1> 
//             {
//                 userDetailsList.map((each)=>(

//                 ))
//             }
//         </div>
//     )
// } 
// export default Users 






import Users from "../users";
import { useState } from "react";
const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png",
    name: "Devon Lane",
    role: "Software Developer",
  },
];

const UsersList = () => {
  const [values, setValues] = useState("");
  const [initialList, setInitialList] = useState(userDetailsList);

  const onChangeValue = (event) => {
    setValues(event.target.value);
  };

  const filteredArray = initialList.filter((each) =>
    each.name.toLowerCase().includes(values.toLowerCase()),
  );

  const deletedItem = (id) => {
    const filt = filteredArray.filter((each) => each.uniqueNo !== id);

    setInitialList(filt);
    setValues("");
  };

  console.log(initialList);

  return (
    <div>
      <input
        placeholder="Search here ..."
        type="text"
        onChange={onChangeValue}
        value={values}
      />
      {filteredArray.map((each) => (
        <Users usersList={each} key={each.uniqueNo} deletedItem={deletedItem} />
      ))}
    </div>
  );
};
export default UsersList;
 



