import React from 'react'
function Test(props){
  return(
    <>
    <img src={props.url} width={100} />
    <h2>{props.name}</h2>
    </>

  )
}






export default function PropsSample() {
  return (<>
    <Test url='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' name='Product1' />
    <Test url='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' name='Product2'/>
    <Test url='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' name='Product3'/>
    </>
  )
}
