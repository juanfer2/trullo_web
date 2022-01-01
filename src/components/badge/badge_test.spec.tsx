import React from 'react';
import Badge, { BadgeInterface } from '@components/badge';
import { render } from '@testing-library/react';

describe('Baged component', () => {
  test('Should render primary badge', () => {
    const badgeProps: BadgeInterface = { label: 'my label', type: 'primary' };
    const component = render(<Badge label={badgeProps.label} type={badgeProps.type} />);
    const divComponent = component.container;
    const spanComponent = component.getByText('my label');

    expect(spanComponent).toBeInTheDocument();
    expect(spanComponent).toHaveStyle(`color: #2F80ED`);
    expect(divComponent.firstChild).toHaveStyle(`background-color: #D5E6FB`);
  });

  test('Should render secondary badge', () => {
    const badgeProps: BadgeInterface = { label: 'my label', type: 'secondary' };
    const component = render(<Badge label={badgeProps.label} type={badgeProps.type} />);
    const divComponent = component.container;
    const spanComponent = component.getByText('my label');

    expect(spanComponent).toBeInTheDocument();
    expect(spanComponent).toHaveStyle(`color: #219653`);
    expect(divComponent.firstChild).toHaveStyle(`background-color: #D3EADD`);
  });

  test('Should render warning badge', () => {
    const badgeProps: BadgeInterface = { label: 'my label', type: 'warning' };
    const component = render(<Badge label={badgeProps.label} type={badgeProps.type} />);
    const divComponent = component.container;
    const spanComponent = component.getByText('my label');

    expect(spanComponent).toBeInTheDocument();
    expect(spanComponent).toHaveStyle(`color: #9B51E0`);
    expect(divComponent.firstChild).toHaveStyle(`background-color: #EBDCF9`);
  });
});
