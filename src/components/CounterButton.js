import React, { useState } from "react";

import "../App.css";

const prices = {
  None: 0, // none
  Basic: 100, // basic
  Advanced: 200, // advanced
  Complex: 300, // complex
};

function getKeyByValue(object, value) {
  // console.log(Object.keys(object).find((key) => object[key] === value));
  return Object.keys(object).find((key) => object[key] === value);
}

const CounterButton = ({ data, setData, obj, param }) => {
  const values = ["None", "Basic", "Advanced", "Complex"];

  const [name, setName] = useState(getKeyByValue(prices, obj[param]));

  // console.log(getKeyByValue(prices, obj[param]));

  const handleIncrement = () => {
    let i = values.indexOf(name);
    const ai = data.findIndex((o) => o.name === obj.name);
    const j = i + 1;
    if (i !== 3) {
      setName(values[j]);
      let mydata = [...data];
      mydata[ai][param] = prices[values[j]];
      // mydata[ai]["mode"] = values[j];
      setData(mydata);
      window.localStorage.setItem("figmatic", JSON.stringify(mydata));
    }
  };

  const handleDecrement = () => {
    let i = values.indexOf(name);
    const ai = data.findIndex((o) => o.name === obj.name);
    const j = i - 1;
    if (i !== 0) {
      setName(values[j]);
      let mydata = [...data];
      mydata[ai][param] = prices[values[j]];
      // mydata[ai]["mode"] = values[j];
      setData(mydata);
      window.localStorage.setItem("figmatic", JSON.stringify(mydata));
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
          className="cbtn bg-white"
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
          className="cbtn bg-white"
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
