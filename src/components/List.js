import React from "react";
import "../styles/List.css";
import Item from "./Item";

export default function List({
  items,
  splitArray,
  onAddItem,
  onDeleteItem,
  name,
  setName,
  onSplit,
  bill,
  sugardaddy,
  splitCount,
}) {
  return (
    <div className="list">
      <form onSubmit={onAddItem}>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn" onClick={onAddItem}>
          Add friend
        </button>
      </form>
      <div className="items">
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onSplit={onSplit}
            bill={bill}
            sugardaddy={sugardaddy}
            splitCount={splitCount}
            splitArray={splitArray}
          />
        ))}
      </div>
    </div>
  );
}
