import { Stage } from '@pixi/react'
import Bunny from './Bunny'
import { useState, useEffect } from 'react'

function App() {
  const [stageWidth, setStageWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setStageWidth(window.innerWidth)
    })
    return () => {
      window.removeEventListener('resize', () => {
        setStageWidth(window.innerWidth)
      })
    }
  }, [])

  return (
    <Stage
      width={stageWidth}
      height={300}
      raf={false}
      renderOnComponentChange={true}
      options={{ antialias: true, backgroundAlpha: 0 }}
    >
      <Bunny />
    </Stage>
  )
}

export default App
