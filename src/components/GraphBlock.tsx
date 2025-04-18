import {
  Bar,
  Line,
  Pie,
} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

import type { ChartOptions, ChartData } from 'chart.js'
import type { FC } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
)

type GraphType = 'bar' | 'line' | 'pie'

interface GraphDatum {
  label: string
  value: number
}

interface GraphBlockProps {
  type: GraphType
  data: GraphDatum[]
}

const GraphBlock: FC<GraphBlockProps> = ({ type, data }) => {
  const labels = data.map((d) => d.label)
  const values = data.map((d) => d.value)

  const pieColors = [
    '#60a5fa', // blue
    '#f87171', // red
    '#34d399', // green
    '#fbbf24', // yellow
    '#a78bfa', // purple
    '#f472b6', // pink
    '#facc15', // amber
    '#10b981'  // emerald
  ]

  const chartData: ChartData<'bar' | 'line' | 'pie' | 'scatter'> =
    type === 'pie'
      ? {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: data.map((_, i) => pieColors[i % pieColors.length])
          }
        ]
      }
      : {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            pointRadius: 5
          }
        ]
      }

  const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: type === 'pie', // show only for pie
        position: 'bottom',
        labels: {
          color: '#6b7280', // Tailwind gray-500 for subtlety
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: '#1f2937',
        titleColor: '#fff',
        bodyColor: '#fff'
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chartComponents: Record<GraphType, any> = {
    bar: Bar,
    line: Line,
    pie: Pie,
  }

  const ChartComponent = chartComponents[type] || Bar

  const isPie = type === 'pie'

  return (
    <div className="my-6 px-4">
      <div
        className={`${isPie ? 'max-w-xs' : 'max-w-lg'}`}
      >
        <ChartComponent data={chartData} options={options} />
      </div>
    </div>
  )
}

export default GraphBlock
