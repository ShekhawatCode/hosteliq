import { render } from '@testing-library/react';

import ApiControllerCountriesController from './api-controller-countries-controller';

describe('ApiControllerCountriesController', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiControllerCountriesController />);
    expect(baseElement).toBeTruthy();
  });
});
