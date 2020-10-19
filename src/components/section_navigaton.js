import React, { useState } from 'react';

function SectionNavigation() {
    const [number, setNumber] = useState(0);
  return (
      <section className = "sec-navigation">
        <nav>
            <ul>
                <li><a href = "#">About me</a></li>
                <li><a href = "#">Skills</a></li>
                <li><a href = "#">Contact</a></li>
            </ul>
        </nav>
        {/* <div>{number}</div>
        <button onClick = {() => setNumber(number + 1)}>+</button>
        <button onClick = {() => setNumber(number - 1)}>-</button> */}
      </section>
    );
  }
  
  export default SectionNavigation;