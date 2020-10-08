import React from 'react';
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";

import './App.css';

type Inputs = {
  email: string,
  first_name: string,
  surname: string,
  telephone_number: string,
  alternative_telephone_number: string,
  card_type: string,
  card_number: string,
  expiry_date: string,
  issue_number: string,
  start_date: string,
  cvv: string,
  address_1: string,
  address_2: string,
  address_3: string,
  address_4: string,
  post_code: string,
  country: string,
  username: string,
  password: string,
  password_confirm: string
};

function App() {
  const { register, handleSubmit, errors, getValues, control } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="you@example.com" type="email" ref={register({ 
            required: "An Email address is required",
            })} />
          {errors.email ? <div>{errors.email.message}</div> : null}
        </div>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input name="first_name" placeholder="Tom" type="text" ref={register({ required: "A first name is required" })} />
          {errors.first_name ? <div>{errors.first_name.message}</div> : null}
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input name="surname" placeholder="Nook" type="text" ref={register({ required: "A Surname is required" })} />
          {errors.surname ? <div>{errors.surname.message}</div> : null}
        </div>
        <div>
          <label htmlFor="telephone_number">Telephone Number</label>
          <input name="telephone_number" type="telephone_number" ref={register({ required: "A Telephone number  is required" })} />
          {errors.telephone_number ? <div>{errors.telephone_number.message}</div> : null}
        </div>
        <div>
          <label htmlFor="alternative_telephone_number">Alternative telephone number</label>
          <input name="alternative_telephone_number" type="text" ref={register} />
          {errors.alternative_telephone_number ? <div>{errors.alternative_telephone_number.message}</div> : null}
        </div>
        <div>
          <label htmlFor="card_type">Card type:</label>
          <select className="form-control" name="card_type" id="card_type" ref={register}>
            <option value="American Express">American Express</option>
            <option value="Maestro">Maestro</option>
            <option value="Mastercard Credit">Mastercard Credit</option>
            <option value="Mastercard Debit">Mastercard Debit</option>
            <option value="Visa Credit">Visa Credit</option>
            <option value="Visa Debit">Visa Debit</option></select>
          {errors.card_type ? <div>{errors.card_type}</div> : null}
        </div>
        <div>
          <label htmlFor="card_number">Card number</label>
          <input name="card_number" type="text" ref={register({ required: "A card number is required" })} />
          {errors.card_number ? <div>{errors.card_number.message}</div> : null}
        </div>
        <div>
          <label htmlFor="expiry_date">Expiry date</label>
          <Controller
            as={ReactDatePicker}
            control={control}
            valueName="expiry_date" // DateSelect value's name is selected
            onChange={(expiry_date) => expiry_date}
            name="expiry_date"
            className="input"
            placeholderText="Select date"
          />
          <input name="expiry_date" type="date" ref={register({ required: "An Expiry date is required" })} />
          {errors.expiry_date ? <div>{errors.expiry_date.message}</div> : null}
        </div>
        <div>
          <label htmlFor="issue_number">Issue Number</label>
          <input name="issue_number" type="text" ref={register} />
          {errors.issue_number ? <div>{errors.issue_number.message}</div> : null}
        </div>
        <div>
          <label htmlFor="start_date">Start Date</label>
          <input name="start_date" type="date" ref={register} />
          {errors.start_date ? <div>{errors.start_date.message}</div> : null}
        </div>
        <div>
          <label htmlFor="cvv">Card Verification Value</label>
          <input name="cvv" type="text" ref={register({ required: "A Card Verification Value is required" })} />
          {errors.cvv ? <div>{errors.cvv.message}</div> : null}
        </div>
        <div>
          <input name="address_1" placeholder="Address Line 1" type="text" ref={register({ required: "An address is required" })} />
          {errors.address_1 ? <div>{errors.address_1.message}</div> : null}
        </div>
        <div>
          <input name="address_2" placeholder="Address Line 2" type="text" ref={register} />
          {errors.address_2 ? <div>{errors.address_2.message}</div> : null}
        </div>        
        <div>
          <input name="address_3" placeholder="Address Line 3" type="text" ref={register} />
          {errors.address_3 ? <div>{errors.address_3.message}</div> : null}
        </div>        
        <div>
          <input name="address_4" placeholder="Address Line 4" type="text" ref={register} />
          {errors.address_4 ? <div>{errors.address_4.message}</div> : null}
        </div>
        <div>
          <label htmlFor="post_code">Post Code/Zip Code</label>
          <input name="post_code" type="text" ref={register({ required: "A Post code/Zip code is required." })} />
          {errors.post_code ? <div>{errors.post_code.message}</div> : null}
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input name="country"  type="text" ref={register({ required: "A Country is required" })} />
          {errors.country ? <div>{errors.country.message}</div> : null}
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input name="username" type="text" ref={register({ required: "An Username is required" })} />
          {errors.username ? <div>{errors.username.message}</div> : null}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" ref={register({ required: "A Password is required" })} />
          {errors.password ? <div>{errors.password.message}</div> : null}
        </div>
        <div>
          <label htmlFor="password_confirm">Password confirmation</label>
          <input name="password_confirm" type="password" ref={register({ 
            required: "Please confirm your password",
            validate: {
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || 'Passwords should match!';
              },
            } 
            })} />
          {errors.password_confirm ? <div>{errors.password_confirm.message}</div> : null}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
