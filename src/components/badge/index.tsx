import React from 'react';
import { BadgeStyle, typeColor } from '@components/badge/badge_styled';

type typeBadge = 'primary' | 'secondary' | 'warning';
export interface BadgeInterface {
  label: string;
  type: typeBadge;
}

function Baged({ label, type = 'primary' }: BadgeInterface) {
  return (
    <BadgeStyle background={typeColor[type].background} color={typeColor[type].color}>
      <span className="text"> {label} </span>
    </BadgeStyle>
  );
}

export default Baged;
