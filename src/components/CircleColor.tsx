import React from 'react'
import {HTMLAttributes} from 'react'

interface IProps  extends HTMLAttributes<HTMLSpanElement>{ 
  color: string
}

export default function CircleColor({color, ...rest}: IProps) {
  return (
    <span className={`block w-5 h-5 rounded-full cursor-pointer`} style={{backgroundColor: color}} {...rest}/>
  )
}