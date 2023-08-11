import { render } from '@testing-library/react';

import ApiMessagesAppMessages from './api-messages-app-messages';

describe('ApiMessagesAppMessages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiMessagesAppMessages />);
    expect(baseElement).toBeTruthy();
  });
});
