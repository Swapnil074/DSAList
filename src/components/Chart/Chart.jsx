import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);
export const Chart = ({ size, count }) => {
  var Solved = count;
  var Todo = size - count;
  const data = {
    labels: ["Solved", "Todo"],
    datasets: [
      {
        data: [Solved, Todo],
        backgroundColor: ["#5CB85C", "#428BCA"],
        borderColor: ["white", "white"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Box
      style={{
        width: "20vw",
        margin: 50,
        marginTop: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pie data={data} updateMode="normal" />
    </Box>
  );
};

export default Chart;
