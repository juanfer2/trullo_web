import React from 'react';
import { BagedStyle, typeColor  } from '@components/baged/baged_styled'

type typeBaged = 'primary' | 'secondary' | 'warning' 

interface BagedInterface {
  label: string;
  type: typeBaged;
}

function Baged({label, type = 'primary'}: BagedInterface) {
  return (
    <BagedStyle
      background={typeColor[type].background}
      color={typeColor[type].color}> 
      <span className='text'> {label} </span> 
    </BagedStyle>
  )
}

export default Baged
