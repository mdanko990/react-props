import React from 'react';

export default function First(props){
  if(props.id === 0){
    return (<li>{props.text.toLowerCase()}</li>);
  }else{
    return '';
  }
}
