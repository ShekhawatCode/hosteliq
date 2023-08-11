import { render } from '@testing-library/react';

import ApiModelStaticContentModel from './api-model-static-content-model';

describe('ApiModelStaticContentModel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiModelStaticContentModel />);
    expect(baseElement).toBeTruthy();
  });
});
