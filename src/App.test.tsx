import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Rsbuild heading', () => {
    render(<App />);
    expect(screen.getByText("Rsbuild with React")).toBeInTheDocument();
  });
});
