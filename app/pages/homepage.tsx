import React from 'react'

type Props = {}

export default function section1({}: Props) {
  return (
      <div className="grid grid-cols-1 gap-4">
        <div id="section1" className="h-screen flex items-center justify-center bg-red-200">01</div>
        <div id="section2" className="h-screen flex items-center justify-center bg-blue-200">02</div>
        <div id="section3" className="h-screen flex items-center justify-center bg-green-200">03</div>
      </div>  )
}