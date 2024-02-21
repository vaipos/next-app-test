import { useState } from "react";
interface props {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}
// props will be the given arguments to each component
function ListGroup({ items, title, onSelectItem }: props) {
  const exists = (x: number) => (x === 0 ? <p>No items</p> : null);

  const [clickIndex, updater] = useState(-1);

  return (
    <>
      <h1>{title}</h1>
      {exists(items.length)}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              clickIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // Since 'clicked' is a event handler it doesn't need to be a function
            onClick={() => {
              updater(index);
              onSelectItem(item);
            }} // I am providing the onclick event as the argument because onClick provides the event
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
