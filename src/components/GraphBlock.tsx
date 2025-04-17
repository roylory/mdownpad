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

  const chartData: ChartData<'bar' | 'line' | 'pie' | 'scatter'> = {
    labels,
    datasets: [
      {
        label: `${type.toUpperCase()} Chart`,
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

  return (
    <div className="my-4">
      <ChartComponent data={chartData} options={options} />
    </div>
  )
}

export default GraphBlock
