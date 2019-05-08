import React, {Component} from 'react';

import ImageDisplay from '../components/ImageDisplay';
import QuestionForm from '../components/QuestionForm';
import GuessForm from '../components/GuessForm';



class GameData extends Component {

  constructor(props){
    super(props)
    this.state = {

      characters: [
        {
      name: "Harry Potter",
      gender: "Male",
      hair: "Black",
      house: "Gryffindor",
      deatheater: false,
      image: "harry.jpg"
   },
   {
      name: "Ron Weasley",
      gender: "Male",
      hair: "Red",
      house: "Gryffindor",
      deatheater: false,
      image: "ron.jpg"
   },
   {
      name: "Hermione Granger",
      gender: "Female",
      hair: "Brown",
      house: "Gryffindor",
      deatheater: false,
      image: "hermione.jpeg"
   },
   {
      name: "Luna Lovegood",
      gender: "Female",
      hair: "Blonde",
      house: "Ravenclaw",
      deatheater: false,
      image: "luna.jpg"
   },
   {
      name: "Draco Malfoy",
      gender: "Male",
      hair: "Blonde",
      house: "Slytherin",
      deatheater: true,
      image: "draco.jpg"
   },
   {
      name: "Cedric Diggory",
      gender: "Male",
      hair: "Blonde",
      house: "Hufflepuff",
      deatheater: false,
      image: "cedric.png"
   },
   {
      name: "Cho Chang",
      gender: "Female",
      hair: "Black",
      house: "Ravenclaw",
      deatheater: false,
      image: "cho.jpg"
   },
   {
      name: "Rubeus Hagrid",
      gender: "Male",
      hair: "Brown",
      house: "Gryffindor",
      deatheater: false,
      image: "hagrid.png"
   }
      ]
    }
    // bind here
  }





render(){
  return(

    <>
    <img src='/images/guess.png' />
    <ImageDisplay />
    <QuestionForm characters={this.state.characters} />
    <br></br>
    <GuessForm />
    </>

  )

}
}




export default GameData;
