import { render } from '@testing-library/react';

import ApiControllerAuthController from './api-controller-auth-controller';

describe('ApiControllerAuthController', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiControllerAuthController />);
    expect(baseElement).toBeTruthy();
  });
});
