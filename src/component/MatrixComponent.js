import React from 'react';

const MatrixComponent = ({ rows, cols, matrixValues, setMatrixValues }) => {
    // const handlchange=(e) => {
    //     const updatedMatrix = [...matrixValues];
    //     if(regex.test(e.target.value))
    //     {
    //     updatedMatrix[rowIndex][colIndex] = e.target.value;
    //     setMatrixValues(updatedMatrix);
    //     }
    
          
    // }
    return (
        <>
            {Array.from({ length: rows }, (_, rowIndex) => (
                <div key={rowIndex}>
                    {Array.from({ length: cols }, (_, colIndex) => (
                        <input
                       key={colIndex}
                      type="number"
                     value={matrixValues[rowIndex][colIndex]}
                   onChange={(e) => {
                  const updatedMatrix = [...matrixValues];
             
                 updatedMatrix[rowIndex][colIndex] = e.target.value;
                   setMatrixValues(updatedMatrix);
        }}
                     required 
                />

                    ))}
                </div>
            ))}
        </>
    );
};

export default MatrixComponent;
