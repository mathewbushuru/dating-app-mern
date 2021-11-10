import React,{useState} from 'react'
import DatingCard from 'react-tinder-card'

import './DatingCards.css'

//in the people state variable, we will store the name and images of four people fvgfg
const DatingCards = () => {

    const [people,setPeople] = useState([
        {name:"Random Guy", imgUrl:"https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"},
        {name:"Random Girl", imgUrl:"https://images.unsplash.com/photo-1529911194209-8578109840df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"},
        {name:"Another Girl", imgUrl:"https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
        {name:"Another Guy", imgUrl:"https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"}
    ])

    const swiped = (direction,nameToDelete) => {
        console.log("receiving "+nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!")
    }

    return (
        <div className = 'datingCards'>
            <div className="datingCards__container">
                {people.map((person)=> (
                    <DatingCard
                        className="swipe" 
                        key = {person.name}
                        preventSwipe = {['up','down']}
                        onSwipe = {(dir) => swiped(dir,person.name)}
                        onCardLeftScreen = {() => outOfFrame(person.name)}>
                            
                            <div style={{backgroundImage:`url(${person.imgUrl})`}} className="card">
                                <h3>{person.name}</h3>
                            </div>

                        </DatingCard>
                ))}
            </div>
        </div>
    )

}   

export default DatingCards