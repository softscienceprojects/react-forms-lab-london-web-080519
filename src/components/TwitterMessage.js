import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      maxChars: props.maxChars,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

 


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} name="message" id="message" value={this.state.value} />
        <p>Character counter: 
          { this.state.maxChars - this.state.value.length }
        </p>
      
      </div>

      
    
    );
  }
}

export default TwitterMessage;
