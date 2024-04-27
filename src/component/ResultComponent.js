import React from 'react';

const ResultComponent = ({ resultMatrix,exithndlr}) => {
    const exitfunction=()=>{
        exithndlr();
    }
    return (
        <div className='Matrix'>
            <p>Result Matrix:</p>
            <div className='matrixSection'>
            {resultMatrix.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((value, colIndex) => (
                        <input
                            key={colIndex}
                            type="text"
                            value={value}
                            readOnly
                        />
                    ))}
                </div>
            ))}
            </div>
            <button onClick={exitfunction}>Exit</button>
        </div>
    );
};

export default ResultComponent;
