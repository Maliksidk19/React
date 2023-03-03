import React, { useState } from "react";

const style = {
  textAlign: "center",
};
const Sidebar = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  return (
    <>
      <h1 style={style}>Welcome to Class Component</h1>
      <p>Current Time is: {time}</p>
    </>
  );
};

export default Sidebar;
