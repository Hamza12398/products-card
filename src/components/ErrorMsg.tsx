import React from 'react'

interface IProps  {
  msg: string
}

export default function ErrorMsg({msg}: IProps) {
  return msg ?
    <span className='block text-red-600 font-semibold text-sm'>{msg}</span> : null;
  
}