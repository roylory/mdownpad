import { useEffect, useState } from "react"
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()
// md.use(markdownItGraph)

function App() {
  const [input, setInput] = useState("")

  const [rendered, setRendered] = useState('')

  useEffect(() => {
    setRendered(md.render(input))
  }, [input])

  return (
    <div className="flex h-screen">
      <textarea
        className="w-1/2 p-4 text-sm font-mono border-r resize-none focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        spellCheck="false"
      />
      <div
        className="w-1/2 p-4 overflow-auto prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: rendered }}
      />
    </div>
  )
}

export default App
