import { Sprite } from '@pixi/react'
import { Ticker } from 'pixi.js'
import { useState, useEffect } from 'react'

function Bunny() {
  const [rotation, setRotation] = useState(0)

  const [positionX, setPositionX] = useState(window.innerWidth / 2)

  useEffect(() => {
    const ticker = new Ticker()
    ticker.add((delta) => {
      setRotation((prevRotation) => prevRotation + 0.1 * delta)
    })
    ticker.start()

    return () => {
      ticker.stop()
    }
  }, [])

  //set the position of the bunny to be in the middle of the screen
  useEffect(() => {
    window.addEventListener('resize', () => {
      setPositionX(window.innerWidth / 2)
    })
    return () => {
      window.removeEventListener('resize', () => {
        setPositionX(window.innerWidth / 2)
      })
    }
  }, [])

  return (
    <Sprite
      anchor={{ x: 0.5, y: 0.5 }}
      position={[positionX, 150]}
      rotation={rotation}
      image='https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png'
    />
  )
}

export default Bunny
