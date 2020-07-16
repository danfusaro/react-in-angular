import * as React from "react";
import { FunctionComponent, useState } from "react";
import { createUseStyles } from "react-jss";

const radius = 4;
const border = {
  border: "1px solid black",
  borderRadius: radius,
};
// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
  myGraphComponent: {
    ...border,
    filter: "drop-shadow(2px 4px 6px black)",
    backgroundColor: "#1eb4d1",
    border: "1px solid #198aa2",
    display: "inline-block",
    userSelect: "none",
    padding: 20,
  },
  compProps: {
    color: "white",
  },
  increaseButton: {
    ...border,
    backgroundColor: "white",
    marginLeft: 40,
    padding: "4px 6px",
    cursor: "pointer",
    color: "black",
    "&hover": {
      filter: "drop-shadow(2px 4px 6px black)",
    },
  },
  compState: {
    color: "yellow",
    marginTop: 20,
  },
});

interface Props {
  counter: number;
  onClick?: (increment: number) => void;
}

export const IncrementFormJss: FunctionComponent<Props> = (props: Props) => {
  const [increment, setIncrement] = useState(1);
  const { counter: propsCounter, onClick } = props;
  const classes = useStyles();
  const handleClick = () => {
    if (onClick) {
      onClick(increment);
    }
  };

  return (
    <div className={classes.myGraphComponent}>
      <div className={classes.compProps}>
        Props counter: {propsCounter}
        <button
          disabled={!increment}
          style={{ opacity: increment ? 1 : 0.5 }}
          onClick={handleClick}
          className={classes.increaseButton}
        >
          Click to {increment >= 0 ? "add" : "subtract"} {Math.abs(increment)}
        </button>
      </div>
      <div className={classes.compState}>
        <span>Increment: </span>
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
