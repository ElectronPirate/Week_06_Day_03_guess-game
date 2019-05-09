import React, {Component} from 'react';

import '../App.css';

class GuessForm extends Component{



  render(){
    return(
      <form className="ui-form" id="Gform" onSubmit={this.handleSubmit}>




           <label>Make a Guess</label>


           <select>
            <option>Harry</option>

            </select>







            <input id="Gbutton" type="submit"
              className = "ui basic button"

              value='Guess!'/>


      </form>
    )
  }
}

export default GuessForm;
