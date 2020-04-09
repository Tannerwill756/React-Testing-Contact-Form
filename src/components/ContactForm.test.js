import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
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

test('field allows you to input text', () => {
    //ARRANGE
    const { getByLabelText } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/first Name/i);
    const lastNameInput = getByLabelText(/last Name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);
    
    //ACT
    fireEvent.change(firstNameInput, { target: { value: "Tanner" } });
    fireEvent.change(lastNameInput, { target: { value: "Williams" } });
    fireEvent.change(emailInput, { target: { value: "lajsdfij@gmail.com" } });
    fireEvent.change(messageInput, { target: { value: "ajsdlkf alksjdflkja" } });
    //ASSERT
    expect(firstNameInput.value).toBe("Tanner")
    expect(firstNameInput).toBeVisible();

    expect(lastNameInput.value).toBe("Williams")
    expect(lastNameInput).toBeVisible();

    expect(emailInput.value).toBe("lajsdfij@gmail.com")
    expect(emailInput).toBeVisible();

    expect(messageInput.value).toBe("ajsdlkf alksjdflkja")
    expect(messageInput).toBeVisible();
})

test('form can be submitted', () => {
    //ARRANGE
    const { getByLabelText, getByTestId } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/first Name/i);
    const lastNameInput = getByLabelText(/last Name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);
    //ACT
    fireEvent.change(firstNameInput, { target: { value: "Tanner" } });
    fireEvent.change(lastNameInput, { target: { value: "Williams" } });
    fireEvent.change(emailInput, { target: { value: "lajsdfij@gmail.com" } });
    fireEvent.change(messageInput, { target: { value: "ajsdlkf alksjdflkja" } });


    fireEvent.click(getByTestId(/submit/i));
    //ASSERT
    expect(firstNameInput).toBeVisible();
    expect(lastNameInput).toBeVisible();
    expect(emailInput).toBeVisible();
    expect(messageInput).toBeVisible();


    
    //expects submitted info to be visible
    const submittedInfo = getByTestId('preTag');
    expect(submittedInfo).toBeInTheDocument();
})