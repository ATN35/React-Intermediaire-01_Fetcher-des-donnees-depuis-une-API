import axios from 'axios';
import { useState } from 'react';
import DisplayEmployee from './components/DisplayEmployee';
import './App.css'

const sampleEmployee = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    postcode: 76111,
    city: 'Timaru',
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};
function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
  const getEmployee = () => {
    // Send the request
    axios
      .get('https://randomuser.me/api?nat=en')
      // Use this data to update the state
      .then((response) => {
        setEmployee(response.data.results[0]);
      });
  };
  return (
    <div className='App'>
      <DisplayEmployee employee={sampleEmployee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App
