import { useEffect, useState } from "react"
import MarkdownIt from 'markdown-it'
import markdownItGraph from 'markdown-it-graph'

const md = new MarkdownIt()
md.use(markdownItGraph)

function App() {
  const [input, setInput] = useState(`\`\`\`graph bar
Jan | █████ 5
Feb | █████████ 8
\`\`\``)

  const [rendered, setRendered] = useState('')

  useEffect(() => {
    setRendered(md.render(input))
  }, [input])

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
