import React, { useEffect } from "react";
import Template from "../onepirate/Home";
import axios from "axios";
import Blog from "../blog/Blog";

function Main() {
  // const fetchData = async () => {
  //   const response = await axios
  //     .get("https://remotive.io/api/remote-jobs?category=software-dev")
  //     .then((res) => console.log(res.data.jobs))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <Blog />
    </div>
  );
}

export default Main;
