import React from 'react';

function Tommy(props){
  return (
    <div>
      <p>Health: {props.health}</p>
      <button onClick={props.onFeed}>Feed</button>
      <button onClick={props.onSleep}>Sleep</button>
    </div>
  );
}

export default Tommy;
