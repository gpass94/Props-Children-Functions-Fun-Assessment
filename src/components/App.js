import React, { Component } from 'react';
import '../styles/App.css';


class Header extends Component {
  render() {
    return (
      <nav>I am the Navigation Bar</nav>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>I am the Footer</footer>
    );
  }
}

class BaseLayout extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
    <div>
      <Header />
      {this.props.children}
      <Footer />
      <div>This should house Header and Footer components and be able to house any children components.</div>
    </div>
    );
  }
}

class ParentComponent extends Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput(e) {
    e.preventDefault();
    console.log(this.state);
    //set the state on input change
    this.setState({whatToSay: e.target.value});

  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  render() {
    return (
      <div>{/*Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.*/}
        <form>
          <div>
            <input onChange={this.handleInput} type="text" value={this.state.value} placeholder="Say It, Don't Spray It!"/>
          </div>
          <div>
            <ChildComponent onClick={this.handleSubmit}/>
            <DisplayComponent sayWhat={this.state.whatWasSaid} />
          </div>
       </form>
      </div>
    );
  }
}

class ChildComponent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>Dumb Component receiving Props
        <div>
          <input type="submit" onClick={this.props.onClick}/>
        </div>
      </div>
    );
  }
}

class DisplayComponent extends Component {
  render() {
    return (
      <div>{this.props.sayWhat}</div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>


        </BaseLayout>
        <ParentComponent />

      </div>
    );
  }
}

export default App;
