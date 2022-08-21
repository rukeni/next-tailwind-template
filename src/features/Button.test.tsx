import { render, screen } from '@testing-library/react';

import Button from './Button';

test('Button', () => {
  render(<Button label='Button' />);

  expect(screen.getByText('Button')).toHaveTextContent('Button');
});
