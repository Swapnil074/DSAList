import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";

const Header = ({ list, data, setData, setSize, setCount, setCurrData }) => {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState("");

  let temp = Object.values(list);
  let topicList = [];
  setData(temp[0]);
  useEffect(() => {
    let tempData = [];
    HandleFilter(tempData);
    setCurrData(tempData);
    setSize(tempData.length);
    countAccepted(tempData);
  }, [status, topic]);

  useEffect(() => {
    let tempData = [];
    HandleTopicSearch(tempData);
    setCurrData(tempData);
    setSize(tempData.length);
    countAccepted(tempData);
  }, [search]);

  useEffect(() => {
    setCurrData(data);
    setSize(data.length);
    countAccepted(data);
  }, [data]);

  for (let i = 0; i < data.length; i++) {
    if (!topicList.includes(data[i].topic) && data[i].topic.length > 0) {
      topicList.push(data[i].topic);
    }
  }

  const countAccepted = (a) => {
    let count = 0;
    a.map((item) => {
      if (item.status) {
        count++;
      }
    });
    setCount(count);
  };
  const HandleFilter = (tempData) => {
    if (status !== "" && topic !== "") {
      console.log("2");
      data.map((item) => {
        if (
          item.status === (status === "1" ? true : false) &&
          item.topic === topic
        ) {
          tempData.push(item);
        }
      });
    } else if (status !== "") {
      data.map((item) => {
        if (item.status === (status === "1" ? true : false)) {
          tempData.push(item);
        }
      });
    } else if (topic !== "") {
      data.map((item) => {
        if (item.topic === topic) {
          tempData.push(item);
        }
      });
    } else {
      data.map((item) => {
        tempData.push(item);
      });
    }
  };

  const HandleTopicSearch = (tempData) => {
    if (search !== "") {
      data.map((item) => {
        if (item.Problem.includes(search)) {
          tempData.push(item);
        }
      });
    } else {
      tempData = data;
    }
  };

  const handleSearch = (e) => {
    if (e.target.firstChild == null) setSearch("");
    else setSearch(e.target.firstChild.data);
    console.log(e);
  };
  const handleTopic = (e) => {
    setTopic(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Stack
      direction="row"
      sx={{ m: 1 }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      alignItems="center"
    >
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Status</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={status}
          label="Status"
          onChange={handleStatus}
        >
          <MenuItem value="">-</MenuItem>
          <MenuItem value="0">Todo</MenuItem>
          <MenuItem value="1">Accepted</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Topic</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={topic}
          label="Age"
          onChange={handleTopic}
        >
          <MenuItem value="">-</MenuItem>
          {topicList.map((topic) => (
            <MenuItem value={topic}>{topic}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Autocomplete
        freeSolo
        sx={{ m: 1, minWidth: 300 }}
        size="small"
        id="free-solo-2-demo"
        onChange={handleSearch}
        value={search}
        options={data.map((option) => (option.Problem ? option.Problem : ""))}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
};

export default Header;
