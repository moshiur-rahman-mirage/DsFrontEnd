import { Boxheader } from "@/components/Boxheader";
import Dashboardbox from "@/components/Dashboardbox";
import FlexBetween from "@/components/FlexBetween";
import { useGetKpisQuery, useGetProductsQuery } from "@/states/api";
import { Box, Typography, useTheme } from "@mui/material";
import { gridTabIndexCellSelector } from "@mui/x-data-grid";
import { useMemo } from "react";
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];
const Row2 = () => {
  const { palette } = useTheme();
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  // console.log(productData);
  console.log(operationalData);
  const pieColors = [palette.primary[800], palette.primary[300]];
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
      <Dashboardbox gridArea="e">
        <Boxheader
          title="Profit vs Revenue"
          subtitle="Top line represents revenue, Bottom line represent Profit"
          sidetext="+4%"
        />
        <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 20,
            }}
          >
            <Pie
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales</Typography>
            <Typography m="0.3rem" variant="h3" color={palette.primary[300]}>83</Typography>
            <Typography variant="h6">
              Finance goal of the campaign that is desired
            </Typography>
          </Box>
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales</Typography>
            <Typography m="0.3rem" variant="h3" color={palette.primary[300]}>83</Typography>
            <Typography variant="h6">
              Finance goal of the campaign that is desired
            </Typography>
          </Box>
        </FlexBetween>
      </Dashboardbox>
      <Dashboardbox gridArea="f"></Dashboardbox>
    </>
  );
};

export default Row2;
