import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  //   let messageOne = <h1>This is message 1</h1>;
  //   let messageTwo = <h1>This is message 2</h1>;
  //   const display = true;
  //   if (display) {
  //     return messageOne;
  //   } else {
  //     return messageTwo;
  //   }

  //  To handle the multiple return
  //   let message;
  //   const display = false;
  //   if (display) {
  //     message = <h1>This is message 1</h1>;
  //   } else {
  //     message = <h1>This is message 2</h1>;
  //   }
  //   return message;

  // Using ternary operator
  const display = true;
  return display ? <Welcome /> : <Code />;
  //   return display ? <h1>Message 1</h1> : <h1>Message 2</h1>;

  //   const display = false;
  //   if (display) {
  //     return <Welcome />;
  //   } else {
  //     return <Code />;
  //   }

  //   if (display) {
  //     return (
  //       <div>
  //         <h3>This is conditional statement.</h3>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h3>Code Everyday!</h3>
  //       </div>
  //     );
  //   }
}
