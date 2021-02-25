import React, { useEffect } from "react";
import Template from "../onepirate/Home";
import axios from "axios";
import Blog from "../blog/Blog";

function Main() {
  useEffect(async () => {
    await axios
      .get("https://remotive.io/api/remote-jobs")
      .then((res) => {
        console.log(res.data.jobs);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Blog />
    </div>
  );
}

export default Main;
