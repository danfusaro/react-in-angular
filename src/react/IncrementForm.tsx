import * as React from "react";
import { FunctionComponent, useState } from "react";

import "./IncrementForm.scss";

interface Props {
  counter: number;
  onClick?: (increment: number) => void;
}

export const IncrementForm: FunctionComponent<Props> = (props: Props) => {
  const [increment, setIncrement] = useState(1);
  const { counter: propsCounter, onClick } = props;

  const handleClick = () => {
    if (onClick) {
      onClick(increment);
    }
  };

  return (
    <div className={`my-graph-component`}>
      <div className={"comp-props"}>
        Props counter: {propsCounter}
        <button
          disabled={!increment}
          style={{ opacity: increment ? 1 : 0.5 }}
          onClick={handleClick}
          className={"increase-button"}
        >
          Click to {increment >= 0 ? "add" : "subtract"} {Math.abs(increment)}
        </button>
      </div>
      <div className={"comp-state"}>
        Increment:{" "}
        <input
          type="number"
          min={-10}
          max={10}
          onChange={(e) => setIncrement(parseInt(e.target.value, 10) || 0)}
          defaultValue={increment}
        ></input>
      </div>
    </div>
  );
};
