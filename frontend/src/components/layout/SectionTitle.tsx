import React from 'react'
 interface Props {
    children: React.ReactNode,
    customStyle?: string;
 }


function SectionTitle ({children, customStyle}: Props) {
  return (
    <h1 className={`font-ginto-nord-bold-italic text-[clamp(2rem,3vw+0.12rem,3rem)] ${customStyle}`} >
        {children}
    </h1>
  )
}

export default SectionTitle