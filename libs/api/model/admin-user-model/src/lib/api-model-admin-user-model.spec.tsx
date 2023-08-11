import { render } from '@testing-library/react';

import ApiModelAdminUserModel from './api-model-admin-user-model';

describe('ApiModelAdminUserModel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiModelAdminUserModel />);
    expect(baseElement).toBeTruthy();
  });
});
