import { Boxheader } from "@/components/Boxheader";
import Dashboardbox from "@/components/Dashboardbox";
import { useGetKpisQuery } from "@/states/api";
import { useTheme } from "@mui/material";
import React, { useMemo } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {};

const Row1 = (props: Props) => {
  const { palette } = useTheme();
  const { data } = useGetKpisQuery();
  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3).toUpperCase(),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);
  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3).toUpperCase(),
          Revenue: revenue,
          Profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [data]);
  const revenue = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue }) => {
        return {
          name: month.substring(0, 3).toUpperCase(),
          Revenue: revenue,
         
        };
      })
    );
  }, [data]);
  console.log(revenueExpenses);
  return (
    <>
      <Dashboardbox gridArea="a">
        <Boxheader
          title="Revenue and Expenses"
          subtitle="Top line represents revenue, Bottom line represent expenses"
          sidetext="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={300}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 30,
              left: -10,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              dataKey="name"
              tickLine={false}
              domain={[8000, 23000]}
              style={{ fontSize: "10px" }}
              axisLine={{ strokeWidth: "0" }}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Dashboardbox>
      <Dashboardbox gridArea="b">
        <Boxheader
          title="Profit vs Revenue"
          subtitle="Top line represents revenue, Bottom line represent Profit"
          sidetext="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={revenueProfit}
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
              dataKey="Profit"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Revenue"
              stroke={palette.primary[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </Dashboardbox>
      <Dashboardbox gridArea="c">
      <Boxheader
          title="Month Wise Revenue"
          subtitle="Graphical Representation of month wise revenue!"
          sidetext="+4%"
       ></Boxheader>
      <ResponsiveContainer width="100%" height="100%">
     
        <BarChart
          width={500}
          height={300}
          data={revenue}
          margin={{
            top: 5,
            right: 10,
            left: 20,
            bottom: 60,
          }}
        >
          <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <XAxis dataKey="name" tickLine={false} axisLine={false}  style={{ fontSize: "10px" }}/>
          <YAxis tickLine={false} axisLine={false}  style={{ fontSize: "10px" }}/>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="Revenue" fill="url(#colorRevenue)"/>
          {/* <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
        </BarChart>
      </ResponsiveContainer>
      </Dashboardbox>
    </>
  );
};

export default Row1;
