import React from 'react';
import Header from './Header';
import Tommy from './Tommy';
import Moment from 'moment';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      health: 100,
    }
    this.handleFeed = this.handleFeed.bind(this);
    this.handleSleep = this.handleSleep.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateHealth(), 5000
    );
  }

  updateHealth(){
    let newHealth = this.state.health;
    if (newHealth != 0){
      newHealth-=5;
      this.setState({health: newHealth});
    } else {
      console.log('hi');
      this.componentWillUnmount();
    }
  }

  handleFeed(){
    let newHealth = this.state.health;
    if (newHealth < 100) {
      newHealth+=5;
      this.setState({health: newHealth});
    }
  }

  handleSleep(){
    this.componentWillUnmount();
  }


  componentWillUnmount(){
    console.log('butts');
    clearInterval(this.waitTimeUpdateTimer);
  }

  render(){
    return(
      <div>
        <Header/>
        <Tommy
          health={this.state.health}
          onFeed={this.handleFeed}
          onSleep={this.handleSleep}/>
      </div>
    );

  }
}

export default App;
