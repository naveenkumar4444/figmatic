import { useEffect, useState } from "react";
import "../App.css";

import CounterButton from "../components/CounterButton";

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-info-circle"
    viewBox="0 0 16 16"
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
  </svg>
);

const Main = () => {
  // const [data, setData] = useState([
  //   {
  //     name: "Home",
  //     mode: "None",
  //     design: 0,
  //     ia: 0,
  //     interaction: 0,
  //   },
  //   {
  //     name: "Service",
  //     mode: "None",
  //     design: 0,
  //     ia: 0,
  //     interaction: 0,
  //   },
  //   {
  //     name: "About Us",
  //     mode: "None",
  //     design: 0,
  //     ia: 0,
  //     interaction: 0,
  //   },
  //   {
  //     name: "Partners",
  //     mode: "None",
  //     design: 0,
  //     ia: 0,
  //     interaction: 0,
  //   },
  //   {
  //     name: "Contact Us",
  //     mode: "None",
  //     design: 0,
  //     ia: 0,
  //     interaction: 0,
  //   },
  // ]);

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      const local = window.localStorage.getItem("figmatic");

      if (local) {
        // console.log(JSON.parse(local));
        setData(JSON.parse(local));
      } else {
        setData([
          {
            name: "Home",
            design: 0,
            ia: 0,
            interaction: 0,
          },
          {
            name: "Service",
            design: 0,
            ia: 0,
            interaction: 0,
          },
          {
            name: "About Us",
            design: 0,
            ia: 0,
            interaction: 0,
          },
          {
            name: "Partners",
            design: 0,
            ia: 0,
            interaction: 0,
          },
          {
            name: "Contact Us",
            design: 0,
            ia: 0,
            interaction: 0,
          },
        ]);
      }
    };
    return getData();
  }, []);

  return (
    <div>
      <div className="table-responsive">
        <table
          className="table table-borderless"
          // className="table"
          style={{
            height: "90vh",
            overflow: "scroll",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  fontSize: "65px",
                }}
              >
                {data.length}
                <sub
                  style={{
                    fontSize: "13px",
                  }}
                >
                  Pages
                </sub>
              </th>
              <td>
                <span>
                  ${data.reduce((sum, { design }) => sum + design, 0)}
                </span>
                <br />
                <span>Page Design</span>
              </td>
              <td>
                <span>${data.reduce((sum, { ia }) => sum + ia, 0)}</span>
                <br />
                <span>Interactions & Animations</span>
              </td>
              <td>
                <span>
                  ${data.reduce((sum, { interaction }) => sum + interaction, 0)}
                </span>
                <br />
                <span>CMS / Dynamic Data / Intagrations</span>
              </td>
              <th>
                <span>Sub Total</span>
                <br />
                <span
                  style={{
                    fontSize: "50px",
                  }}
                >
                  $
                  {data.reduce(
                    (sum, { design, ia, interaction }) =>
                      sum + design + ia + interaction,
                    0
                  )}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Pages {icon}</th>
              <th>Design {icon}</th>
              <th>Interactions & Animations {icon}</th>
              <th>Interaction {icon}</th>
              <th
                style={{
                  textAlign: "right",
                }}
              >
                Cost {icon}
              </th>
            </tr>
            {/* <tr>
              <th>01. Home</th>
              <td>
                <CounterButton />
              </td>
              <td>
                <CounterButton />
              </td>
              <td>
                <CounterButton />
              </td>
              <th
                style={{
                  textAlign: "right",
                }}
              >
                $200
              </th>
            </tr>
            <tr>
              <th>02. Service</th>
              <td>
                <CounterButton />
              </td>
              <td>
                <CounterButton />
              </td>
              <td>
                <CounterButton />
              </td>
              <th
                style={{
                  textAlign: "right",
                }}
              >
                $200
              </th>
            </tr>
            <tr>
              <th>03. About Us</th>
              <td>
                <CounterButton />
              </td>
              <td>
                <CounterButton />
              </td>
              <td>
                <CounterButton />
              </td>
              <th
                style={{
                  textAlign: "right",
                }}
              >
                $200
              </th>
            </tr>
            <tr>
              <th>04. Partners</th>
              <td>
                <CounterButton />
              </td>
              <td>
                <CounterButton />
              </td>
              <td>
                <CounterButton />
              </td>
              <th
                style={{
                  textAlign: "right",
                }}
              >
                $200
              </th>
            </tr>
            <tr>
              <th>05. Contact Us</th>
              <td>
                <CounterButton />
              </td>
              <td>
                <CounterButton />
              </td>
              <td>
                <CounterButton />
              </td>
              <th
                style={{
                  textAlign: "right",
                }}
              >
                $200
              </th>
            </tr> */}

            {data.map((d, key) => (
              <tr key={key}>
                <th>
                  {key.toString().length === 2 ? key + 1 : "0" + (key + 1)}.{" "}
                  {d.name}
                </th>
                <td>
                  <CounterButton
                    data={data}
                    setData={setData}
                    obj={d}
                    param="design"
                  />
                </td>
                <td>
                  <CounterButton
                    data={data}
                    setData={setData}
                    obj={d}
                    param="ia"
                  />
                </td>
                <td>
                  <CounterButton
                    data={data}
                    setData={setData}
                    obj={d}
                    param="interaction"
                  />
                </td>
                <th
                  style={{
                    textAlign: "right",
                  }}
                >
                  ${d.design + d.ia + d.interaction}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
