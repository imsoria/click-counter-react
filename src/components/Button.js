import React from 'react';

function Click({ text, itsclickButton, manageClick}) { //usando operadores ternariarios vamos a asignar las siguientes funciones
  return(
    <button className={itsclickButton ? 'click-button' : 'restart-click'} //Here we will specify if it is a click button
    onClick={manageClick}>
      {text}
    </button>
  );  
}

export default Click;