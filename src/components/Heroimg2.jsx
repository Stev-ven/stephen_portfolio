import "./Heroimg2Styles.css";

import React from 'react'

class Heroimg2 extends React.Component {
    render(){
        return (
            <div className="project-img">
              <div className="heading">
                 <h1>{this.props.heading}</h1>
                 <p>{this.props.text}</p>
              </div>
            </div>
          )
        }

    }
export default Heroimg2