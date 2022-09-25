import './App.css';
import Card from './Card';
import React, {useState} from 'react';

function App() {
  const [name, setName] = useState('Danaerys');
  const buttonMarkups = (
    <div>
    <button className="button2">YES</button>
    <button className="button3">NO</button>
    </div>
  )
  const changeNameHandler = name => setName (name);
  const changeInputHandler = event => setName(event.target.value)

  return (
    <div className="App">
<button className="button" onClick={() =>changeNameHandler('Mother of Dragons')}>Change Name</button>
      <Card 
      
            avatar="https://sm.ign.com/t/ign_me/gallery/g/game-of-th/game-of-thrones-daenerys-targaryen-over-the-seasons_qbdr.1080.jpg"
            name={name}
            title="House Targaryan"
            onChangeName={() =>changeNameHandler('Danaerys')}
            onChangeInput = {changeInputHandler}
      >{buttonMarkups}</Card>
     </div>
  );
}

export default App;
 