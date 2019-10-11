import React from 'react';

const SmurfsLists = ({item}) => {
  console.log(item)
  return (  
    <div className="person">
    <i class="far fa-trash-alt"></i>
      <p>{item.name}</p>
      <p>{item.age}</p>
      <p>{item.height}</p>
    </div>
  );
}

 
export default SmurfsLists;