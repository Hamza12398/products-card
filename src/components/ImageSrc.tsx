import React from 'react'

interface IProps {
  imageUrl: string
  alt: string
  className: string
}

export default function ImageSrc({imageUrl, alt, className}: IProps) {
  return (
    <img src={imageUrl} alt={alt} className={className} />
  )
}