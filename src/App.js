import React from "react";
import "./App.css";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Brush,
  Line,
  ReferenceLine
} from "recharts";

import shiso from "./components/lettuce.json";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>AIR</h1>
      </header>
      <h2 style={{ textAlign: "left" }}>TEMPERATURE</h2>
      <ResponsiveContainer
        className="chart-container"
        width={"90%"}
        height={400}
      >
        <LineChart data={shiso}>
          <XAxis
            stroke="#DDE0E3"
            dataKey="timestamp"
            height={50}
            domain={["dataMin", "dataMax"]}
            //interval={0}
            tick={{
              transform: "translate(-30, 0)",
              fontFamily: "Roboto",
              textAlign: "right",
              lineHeight: "10px",
              fontSize: 10,
              fill: "#A3A3A3"
            }}
          />
          <YAxis
            stroke="#DDE0E3"
            type="number"
            domain={["dataMin", "dataMax"]}
            //domain={[0, 30]}
            tick={{
              transform: "translate(-20, 0)",
              fontFamily: "Open Sans",
              fontSize: 10,
              fill: "#666666"
            }}
            fill="none"
            ticks={[10, 15, 20, 25, 30]}
          />
          <Tooltip />
          <ReferenceLine y={20} stroke="#6F9C67" strokeWidth={2} />
          <ReferenceLine y={15} stroke="#9C5256" strokeWidth={2} />
          <ReferenceLine y={25} stroke="#9C5256" strokeWidth={2} />
          <Line
            type="monotone"
            name="Temperature"
            unit={"°C"}
            dataKey="temp"
            stroke="#000000"
            fill="#000000"
            strokeWidth={2}
          />

          <Brush
            className="range-bar"
            //fill="#73ABD7"
            startIndex={0}
            endIndex={50}
            stroke="#73ABD7"
            width={"90%"}
            height={20}
            travellerWidth={15}
            gap={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default App;
