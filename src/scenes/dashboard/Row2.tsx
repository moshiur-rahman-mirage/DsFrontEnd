import { Boxheader } from "@/components/Boxheader";
import Dashboardbox from "@/components/Dashboardbox";
import { useGetKpisQuery, useGetProductsQuery } from "@/states/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Row2 = () => {
  const { palette } = useTheme();
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  // console.log(productData);
  console.log(operationalData);
  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3).toUpperCase(),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);
  return (
    <>
      <Dashboardbox gridArea="d">
        <Boxheader
          title="Profit vs Revenue"
          subtitle="Top line represents revenue, Bottom line represent Profit"
          sidetext="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 30,
              left: -10,
              bottom: 60,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis dataKey="name" style={{ fontSize: "10px" }} />
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              orientation="left"
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              axisLine={false}
              tickLine={false}
              orientation="right"
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px 0",
              }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Operational Expenses"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Non Operational Expenses"
              stroke={palette.primary[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </Dashboardbox>
      <Dashboardbox gridArea="e"></Dashboardbox>
      <Dashboardbox gridArea="f"></Dashboardbox>
    </>
  );
};

export default Row2;
