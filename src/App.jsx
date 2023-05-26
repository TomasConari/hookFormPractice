import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';

function App() {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");

  const inputLettersOnly = (event, setState) => {
    const newInput = event.target.value;
    if(!(/\d/.test(newInput))){
      setState(newInput);
    };
  };

  const inputNumbersOnly = (event, setState) => {
    const newInput = event.target.value;
    if(!isNaN(newInput)){
      setState(newInput);
    };
  };

  const passwordInput = (event, setState) => {
    const newInput = event.target.value;
    const hiddenText = newInput.replace(/./g, "*");
    setState(hiddenText);
  };

  return (
    <div className='App'>
      <div style={{display: "flex", flexDirection: 'row', gap: "10px"}}>
        <Form dataText={"Name"} data={name} func={(event) => inputLettersOnly(event, setName)} />
        <Form dataText={"Lastname"} data={lastname} func={(event) => inputLettersOnly(event, setLastname)} />
      </div>
      <Form compStyle={{width: "98%"}} dataText={"Email"} data={email} func={(event) => setEmail(event.target.value)} />
      <Form compStyle={{width: "98%"}} dataText={"Contact Number"} data={number} func={(event) => inputNumbersOnly(event, setNumber)} />
      <Form compStyle={{width: "98%"}} dataText={"Address"} data={address} func={(event) => setAddress(event.target.value)} />
      <div style={{display: "flex", flexDirection: 'row', gap: "10px"}}>
        <Form dataText={"City"} data={city} func={(event) => inputLettersOnly(event, setCity)} />
        <Form dataText={"State"} data={state} func={(event) => inputLettersOnly(event, setState)} />
      </div>
      <div style={{display: "flex", flexDirection: 'row', gap: "10px"}}>
        <Form dataText={"Zip Code"} data={zipcode} func={(event) => inputNumbersOnly(event, setZipcode)} />
        <Form dataText={"Country"} data={country} func={(event) => inputLettersOnly(event, setCountry)} />
      </div>
      <Form compStyle={{width: "98%"}} dataText={"Password"} data={password} func={(event) => passwordInput(event, setPassword)} />
    </div>
  );
};

export default App;
