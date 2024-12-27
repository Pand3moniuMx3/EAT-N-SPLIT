import React, { useEffect, useState } from "react";
import "../styles/App.css";
import List from "./List";
import Panel from "./Panel";

function App() {
  // list logic
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("item-array");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  useEffect(() => {
    localStorage.setItem("item-array", JSON.stringify(items));
  }, [items]);

  // panel split logic
  const [splitArray, setSplitArray] = useState([]);

  function handleSplitting(item) {
    const randomId = () => Math.floor(10000 + Math.random() * 90000);

    const newSplit = {
      id: randomId(),
      name: item.name,
    };

    setSplitArray((splitArray) => [...splitArray, newSplit]);
  }

  function handleDeleteSplit(name) {
    setSplitArray((splitArray) =>
      splitArray.filter((split) => split.name !== name)
    );
  }

  // balance
  const [bill, setBill] = useState(null);
  const divider = splitArray.length + 1;
  const balance = bill === 0 ? bill : bill / divider;

  // sugardaddy logic
  const [sugardaddy, setSugardaddy] = useState("You");

  // list functions

  const [name, setName] = useState("");

  function handleAddItem(e) {
    e.preventDefault();

    const randomId = () => Math.floor(100000 + Math.random() * 900000);

    const newItem = {
      id: randomId(),
      name: name,
      image: `https://i.pravatar.cc/48?u=${randomId()}`,
      balance: `Owes ${sugardaddy} ${balance} PLN`,
      paid: false,
    };

    setItems((items) => [...items, newItem]);

    setName("");
  }

  function handleDeleteItem(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this person from your list?"
    );

    if (confirmed) setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <section className="app">
      <div className="container">
        <List
          items={items}
          splitArray={splitArray}
          onAddItem={handleAddItem}
          onDeleteItem={handleDeleteItem}
          name={name}
          setName={setName}
          onSplit={handleSplitting}
          bill={bill}
          sugardaddy={sugardaddy}
          splitCount={splitArray.length}
        />
        <Panel
          splitArray={splitArray}
          onDeleteSplit={handleDeleteSplit}
          bill={bill}
          setBill={setBill}
          balance={balance}
          sugardaddy={sugardaddy}
          setSugardaddy={setSugardaddy}
        />
      </div>
    </section>
  );
}

export default App;
