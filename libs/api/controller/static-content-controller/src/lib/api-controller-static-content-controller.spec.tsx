import { render } from '@testing-library/react';

import ApiControllerStaticContentController from './api-controller-static-content-controller';

describe('ApiControllerStaticContentController', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiControllerStaticContentController />);
    expect(baseElement).toBeTruthy();
  });
});
