import React from 'react';
import '../styles/footer.scss'

const onmouseout=()=>{
    const allfooterlinks= document.querySelectorAll(".footerlink")
    allfooterlinks.forEach((current)=>{
        return (current.style.opacity=1)
    })
}

const mouseover=(n)=>{
    const allfooterlinks= document.querySelectorAll(".footerlink")
    allfooterlinks.forEach((current, index)=>{
        return (index===n?current.style.opacity=1:current.style.opacity=0.2)
    })

    // switch(n){
    //     case 0: 
    //     allfooterlinks.forEach((current, index)=>{
    //         return (index===n?current.style.opacity=1:current.style.opacity=0.5)
    //     })
    //     break;

    //     case 1:
    //         allfooterlinks.forEach((current, index)=>{
    //             return (index===n?current.style.opacity=1:current.style.opacity=0.5)
    //         })
    //     break;
    //     case 2:
    //         allfooterlinks.forEach((current, index)=>{
    //             return (index===n?current.style.opacity=1:current.style.opacity=0.5)
    //         })
    //     break;
    //     case 3:
    //         allfooterlinks.forEach((current, index)=>{
    //             return (index===n?current.style.opacity=1:current.style.opacity=0.5)
    //         })
    //     break;
    //     case 4:
    //         allfooterlinks.forEach((current, index)=>{
    //             return (index===n?current.style.opacity=1:current.style.opacity=0.5)
    //         })
    //     break;
    //     case 5:
    //         allfooterlinks.forEach((current, index)=>{
    //             return (index===n?current.style.opacity=1:current.style.opacity=0.5)
    //         })
    //     break;
        

    //     default: console.log("In default block of switch") 
    // }
}

const Footer = () => {
  return (
    <>
    <footer>
      <h1>Let's <br/>#ConnectOnCutting?</h1>
      <aside>
        <a onMouseLeave={()=>onmouseout()} onMouseOver={()=>mouseover(0)} href="./" className="footerlink">Home</a>
        <a data-cursorpointermini={true} onMouseLeave={()=>onmouseout()} onMouseOver={()=>mouseover(1)} href="/story" className="footerlink">Story</a>
        <a onMouseLeave={()=>onmouseout()} onMouseOver={()=>mouseover(2)} href="/media" className="footerlink">Media</a>
        <a onMouseLeave={()=>onmouseout()} onMouseOver={()=>mouseover(3)} href="/franchise" className="footerlink">Franchise</a>
        <a onMouseLeave={()=>onmouseout()} onMouseOver={()=>mouseover(4)} href="/events" className="footerlink">Events</a>
        <a onMouseLeave={()=>onmouseout()} onMouseOver={()=>mouseover(5)} href="/chaiwalacares" className="footerlink">Chai Waala Cares</a>
      </aside>

      <div className="email">
        <h3>Email</h3><br />
        <a href="mailto: info@mbachaiwala.com">info@mbachaiwala.com</a>
        <a href="mailto: franchise@mbachaiwala.com">franchise@mbachaiwala.com</a>
      </div>

      <div className="phone">
        <h3>Phone</h3><br />
        <a href="tel: = 91722990900">+91-722990900</a>
      </div>

      <p>© COPYRIGHT 2022 MBA CHAI WALA MADE BY</p>
    </footer>
    <div className='footer'></div>

    </>
  );
}

export default Footer;
