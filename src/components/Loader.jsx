import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p style={{
        fontSize:14,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        marginTop: 40
      }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader