import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <div>
        <h1>Kristian M Rodriguez Villanueva</h1>
        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
        <p>Hi! My name is Kristian, but you can call me Kris. I am currently a sophomore at UTSA,<br></br>
        pursueing a major in Computer Engineering. I am also currently working at UTSA as a<br></br>
        Student Web Assistant, helping improve the styling in UTSA pages. I acquired my<br></br>
        programming skills from the UTSA Coding Boot Camp, and from my participation in<br></br>
        robotics, both in High School and College. I have expereince in HTML, CSS, JavaScript,<br></br>
        python, and Java.</p>

        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
        <h5>Phone</h5>
        <p>(210) 965-1982</p>
        <h5>Email</h5>
        <p>marrv00@outlook.com</p>
        <h5>Github</h5>
        <a href= "https://github.com/marrv0z">marrv0z</a>
        <h5>LinkedIn</h5>
        <a href="https://www.linkedin.com/in/kristian-rodriguez-villanueva-839aa1162/">Kristian Rodriguez Villanueva</a>
        <h5>Resume</h5>
        <a href="file:///C:/Users/marrv/Documents/books/Resume06-2020.pdf">Click Here for my full resume</a>
        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> 
      </div>
    )
  }
}

export default About;