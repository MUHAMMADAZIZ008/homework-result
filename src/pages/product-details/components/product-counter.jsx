import { IconButton } from '@mui/material'
import React from 'react'

const ProductCounter = ({onClick, icon}) => {
  return (
    <IconButton onClick={onClick}>{icon}</IconButton>
  )
}

export default ProductCounter