
import './App.css';
import { Userinput } from './component/Userinput';

import { FaQuestion } from "react-icons/fa";

import { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

function App() {

    const[start,setstart]=useState(false)
    const [showInstructions, setShowInstructions] = useState(false);

const startcalculator=()=>{
  setstart(true);
}

const handleInstructionsClick = () => {
  setShowInstructions(true);
};

const exithndlr=()=>{
  setstart(false);
}
// Function to handle close of instructions modal
const handleCloseInstructions = () => {
  setShowInstructions(false);
};



  return (
    start? <Userinput exithndlr={exithndlr}/> :
    <div className='container'>
      <div className="home-container">
      <h1>Matrix Multication Calculator</h1>
    <div className='btn-container'>
    <button className="start-btn" onClick={startcalculator}>Start</button>
      <button className="instructions-btn" onClick={handleInstructionsClick}>
      <FaQuestion /></button>
    </div>

      {/* Instructions modal */}
      <SweetAlert
        show={showInstructions}
        title="Instructions"
        onConfirm={handleCloseInstructions}
        className="sweet-instruction"
      >
       <div className='instruction'>
    <p className='point'>Enter the dimensions (rows and columns) of the matrices.</p>
    <p className='point'>Before multiplying two matrices, ensure that the number of columns in the first matrix matches the number of rows in the second matrix.
     If this condition is not met, matrix multiplication is not possible.</p>
     <p>The maximum size of the matrix is 8x8.</p>
    <p className='point'>Input the values for each cell of the matrices.</p>
    <p className='point'>Click the "Calculate" button to perform matrix multiplication.</p>
    <p className='point'>View the result in the output area.</p>
</div>

      </SweetAlert>
    </div>
    </div>
  );
}

export default App;
