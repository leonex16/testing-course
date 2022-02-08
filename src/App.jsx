/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import './App.css';

const calculateBIM = ({ weight, height }) => weight / height ** 2;

const calculateBMIEstimation = ({ bmi }) => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
}

function App() {
  const [bmi, setBMI] = useState(null);
  const [bmiEstimation, setBMIEstimation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { height, weight } = e.target.elements;

    const BMI = calculateBIM({ height: height.value, weight: weight.value });
    const BMIEstimation = calculateBMIEstimation({ bmi: BMI });

    setBMI(BMI);
    setBMIEstimation(BMIEstimation);
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>

      { bmi && <h2>BMI: {Number(bmi).toFixed(2)}</h2> }
      { bmiEstimation && <h2>BMI Estimation: {bmiEstimation}</h2> }

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="weight" >Weight</label>
          <input id="weight" name="weight" type="text" />
        </div>
        <div>
          <label htmlFor="height" >Height</label>
          <input id="height" name="height" type="text" />
        </div>
        <div>
          <button type='submit' name='send'>Send</button>
        </div>
      </form>
    </div>
  );
}

export default App;
