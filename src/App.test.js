/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
});

test('Validate to render title app', () => {

  const $title = screen.getByText(/BMI Calculator/i);
  
  expect($title).toBeInTheDocument();
});

test('Calculate underweight result', () => {
  const $weightInput = screen.getByLabelText(/Weight/i);
  const $heightInput = screen.getByLabelText(/Height/i);
  const $btnSubmit = screen.getByRole('button', { name: /send/i });

  $weightInput.value = '50';
  $heightInput.value = '1.7';

  fireEvent.click($btnSubmit);

  const bmiResult = screen.queryByText(/BMI: 17.30/i);
  const bmiEstimationResult = screen.queryByText(/BMI Estimation: Underweight/i);

  expect(bmiResult).toBeInTheDocument();
  expect(bmiEstimationResult).toBeInTheDocument();
});

