import React from "react";
import './footer.css'

const currentDate=new Date()
const year=currentDate.getFullYear()
function Footer(){
  return (
    <>
    <div className="copyright">copyright &copy; {year}</div>
    </>
  )
}
export default Footer;