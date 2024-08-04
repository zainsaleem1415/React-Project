import React,{useEffect} from 'react'

const Navbar = ({color}) => {

  //Case 1: Run on first render
  useEffect(()=>{
    alert("WelCome to my Page. Run on first render")
},[] )

//Case 2: Run on every render
useEffect(()=>{
alert("Hi I will Run on Every render")
} )

//Case 3: Run when certain value changed

useEffect(() => {
   alert("Color was changed")
  
   }, [color])
  
  return (
    <div> I am Navbar of {color} color...
     </div>
  )
}

export default Navbar