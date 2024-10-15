import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAvatar,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/custom/CustomCard";

import ChartComponent from "@/components/ui/chart";

export function ChartCard() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  return (
    <Card>
      <CardAvatar className="p-6 pt-0">
        <ChartComponent data={data} type="bubble" />
      </CardAvatar>

      <CardHeader className=" text-center">
        <CardTitle className="text-2xl font-semibold">daily sales</CardTitle>
        <CardDescription>description of the chart</CardDescription>
      </CardHeader>

      <CardContent>updated 4 min ago</CardContent>
    </Card>
  );
}
