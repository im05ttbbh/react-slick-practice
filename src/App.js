import React from 'react';
import './App.css';
import ButtonSlider from './components/ButtonSlider';
import ButtonGroupSlider from './components/ButtonGroupSlider';
import CheckboxSlider from './components/CheckboxSlider';
import FloatingActionButton from './components/FloatingActionButton';

class App extends React.Component{
  state = { Component: null }

  selectButtonSlider = () => this.setState({Component: ButtonSlider})
  selectButtonGroupSlider = () => this.setState({Component: ButtonGroupSlider})
  selectCheckboxSlider = () => this.setState({Component: CheckboxSlider})
  selectFloatingActionButtonSlider = () => this.setState({Component: FloatingActionButton})

  render() {
    const {Component} = this.state;
    if (Component) return <Component />;
    return(
      <div>
        <div className="intro">Select Slider!</div>
        <button type="button" onClick={this.selectButtonSlider}>to ButtonSlider</button>
        <button type="button" onClick={this.selectButtonGroupSlider}>to ButtonGroupSlider</button>
        <button type="button" onClick={this.selectCheckboxSlider}>to CheckboxSlider</button>
        <button type="button" onClick={this.selectFloatingActionButtonSlider}>to FloatingActionButton</button>
      </div>
    );
  }
}
 
export default App;