import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addSmurfs, fetchSmurfs } from '../actions'

const SmurfsForm = props => {
  
  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: ''
  }) 

  const handleName = e => {
    setSmurf({
      ...smurf,
      name: e.target.value
    })
    console.log(smurf)
  }

  const handleAge = e => {
    setSmurf({
      ...smurf,
      age: e.target.value
    })
    console.log(smurf)
  }

  const handleHeight = e => {
    setSmurf({
      ...smurf,
      height: e.target.value + 'cm'
    })
    console.log(smurf)
  }


  const handleSubmit = e => {
    props.addSmurfs(smurf)
    props.fetchSmurfs()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={smurf.name}
          name="name"
          onChange={handleName}
          placeholder="Smurf Name"
        />
        <input 
          type="text" 
          value={smurf.age}
          name="age"
          onChange={handleAge}
          placeholder="Age"
        />
        <input 
          type="text" 
          value={smurf.height}
          name="height"
          onChange={handleHeight}
          placeholder="Height"
        />
        <button>Add Smurf</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  };
};
 
export default connect(
  mapStateToProps,
     {addSmurfs, fetchSmurfs}
  )(SmurfsForm);