import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Chart from "./components/Chart/Chart";
import { listApi } from "./components/api";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [size, setSize] = useState(data.length);
  const [count, setCount] = useState(0);
  const [currData, setCurrData] = useState([]);

  const fetchList = async () => {
    const response = await listApi();
    setList(response);
    setLoading(false);
  };
  useEffect(() => {
    fetchList();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        alignContent="center"
        marginLeft={10}
        marginRight={10}
      >
        <Grid item xs={8}>
          <Header
            list={list}
            data={data}
            setCurrData={setCurrData}
            setData={setData}
            setCount={setCount}
            setSize={setSize}
          />
          <List data={currData} />
        </Grid>

        <Grid item xs={4}>
          <Chart size={size} count={count} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
