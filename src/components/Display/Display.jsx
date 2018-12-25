import React from 'react'

export default function Display ({isVisible, children}) {
  if (isVisible) {
    return children
  }
  return ''
}