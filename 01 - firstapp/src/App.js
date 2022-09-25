import React from 'react';
import './Custom.css';

function App() {
  const styles = {
        innerDiv:{  textAlign: "center",
          margin: "auto",
          width: "60%",
          border: "3px solid black",
          backgroundColor: "#73AD21",
          padding: "70px 0"},
        outerDiv:{padding:'70px 0', backgroundColor: 'yellow'}
  }

  const sometext = "sometext";
  const somediv = <div style={{backgroundColor: 'white'}}>some div</div>


  return (
    //inline css:
    // <div style={{padding:'70px 0', backgroundColor: 'blue'}}>
    //     <div className="innerdiv">This is a green box</div>
    // </div>


    <div style={styles.outerDiv}>
      <div style={styles.innerDiv}>This is a green button</div>
      <div style={styles.innerDiv}>{sometext}</div>
      <div style={styles.innerDiv}>{somediv}</div>
    </div>

  );
}

export default App;
              


