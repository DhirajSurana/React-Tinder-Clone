import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import "./tinderCard.css"

function TinderCards() {
  const [people, setPeople] = React.useState([
    {
      name: "Elon Musk",
      url:"https://www.usnews.com/object/image/00000163-652c-d812-a367-eded8f0e0000/180515-10thingselonmusk-editorial.jpg?update-time=1526411160555&size=responsive970"
    },
    {
      name: "Jeff Bezos",
      url: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1169493342_459890_nt9nei.jpg"
    }
  ])

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
            <div style={{ backgroundImage: `url(${person.url}) ` }} className="card"
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