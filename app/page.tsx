'use client';

import { useState } from "react";

export default function Home() {
  function incrementar(){
    setValor(valor + 1);
  } 
  const [valor, setValor] = useState(10);
  return (
    <div>
      <button onClick={incrementar}>OK</button>
      <h1>{valor}</h1>
    </div>
  );
}
