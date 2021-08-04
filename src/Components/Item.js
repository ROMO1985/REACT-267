import React from 'react';

const Item = ({ usuario }) => {
  return <li><em>{usuario.nombre}</em> +  {usuario.origen}</li>;
}

export default Item;