// const name = "Manish";
// function Hello(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         {props.message} {props.name}
//       </h1>
//     </div>
//   );
// }

export default function Hello(props) {
  console.log(props);
  const name = "manish";
  return (
    <div>
      <h1>I am in frontend calss. {name + " good"}</h1>
      <h1>I am not in class.{props.name}</h1>
    </div>
  );
}
