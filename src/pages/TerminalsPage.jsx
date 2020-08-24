import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTerminal, addTerminals } from "../state/action/terminals";
import TerminalItem from "../components/TerminalItem";

import "../style/terminal.scss";

export default function TerminalsPage() {
  const [item, setItem] = React.useState({
    title: "",
    desc: "",
  });
  const dispatch = useDispatch();
  const { terminals } = useSelector(({ terminals }) => {
    return {
      ...terminals,
    };
  });

  const onChengeHandler = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const removeHandler = (id) => {
    dispatch(removeTerminal(id));
  };

  const addItemHandler = (e) => {
    if (item.title && item.desc) {
      dispatch(
        addTerminals({
          ...item,
          id: Date.now(),
        })
      );
      setItem({
        title: "",
        desc: "",
      });
    }
  };

  return (
    <div className="terminal">
      <div className="terminal__title">
        <h1>Terminals</h1>
      </div>
      <div className="terminal__add-item">
        <label className="title">
          <span>Title: </span>
          <input
            type="text"
            name="title"
            value={item.title}
            onChange={onChengeHandler}
          />
        </label>
        <label className="desc">
          <span>Description: </span>
          <input
            type="text"
            name="desc"
            value={item.desc}
            onChange={onChengeHandler}
          />
        </label>
      </div>
      <button className="btn" onClick={addItemHandler}>
        Add new terminal
      </button>
      <hr />
      <div className="terminal__items">
        {!terminals
          ? "No terminals"
          : terminals.map((item) => (
              <TerminalItem
                key={item.id}
                {...item}
                onRemove={removeHandler.bind(null, item.id)}
              />
            ))
        }
      </div>
    </div>
  );
}
