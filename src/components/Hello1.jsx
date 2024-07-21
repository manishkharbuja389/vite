// const name = "Manish";
// function Hello1(props) {
//   console.log(props);
//   const { name, message } = props;
//   return (
//     <div>
//       <h1>
//         {message} {name}
//       </h1>
//     </div>
//   );
// }

// function Hello1({ name, message, days }) {
//   return (
//     <div>
//       <h1>
//         {message} {name} {days}
//       </h1>
//     </div>
//   );
// }

// function Hello1(props) {
//   return (
//     <div>
//       <h1>
//         {props.person.message} {props.person.name} {props.person.days}
//       </h1>
//     </div>
//   );
// }
// Destructuring props
function Hello1(person) {
  return (
    <div>
      <h1>
        {person.message} {person.name} {person.days}
      </h1>
    </div>
  );
}
export default Hello1;
