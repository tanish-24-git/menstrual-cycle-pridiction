"use client"

import { Box } from "@chakra-ui/react"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor: string[]
    borderColor?: string[]
    borderWidth?: number
  }[]
}

export default function Chart({ data }: { data: ChartData }) {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Menstrual Cycle Predictions",
        font: {
          size: 18,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 20,
        },
        color: "#D53F8C", // brand.500
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#2D3748", // gray.700
        bodyColor: "#4A5568", // gray.600
        borderColor: "#E2E8F0", // gray.200
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        usePointStyle: true,
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y} days`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Days",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        ticks: {
          font: {
            size: 12,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
    },
    animation: {
      duration: 2000,
      easing: "easeOutQuart",
    },
  }

  return (
    <Box h="400px" w="full" p={4} bg="white" borderRadius="lg" boxShadow="md">
      <Bar data={data} options={options} />
    </Box>
  )
}

