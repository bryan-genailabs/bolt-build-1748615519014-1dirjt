import React, { useState } from 'react'

function App() {
  const [show, setShow] = useState(false)

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <button onClick={() => setShow(true)}>Show Hello World</button>
      {show && <h1>Hello World</h1>}
    </div>
  )
}

export default App