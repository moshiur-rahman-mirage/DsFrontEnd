import Dashboardbox from "@/components/Dashboardbox";
import React from "react";

type Props = {};

const Row3 = (props: Props) => {
  return (
    <>
      <Dashboardbox gridArea="g"></Dashboardbox>
      <Dashboardbox gridArea="h"></Dashboardbox>
      <Dashboardbox gridArea="i"></Dashboardbox>
      <Dashboardbox gridArea="j"></Dashboardbox>
    </>
  );
};

export default Row3;
