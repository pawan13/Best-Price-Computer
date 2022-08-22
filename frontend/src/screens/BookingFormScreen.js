import { useState, useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';
import emailjs from '@emailjs/browser';
import MessageBox from '../Components/MessageBox';
import { Link } from 'react-router-dom';

export default function BookingFormScreen() {
  const [state, setState] = useState({
    FullName: '',
    MobileNumber: '',
    email: '',
    description: '',
    computer: '',
    dropPick: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_nmk2gpb',
        'template_mu49wdx',
        form.current,
        'rTdvbEOK39QmS1FK8'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormErrors(validate(state));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.FullName) {
      errors.FullName = 'Username is required!';
    }
    if (!values.MobileNumber) {
      errors.MobileNumber = 'MobileNumber is required!';
    } else if (values.MobileNumber.length > 10) {
      errors.MobileNumber = 'MobileNumber must be 10 characters';
    } else if (values.MobileNumber.length < 10) {
      errors.MobileNumber = 'MobileNumber must be 10 characters';
    }

    if (!values.email) {
      errors.email = 'Emails is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.computer) {
      errors.computer = 'Please select the type of computer. It is required';
    }
    if (!values.dropPick) {
      errors.dropPick = 'Please select one Option';
    }
    if (!values.description) {
      errors.description = 'Please select one Option';
    }
    return errors;
  };
  return (
    <div>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>
          <MessageBox variant="success">
            <p>
              Your email has been sent with following details to our technician,{' '}
              <br /> our technician will get back to you soon.
            </p>
          </MessageBox>

          <h2>Your details</h2>
          <h6>Name: {state.FullName}</h6>
          <h6>Mobile number: {state.MobileNumber}</h6>
          <h6>Email: {state.email}</h6>
          <h6>ComputerType: {state.computer}</h6>
          <h6>Drop or Pick: {state.dropPick}</h6>
          <h6>Description: {state.description}</h6>

          <Link className="nav-link" to="/payment">
            <Button className="packages" variant="success">
              Add to cart
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <p style={{ fontWeight: 'bold' }}>
            We service and repair all makes and models <br />
            Dell Asus Macbook iMac Lenovo HP <br />
            gaming consoles vintage and new.
          </p>
          <h5>Please fill the Form to book.</h5>
        </div>
      )}
      <form
        hidden={Object.keys(formErrors).length === 0 && isSubmit}
        ref={form}
        onSubmit={handleSubmit}
      >
        <h1>Book Us</h1>
        <label className="formBooking">
          FullName:{' '}
          <input
            type="text"
            name="FullName"
            value={state.FullName}
            onChange={handleChange}
          />
          <p style={{ color: 'red' }}>{formErrors.FullName}</p>
        </label>
        <br />
        <label className="formBooking">
          Mobile Number :{' '}
          <input
            type="Number"
            name="MobileNumber"
            value={state.MobileNumber}
            onChange={handleChange}
          />
          <p style={{ color: 'red' }}>{formErrors.MobileNumber}</p>
        </label>
        <br />
        <label className="formBooking">
          Email :{' '}
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <p style={{ color: 'red' }}>{formErrors.email}</p>
        </label>
        <br />
        <label className="formBooking">
          Select the types of Computer :{' '}
          <select
            name="computer"
            value={state.computer}
            onChange={handleChange}
          >
            <option value="Laptop">Laptop</option>
            <option value="Desktop">Desktop</option>
          </select>
          <p style={{ color: 'red' }}>{formErrors.computer}</p>
        </label>
        <br />
        <label className="formBooking">
          <input
            type="radio"
            name="dropPick"
            value="I will drop at shop"
            checked={state.dropPick === 'I will drop at shop'}
            onChange={handleChange}
          />{' '}
          I will drop at shop
        </label>
        <br />
        <label className="formBooking">
          <input
            type="radio"
            name="dropPick"
            value="Pick and drop at my place"
            checked={state.dropPick === 'Pick and drop at my place'}
            onChange={handleChange}
          />{' '}
          Pick and drop at my place.
          <p style={{ color: 'red' }}>{formErrors.dropPick}</p>
        </label>
        <br />

        <label className="formBooking">
          Description of the computers Problem : <br />
          <textarea
            rows="5"
            cols="50"
            width="2400px"
            name="description"
            value={state.description}
            onChange={handleChange}
          />
          <p style={{ color: 'red' }}>{formErrors.description}</p>
        </label>
        <br />
        <Button
          disabled={
            !state.FullName ||
            !state.MobileNumber ||
            !state.email ||
            !state.computer ||
            !state.dropPick ||
            !state.description
          }
          type="submit"
          value="Send"
          className="formButton"
        >
          Book In{' '}
        </Button>
      </form>
    </div>
  );
}
