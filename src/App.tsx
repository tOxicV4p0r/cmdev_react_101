import React, { useState } from 'react'

type Props = {}

export default function ({ }: Props) {
  const [state1, setState1] = useState(0);
  let var1: number = 0; // fixed type
  let var2 = 'KK';
  let var3 = true;

  return (
    <div>
      <button onClick={() => { setState1(state1 + 1) }}>Plus</button>
      <div>state1 : {state1}</div>
      <div>var1 : {var1}</div>
      <div>var2 : {var2}</div>
      <div>var3 : {var3.toString()}</div>
    </div>
  );
}