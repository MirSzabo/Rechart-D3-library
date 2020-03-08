import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Brush,
  Legend,
  Line,
  ReferenceLine,
  ComposedChart,
  Area,
  Bar
} from "recharts";

import shiso from "./components/lettuce.json";

const data = [
  {
    date: "22.01.2020",
    temperature: 10
  },
  {
    date: "23.01.2020",
    temperature: 5
  },
  {
    date: "24.01.2020",
    temperature: 25
  },
  {
    date: "25.01.2020",
    temperature: 15
  },
  {
    date: "26.01.2020",
    temperature: 18
  },
  {
    date: "27.01.2020",
    temperature: 19
  },
  {
    date: "28.01.2020",
    temperature: 5
  },
  {
    date: "29.01.2020",
    temperature: 0
  },
  {
    date: "30.01.2020",
    temperature: 20
  },
  {
    date: "31.01.2020",
    temperature: 23
  },
  {
    date: "01.02.2020",
    temperature: 30
  },
  {
    date: "02.02.2020",
    temperature: 15
  },
  {
    date: "03.02.2020",
    temperature: 9
  },
  {
    date: "04.02.2020",
    temperature: 3
  },
  {
    date: "05.02.2020",
    temperature: 7
  }
];

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>AIR</h1>
      </header>
      <h2 style={{ textAlign: "left" }}>TEMPERATURE</h2>
      <ResponsiveContainer width={"100%"} height={400}>
        <LineChart
          data={shiso}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            stroke="white"
            dataKey="timestamp"
            domain={["dataMin", "dataMax"]}
            //interval={0}
            tick={{ fontSize: 8, fill: "rgba(0, 0, 0, 0.87)" }}
          />
          <YAxis
            stroke="white"
            type="number"
            domain={["dataMin", "dataMax"]}
            //domain={[0, 30]}
            tick={{ fontSize: 8, fill: "rgba(0, 0, 0, 0.87)" }}
            fill="none"
            ticks={[15, 20, 25]}
          />
          <Tooltip />
          <ReferenceLine y={20} stroke="#6F9C67" strokeWidth={2} />
          <ReferenceLine y={18} stroke="#9C5256" strokeWidth={2} />
          <ReferenceLine y={24} stroke="#9C5256" strokeWidth={2} />
          <Line
            type="monotone"
            name="Temperature"
            unit={"°C"}
            dataKey="temp"
            stroke="black"
            fill="black"
            strokeWidth={2}
          />
          <Brush fill="#EBECF0" stroke="#73ABD7" width={"100%"} height={20} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default App;
