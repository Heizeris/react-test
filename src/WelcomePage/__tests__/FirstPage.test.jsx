import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FirstPage from './FirstPage'; 
describe('FirstPage Component', () => {
  it('redirects to /Registration when the "MAKE AN APPOINTMENT NOW" link is clicked', () => {
    render(<FirstPage />);

   
    const appointmentLink = screen.getByText('MAKE AN APPOINTMENT NOW');

   
    fireEvent.click(appointmentLink);

   
    expect(window.location.href).toBe('http://localhost/Registration');
  });
});
