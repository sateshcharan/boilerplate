import React, { useEffect, useRef } from "react";
import { Chart, ChartType, ChartOptions } from "chart.js/auto";

interface DataPoint {
  year: number;
  count: number;
}

interface ChartProps {
  data: DataPoint[];
  type?: ChartType;
  options?: ChartOptions;
}

const ChartComponent: React.FC<ChartProps> = ({
  data,
  type = "bar",
  options = { canvas: { backgroundColor: "blue" } },
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Destroy existing chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create new chart instance
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    chartRef.current = new Chart(ctx, {
      ...props,
      type,
      data: {
        labels: data.map((row) => row.year.toString()),
        datasets: [
          {
            label: "Acquisitions by year",
            data: data.map((row) => row.count),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        ...options,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, type, options]);

  return <canvas ref={canvasRef} />;
};

export default ChartComponent;
