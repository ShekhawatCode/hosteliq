import { render } from '@testing-library/react';

import ApiModelCountryModel from './api-model-country-model';

describe('ApiModelCountryModel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiModelCountryModel />);
    expect(baseElement).toBeTruthy();
  });
});
