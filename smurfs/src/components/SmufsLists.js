import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurfs, fetchSmurfs } from '../actions'

const SmurfsLists = ({item}) => {
  console.log(item)
  // const handleDelete = () => {
  //   deleteSmurfs(item.id)
  //   item.fetchSmurfs()
  // }
  return (  
    <div className="person">
    <i className="far fa-trash-alt" onClick={deleteSmurfs(item.id)}></i>
      <p>{item.name}</p>
      <p>{item.age}</p>
      <p>{item.height}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  };
};
 
export default connect(
  mapStateToProps,
     {deleteSmurfs, fetchSmurfs}
  )(SmurfsLists);