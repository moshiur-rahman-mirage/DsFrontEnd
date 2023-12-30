import Dashboardbox from "@/components/Dashboardbox";
import React from "react";

type Props = {};

const Row2 = (props: Props) => {
  return (
    <>
      <Dashboardbox gridArea="d"></Dashboardbox>
      <Dashboardbox gridArea="e"></Dashboardbox>
      <Dashboardbox gridArea="f"></Dashboardbox>
    </>
  );
};

export default Row2;
