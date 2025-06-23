import React, { useEffect } from "react";

const Trigger = ({ setLoading }) => {
    console.log("trigger");
  useEffect(() => {
    setLoading(true);
 
  }, [setLoading]);

  return null;
};

export default Trigger;