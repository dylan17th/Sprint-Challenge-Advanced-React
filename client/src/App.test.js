import React from "react";
import { render} from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
   render(<App />);
});

test('checking to make sure the navigation is rendering', ()=>{
  const {getByText} = render(<App />);
  getByText(/Women's Soccer Player API/i)
  getByText(/dark mode/i)
})

test("checking to see if name,country,searches render", () => {
  const {findByText} = render(<App />);
  findByText(/name/i);
  findByText(/country/i)
  findByText(/searches/i)
});










// import React from 'react';
// import {render, fireEvent} from '@testing-library/react';
// import ContactForm from './ContactForm';

// test('checking the first name input and onchange event ',()=>{
//     const {getByLabelText,findByText} = render(<ContactForm/>);
//     const firstName = getByLabelText(/first name/i)
//     fireEvent.change(firstName, {target: {name: 'firstName', value: 'dylan'}})
//     findByText(/dylan/i);  
// } )

// test('checking the last name input and onchange event ',()=>{
//     const {getByLabelText,findByText} = render(<ContactForm/>);
//     const lastName = getByLabelText(/last name/i)
//     fireEvent.change(lastName, {target: {name: 'lastName', value: 'collins'}})
//     findByText(/collins/i);
// } )

// test('checking the email input and onchange event ',()=>{

//     const {getByLabelText,findByText} = render(<ContactForm/>);
//     const email = getByLabelText(/email/i)
//     fireEvent.change(email, {target: {name: 'email', value: 'dylancollins@aol.com'}})
//     findByText(/dylancollins@aol.com/i);
// } )

// test('checking the message input and onchange event ',()=>{

//     const {getByLabelText,findByText} = render(<ContactForm/>);
//     const message = getByLabelText(/message/i)
//     fireEvent.change(message, {target: {name: 'message', value: 'hello world'}})
//     findByText(/hellow world/i);  
// } )

// test('testing the submit button', ()=>{
//     const {getByTestId ,findByDisplayValue} = render(<ContactForm/>);
//     const button = getByTestId(/submit/i);
//     fireEvent.submit(button)
//     findByDisplayValue(/submit/i)
// })

