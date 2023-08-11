import { render } from '@testing-library/react';

import ApiHelper from './api-helper';

describe('ApiHelper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiHelper />);
    expect(baseElement).toBeTruthy();
  });
});
