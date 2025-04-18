import { useEffect, useState } from "react"
import ReactDOM from 'react-dom/client'
import GraphBlock from "./components/GraphBlock"
import MarkdownIt from 'markdown-it'
import markdownItGraph from 'markdown-it-graph'

const md = new MarkdownIt()
md.use(markdownItGraph)

const sampleInput = `
\`\`\`graph bar
Jan | █████ 5
Feb | █████████ 8
Mar | ███████████ 77
\`\`\`

\`\`\`graph pie
Positive | 22
Negative | 11
Neutral | 33
\`\`\`

\`\`\`graph line
Jan | █████ 5
Feb | █████████ 8
Mar | █████████ 8
\`\`\`
`

function App() {
  const [input, setInput] = useState(sampleInput)

  const [rendered, setRendered] = useState('')

  useEffect(() => {
    setRendered(md.render(input))
  }, [input])

  // After rendered HTML is set
  useEffect(() => {
    const blocks = document.querySelectorAll('graph-block')

    blocks.forEach((el) => {
      const graphEl = el as HTMLElement
      const graphDataAttr = graphEl.getAttribute('data-graph')

      if (!graphDataAttr) return

      try {
        const graphData = JSON.parse(graphDataAttr)

        const root = ReactDOM.createRoot(graphEl)
        root.render(<GraphBlock {...graphData} />)
      } catch (err) {
        console.error('Failed to render <graph-block>', err)
      }
    })
  }, [rendered])

  return (
    <div className="flex h-screen flex-col">
      <header className="text-center text-lg font-semibold py-2 border-b">
        mdownpad
      </header>
      <div className="flex flex-1">
        <div className="w-1/2 flex flex-col border-r">
          <div className="bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 border-b">
            Markdown Input
          </div>
          <textarea
            className="flex-1 p-4 text-sm font-mono resize-none focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck="false"
          />
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 border-b">
            Rendered Output
          </div>
          <div
            className="flex-1 p-4 overflow-auto prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: rendered }}
          />
        </div>
      </div>
    </div>
  )
}

export default App
