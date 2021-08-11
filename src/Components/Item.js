import React from 'react';

const Item = ({item}) => {
  return ( 
      <article className="item">
          <h3>{item.title} - ${item.price}</h3>
          <img src={item.pictureUrl} alt="thumbnail" />
          <p>{item.description}</p>
      </article>
   );
}

export default Item;