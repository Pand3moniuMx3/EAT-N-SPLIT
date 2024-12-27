import React from "react";
import "../styles/Panel.css";

export default function Panel({
  splitArray,
  onDeleteSplit,
  bill,
  setBill,
  balance,
  sugardaddy,
  setSugardaddy,
}) {
  return (
    <div className="panel">
      <h2>Bill info</h2>
      <form>
        <div className="input-wrapper">
          <b>Total bill</b>
          <input
            type="text"
            placeholder="enter bill"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <b>Who's paying</b>
          <select
            value={sugardaddy}
            onChange={(e) => setSugardaddy(e.target.value)}
          >
            <option value={"You"}>You</option>
            {splitArray.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </form>
      <h2>Split</h2>
      <form>
        <div className="input-wrapper">
          <b>Your expense</b>
          <input type="text" value={balance} readOnly />
        </div>
        {splitArray.map((friend) => (
          <div className="split-wrapper" key={friend.id}>
            <b>{friend.name} due</b>
            <div className="inner-wrapper">
              <input type="text" value={balance} readOnly />
              <img
                src="/images/close-icon.svg"
                alt="delete split"
                onClick={() => onDeleteSplit(friend.name)}
              />
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}
