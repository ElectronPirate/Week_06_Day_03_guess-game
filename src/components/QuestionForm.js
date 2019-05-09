import React, {Component} from 'react';

import '../App.css';


class QuestionForm extends Component{

  constructor(props){
    super(props)
    this.state = {
      selectedCharacteristic: "name"
    };

    this.populateCharacteristics = this.populateCharacteristics.bind(this);
    this.characteristicChange = this.characteristicChange.bind(this);

  }



  render(){
    return(
      <form className="ui-form" id="Qform" onSubmit={this.populateCharacteristics}>

           <label>Guess a characeristic</label>
           <select onChange={this.characteristicChange}>
            <option value='name'>Name</option>
            <option value='gender'>Gender</option>
            <option value='hair'>Hair</option>
            <option value='house'>House</option>
            <option value='deatheater'>Deatheater</option>
            </select>

            <select>
             {this.createOptions()}
             </select>


            <input
              type='submit'
              className = "ui negative button"
              value='Do they have this'/>

      </form>
    )
  }

  createOptions() {
    // use to the state to get the value of the selected category
    const attributes = this.props.characters.map(character => {
      return character[this.state.selectedCharacteristic]
    })

    // map over the values, creating the options
    const options = attributes.map(attribute => {
      return <option value="attribute">{attribute}</option>
    })
    return options;
  }

  populateCharacteristics(event){
    event.preventDefault();
    // const name = this.props.characters.filter(character => character.name);
    // const gender = this.props.characters.filter(character => character.gender);
    // const hair = this.props.characters.filter(character => character.hair);
    // const house = this.props.characters.filter(character => character.house);
    // const deatheater = this.props.characters.filter(character => character.deatheater);

  }

  characteristicChange(event){
    console.log(event.target.value);
    this.setState({selectedCharacteristic:event.target.value})
  }


}

export default QuestionForm;
