import './App.css';
import Card from './Card';
import React, {useState} from 'react';

function App() {
  const [name, setName] = useState('Danaerys');
  const [showCard, setShowCard] = useState(true);

  const changeNameHandler = name => setName (name);
  const changeInputHandler = event => setName(event.target.value)
  const toggleShowCard = () => setShowCard(!showCard)
    const buttonMarkups = (
    <div>
    <button className="button2">YES</button>
    <button className="button3">NO</button>
    </div>
  )
  const cardsMarkup = showCard && <Card   
            avatar="https://sm.ign.com/t/ign_me/gallery/g/game-of-th/game-of-thrones-daenerys-targaryen-over-the-seasons_qbdr.1080.jpg"
            name={name}
            title="House Targaryan"
            onChangeName={() =>changeNameHandler('Danaerys')}
            onChangeInput = {changeInputHandler}
      >{buttonMarkups}</Card>

  return (
    <div className="App">
<button className="button" onClick={toggleShowCard}>Toggle show/hide</button>
{cardsMarkup}
     </div>
  );
}

export default App;
 