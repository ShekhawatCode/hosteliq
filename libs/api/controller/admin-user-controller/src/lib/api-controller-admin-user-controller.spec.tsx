import { render } from '@testing-library/react';

import ApiControllerAdminUserController from './api-controller-admin-user-controller';

describe('ApiControllerAdminUserController', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiControllerAdminUserController />);
    expect(baseElement).toBeTruthy();
  });
});
