import React from "react";

export default function TerminalItem({ id, title, desc, onRemove }) {
  return (
    <div className="terminal__item">
      <div>
        <h3 className="title">{title}</h3>
        <span className="description">{desc}</span>
      </div>
      <button onClick={onRemove}>&#10006;</button>
    </div>
  );
}
