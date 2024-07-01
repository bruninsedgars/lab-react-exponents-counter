import React from 'react';

function Exponent({ num, exponent }) {
  return (
    <div>
      <h2>
        {num} to the power of {exponent} is {Math.pow(num, exponent)}
      </h2>
    </div>
  );
}

export default Exponent;
