import React, { Component } from 'react';
// import MyComponent from './MyComponent';
// import EventPractice from './EventPractice';
// import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {

  render(){
    return (
      //<MyComponent ref={(ref) => this.MyComponent.ref }/>
      //<EventPractice/>
      //<ValidationSample />
      <div>
        <ScrollBox ref={ (ref) => this.scrollBox=ref }/>
        <button onClick={ () => this.scrollBox.ScrollToBottom() }>맨 밑으로</button>
      </div>
    )
  }
}

export default App;
