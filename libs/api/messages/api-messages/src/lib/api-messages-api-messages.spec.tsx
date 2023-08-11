import { render } from '@testing-library/react';

import ApiMessagesApiMessages from './api-messages-api-messages';

describe('ApiMessagesApiMessages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiMessagesApiMessages />);
    expect(baseElement).toBeTruthy();
  });
});
