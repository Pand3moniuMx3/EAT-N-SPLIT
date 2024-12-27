import React from "react";
import "../styles/Item.css";

export default function Item({
  item,
  onDeleteItem,
  onSplit,
  bill,
  sugardaddy,
  splitCount,
  splitArray,
}) {
  const balance = bill ? bill / (splitCount + 1) : 0;

  const isPaying = splitArray.some((split) => split.name === item.name);

  return (
    <div className="item">
      <div className="img-wrapper">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="info-wrapper">
        <b onClick={() => onSplit(item)}>{item.name}</b>
        <p>
          {item.name === sugardaddy
            ? `You owe ${item.name} ${balance} PLN`
            : isPaying
            ? `Owes ${sugardaddy} ${balance} PLN`
            : "Not paying"}
        </p>
      </div>
      <button
        className="btn"
        onClick={() => onDeleteItem(item.id)}
        style={{ aspectRatio: "1" }}
      >
        <img src="/images/close-icon.svg" alt="delete person" />
      </button>
    </div>
  );
}
