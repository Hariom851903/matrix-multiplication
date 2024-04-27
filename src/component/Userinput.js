import React, { useState } from 'react';
import '../css/Userinput.css'
import MatrixComponent from './MatrixComponent';
import ResultComponent from './ResultComponent';
export const Userinput = ({exithndlr}) => {
    const [matrix1, setMatrix1] = useState({ row1: '', col1: '' });
    const [matrix2, setMatrix2] = useState({ row2: '', col2: '' });
    const [submitted, setSubmitted] = useState(false);
    const [matrix1Values, setMatrix1Values] = useState([]);
    const [matrix2Values, setMatrix2Values] = useState([]);
    const [result,setresult]=useState([]);

    const handleMatrix1Change = (e) => {
        const { name, value } = e.target;
        setMatrix1(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleMatrix2Change = (e) => {
        const { name, value } = e.target;
        setMatrix2(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(matrix1.col1===matrix2.row2)
        {
            setSubmitted(true);
            const matrix1Array = Array.from({ length: parseInt(matrix1.row1) }, () => Array.from({ length: parseInt(matrix1.col1) }, () => ''));
           setMatrix1Values(matrix1Array);

        // Create Matrix 2
        const matrix2Array = Array.from({ length: parseInt(matrix2.row2) }, () => Array.from({ length: parseInt(matrix2.col2) }, () => ''));
        setMatrix2Values(matrix2Array);
        }
        else{
            alert("If matrixA has dimensions m * n, then matrixB must have dimensions n * p.");

        }
    };
    const handlecalsubmit=(e)=>{
         e.preventDefault();
        console.log(matrix1Values);
        console.log(matrix2Values);
        console.log(matrix2Values[0].length)
        const transposeMatrixLength = matrix2Values[0].length;

// Create an array with sub-arrays of the determined length
const transposedMatrixArray = Array.from({ length: transposeMatrixLength }, () => []);

// Transpose the matrix
matrix2Values.forEach((row, rowIndex) => {
    row.forEach((element, colIndex) => {
        transposedMatrixArray[colIndex].push(element);
    });
});

console.log(transposedMatrixArray);
calculatematrix(transposedMatrixArray);

    }

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth' // This enables smooth scrolling
        });
    };

    const calculatematrix = (matrix) => {
        const result1 = [];
        matrix1Values.forEach((row1) => {
            const tempArray = [];
            matrix.forEach((row2) => {
                let temp = 0;
                row2.forEach((element, colIndex) => {
                    temp +=parseInt(element) * parseInt(row1[colIndex]);
                });
                tempArray.push(temp);
            });
            result1.push(tempArray);
        });
        console.log(result1);
        setresult([...result1]);
        console.log(result);
        setTimeout(()=>{

            scrollToBottom();
          
        },1000);
    };
    
  const resethndlr=()=>{
    setSubmitted(false)
    setresult([]);
  }

    return (
        <div className='HomeContainer'>
        <form onSubmit={handleSubmit}>
            <div className='section-1'>
                <div className='para'>Select the matrix size</div>
                <div className='subSection'>
                    <div className='matrixSize'>Matrix A:</div>
                    <div className='userSize'>
                        <input type='number' name="row1" value={matrix1.row1} onChange={handleMatrix1Change} min={1} max={8} disabled={submitted} required placeholder='Enter Row'/>
                        <input type='number' name="col1" value={matrix1.col1} onChange={handleMatrix1Change} min={1} max={8} disabled={submitted} required placeholder='Enter Column'd  />
                    </div>
                </div>
                <div className='subSection'>
                    <div className='matrixSize'>  Matrix B:</div>
                    <div className='userSize'>
                        <input type='number' name="row2" value={matrix2.row2} onChange={handleMatrix2Change} min={1} max={8} disabled={submitted} required placeholder='Enter Row'/>
                        <input type='number' name="col2" value={matrix2.col2} onChange={handleMatrix2Change} min={1} max={8} disabled={submitted} required placeholder='Enter Column' />
                    </div>
                </div>
                {!submitted && <button type="submit">Submit</button>}
                
            </div>
        </form>
        <form onSubmit={handlecalsubmit}>
        {submitted && (
                <div className='MatrixContainer'>
                    <div className='Matrix'>
                    <p>The first Matrix A:</p>
                    
                    <div className='matrixSection'>
                    <MatrixComponent rows={parseInt(matrix1.row1)}
                   cols={parseInt(matrix1.col1)} matrixValues={matrix1Values}
                  setMatrixValues={setMatrix1Values} />
                   </div>
                    </div>
                
                    <div className='Matrix'>
                    <p>The Second Matrix B:</p>
                   <div className='matrixSection' >
               
           
                    <MatrixComponent rows={parseInt(matrix2.row2)} 
                     cols={parseInt(matrix2.col2)} matrixValues={matrix2Values} 
                     setMatrixValues={setMatrix2Values} />
                   
                   </div>
                    </div>
                      <div  className='buttonSection'> 
                      <button type="submit">Calculate</button>
                      <button onClick={resethndlr}>Reset</button>
                      </div>
                </div>
               
            )}
        
        </form>
             {(result.length!==0 && submitted) && (<ResultComponent resultMatrix={result} exithndlr={exithndlr}/>) }
        </div>
    );
};
