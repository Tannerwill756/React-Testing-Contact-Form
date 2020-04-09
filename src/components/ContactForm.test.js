import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

// test('fake test',() => {});

test('Current labels are appearing',() => {
    const { getByText } = render(<ContactForm />); // getting text from contactForm.js

    const labelFirstName = getByText(/first name/i); //check if first name is visible on dom
    expect (labelFirstName).toBeVisible();

    const labelLastName = getByText(/last name/i);
    expect (labelLastName).toBeVisible();

    const labelEmail = getByText(/email/i);
    expect (labelEmail).toBeVisible();

    const labelMessage = getByText(/message/i);
    expect (labelMessage).toBeVisible();
})