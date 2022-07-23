import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import "./tinderCard.css"
import axios from "./axios";

function TinderCards() {
  const [people, setPeople] = React.useState([]);
  useEffect(() => { 
    async function fetchdata(){
      const req = await axios.get('/tinder/card');
      setPeople(req.data);
    }
    fetchdata();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log(`removing ${nameToDelete}`)
    // setLastDirection(direction)
  };

  const outofFrame = (name) => { 
    console.log(`${name} left the screen`)
  }
  return (
      <div className="tinderCards">
      <div className="tinderCards-cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outofFrame(person.name)}
          >
            <div style={{ backgroundImage: `url(${person.imgUrl}) ` }} className="card"
            >
              <h3>{ person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards