import React, { Component } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ReferenceLine,
  ComposedChart,
  Area,
  Bar
} from "recharts";
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
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>AIR</h1>
        </header>
        <h2 style={{ textAlign: "left" }}>TEMPERATURE</h2>
        <LineChart
          width={930}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
           <CartesianGrid strokeDasharray="3 3" stroke="white" />
          <XAxis stroke= "white" dataKey="date" interval={0} tick={{fontSize: 8, fill: 'rgba(0, 0, 0, 0.87)'}}/>
          <YAxis stroke= "white" type="number" domain={[0,30]}  tick={{fontSize: 8, fill: 'rgba(0, 0, 0, 0.87)'}} fill="none" ticks={[0, 5, 10, 15, 20, 25, 30]}/>
          <Tooltip />
          <ReferenceLine y={15} stroke="green" strokeWidth={2} />
          <Line type="monotone" dataKey="temperature" stroke="black" fill="black" strokeWidth={2} />
        </LineChart>
      </div>
    );
  }
}
export default App;