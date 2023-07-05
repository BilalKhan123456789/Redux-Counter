import React from "react";
import { connect } from "react-redux";
import  { inc,dec } from "./Store/Action/Action";


function App(props) {
  return (
  <>
  <center>
  <h1>Counter</h1>
  <h1>{props.c}</h1>
  <button onClick={()=>props.minus()}>Decreament</button>
  <button onClick={()=>props.plus()}>Increament</button>

  </center>
  </>
  );
}

const get=(state)=>{
return{
  c:state.Count
}}

const editVal=(dispatch)=>{
  return{
plus:()=>dispatch(inc()),
minus:()=>dispatch(dec())

}
}


export default connect(get,editVal)(App)
