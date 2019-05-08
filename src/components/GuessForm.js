import React, {Component} from 'react';

class GuessForm extends Component{



  render(){
    return(
      <form onSubmit={this.handleSubmit}>




           <label>Make a Guess</label>
           <select>
            <option>Harry</option>

            </select>




            <input type="submit"
              className = "ui positive button"

              value='Guess!'/>

      </form>
    )
  }
}

export default GuessForm;
