import { useEffect } from "react"
import { useState } from "react"

export default function RandomColor() {

  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  function handleCreateRandomHEX() {
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
  }

  function handleCreateRandomRGB() {
    setColor(`rgb(
      ${Math.floor(Math.random() * 255)}, 
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)})`
    )
  }

  useEffect(() => {
    if (typeOfColor === 'hex') handleCreateRandomHEX()
    if (typeOfColor === 'rgb') handleCreateRandomRGB()
  }, [typeOfColor])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: color
    }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => setTypeOfColor('hex')}> Create HEX Color</button>
        <button onClick={() => setTypeOfColor('rgb')}> Create RGB Color</button>
        <button onClick=
          {typeOfColor === 'hex' ? handleCreateRandomHEX : handleCreateRandomRGB}>
          Generate Random Color
        </button>
      </div>
      <h3 style={{ fontSize: '2rem' }}>{`${typeOfColor.toUpperCase()} Color`}</h3>
      <h1 style={{ fontSize: '4rem' }}>{color}</h1>
    </div>
  )
}
