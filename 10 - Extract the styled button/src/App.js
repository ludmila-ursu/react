import './App.css';
import Card from './Card';
import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Button from './element/Button';

const theme= {
  primary: '#8585e0',
  mango: 'yellow'
}

function App() {
  const [showCard, setShowCard] = useState(true);
  const [cards, setCards] = useState([{
id: 'dxxdfx',
name: 'Bran Stark	',
title: 'Three-Eyed Raven',
avatar: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/game-of-thrones/2/26/Bran_stark_photo.jpg?width=1920'
  },
{
id: 'dxxdfxvh',
name: 'Arya Stark',
title: 'A girl with no name',
avatar: 'https://upload.wikimedia.org/wikipedia/en/3/39/Arya_Stark-Maisie_Williams.jpg'
},
{
id: 'dxxdfxmlml',
name: 'Melisandre',
title:' Red Priestess',
avatar: 'https://pbs.twimg.com/profile_images/870425982632468480/wWMuk_0b_400x400.jpg'
}]);
  const toggleShowCard = () => setShowCard(!showCard)
  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards];
    console.log(`cards: ${cards}`);
    console.log(`cards_copy: ${cards_copy}`);
    cards_copy.splice(cardIndex, 1);
    setCards(cards_copy);
  }
  const changeNameHandler = (event, id) =>{
    //1. Get the id of the card
    const cardIndex = cards.findIndex(card=>card.id === id);
    //2. Make a copy of the cards:
    const cards_copy = [...cards];
    //3. Change the name of the specific card:
    cards_copy[cardIndex].name=event.target.value;
    //4. Set cards with the latest version of cards_copy:
    setCards(cards_copy);

  }
  const cardsMarkup = showCard && (
  cards.map((card, index) => <Card
            key={card.id}   
            avatar={card.avatar}
            name={card.name}
            title={card.title}
            onDelete={()=> deleteCardHandler(index)}
            onChangeName={(event)=>changeNameHandler(event, card.id)}
      />)
)
const classes = ['button'];

if (cards.length <3) classes.push('pink');
if(cards.length <2) classes.push('red text');

  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <Button length={cards.length} color="mango">Toggle</Button>
          <button className={classes.join(' ')} onClick={toggleShowCard}  >Toggle show/hide</button>
              {cardsMarkup}
        </div>
     </ThemeProvider>
  );
}

export default App;
 