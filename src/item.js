import React from 'react';
import './searchField.css';

function stripEndQuotes(s){
	var t=s.length;
	if (s.charAt(0)==="'") s=s.substring(1,t--);
	if (s.charAt(--t)==="'") s=s.substring(0,t);
	return s;
}

const Item = ({ item }) => (
  <li className="item">
    <a href={stripEndQuotes(item)} target="_blank" className="link">
      {stripEndQuotes(item)}
    </a>
  </li>
);

export default Item;
