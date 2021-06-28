import "./styles.scss";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "jan",
    pv: 200,
    amt: 2400
  },
  {
    name: "Fev",
    pv: 325,
    amt: 2210
  },
  {
    name: "Mar",
    pv: 153,
    amt: 2290
  },
  {
    name: "Abr",
    pv: 428,
    amt: 2000
  },
  {
    name: "Mai",
    pv: 381,
    amt: 2181
  },
  {
    name: "Jun",
    pv: 211,
    amt: 2500
  },
  {
    name: "Jul",
    pv: 183,
    amt: 2100
  }
];

export default function App() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="35%" stopColor="#4AED88" stopOpacity={1} />
              <stop offset="100%" stopColor="#ffffff00" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="5 20" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#4AED88"
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}