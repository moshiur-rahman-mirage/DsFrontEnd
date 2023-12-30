import Dashboardbox from "@/components/Dashboardbox";
import { useGetKpisQuery } from "@/states/api";
import React from "react";

type Props = {};
 
const Row1 = (props: Props) => {
    const {data}=useGetKpisQuery();
  return (
    <>
      <Dashboardbox gridArea="a"></Dashboardbox>
      <Dashboardbox gridArea="b"></Dashboardbox>
      <Dashboardbox gridArea="c"></Dashboardbox>
    </>
  );
};

export default Row1;
