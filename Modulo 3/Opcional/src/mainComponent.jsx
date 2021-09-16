import React, { useState } from 'react'

const mensaje = process.env.MENSAJE_BIENVENIDA;

export const MainComponent = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hola mundo</p>
      <p>{mensaje}</p>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  )
}

