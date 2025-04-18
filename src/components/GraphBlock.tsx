import {
  Bar,
  Line,
  Pie,
  Scatter
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

type GraphType = 'bar' | 'line' | 'pie' | 'dot'

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

  // Special handling for dot (scatter) chart
  const scatterPoints = data.map((d) => ({
    x: parseFloat(d.label),
    y: d.value
  }))

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
      } :
      type === 'dot'
        ? {
          datasets: [
            {
              data: scatterPoints,
              backgroundColor: 'rgba(75, 192, 192, 1)',
              pointRadius: 5
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
      legend: { display: false }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chartComponents: Record<GraphType, any> = {
    bar: Bar,
    line: Line,
    pie: Pie,
    dot: Scatter
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
