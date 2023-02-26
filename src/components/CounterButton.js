import React, { useState } from "react";

const CounterButton = ({}) => {
  const values = ["None", "Basic", "Advanced", "Complex"];

  const [name, setName] = useState(values[0]);

  const handleIncrement = () => {
    let i = values.indexOf(name);
    const j = i + 1;
    if (i !== 3) {
      setName(values[j]);
    }
  };

  const handleDecrement = () => {
    let i = values.indexOf(name);
    const j = i - 1;
    if (i !== 0) {
      setName(values[j]);
    }
  };

  const getBackground = () => {
    if (name === "None") {
      return "lightgray";
    }
    if (name === "Basic") {
      return "#91D4A8";
    }
    if (name === "Advanced") {
      return "#E9BE74";
    }
    if (name === "Complex") {
      return "#F57F6C";
    }
  };

  return (
    <div>
      <div
        style={{
          //   width: "180px",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          //   alignContent: "baseline",
          borderRadius: "100px",
          background: "white",
          height: "35px",
        }}
      >
        <button
          onClick={handleDecrement}
          style={{
            border: "none",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            padding: "0 10px",
          }}
          className="bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-dash"
            viewBox="0 0 16 16"
          >
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
          </svg>
        </button>
        <span
          style={{
            // background: "#F57F6C",
            background: getBackground(),
            width: "200px",
            textAlign: "center",
            height: "100%",
            paddingTop: "5px",
            borderRadius: "50px",
            // fontWeight: "bold",
          }}
        >
          {name}
        </span>
        <button
          onClick={handleIncrement}
          style={{
            border: "none",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            padding: "0 10px",
          }}
          className="bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CounterButton;
