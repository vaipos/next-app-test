import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  let [value, activate] = useState(-1);
  let [val, yuh] = useState(1000);
  const eventHandler = (item: string) => {
    console.log(item);
  };
  const cities = ["dallas", "frisco", "plano", "richardson", "san antonio"];
  return (
    <>
      <div>
      
        <ListGroup items={cities} title="Cities" onSelectItem={eventHandler} />
      </div>
      <div>{value === 1 ? <Alert onClick= {() => activate(0)}>Ayo!</Alert> : null}</div>
      <div>
        <Button onClick={() => activate(1)}>Info</Button>
      </div>
    </>
  );
}
export default App;
