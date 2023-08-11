import { render } from '@testing-library/react';

import ApiInterfacesAppInterfaces from './api-interfaces-app-interfaces';

describe('ApiInterfacesAppInterfaces', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiInterfacesAppInterfaces />);
    expect(baseElement).toBeTruthy();
  });
});
