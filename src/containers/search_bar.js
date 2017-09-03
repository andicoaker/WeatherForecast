import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = { term: '' };

    // take onInputChange function and bind it to this, which is SearchBar, then replace existing function with the new bound instance of the function
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();


    // this passes in the city as the term
    // when user submits it calls the action creator with the term that was entered, sets state of term to empty string, causing compoentn to re-render, input has value of this.state.term which is empty string so it will appear to have emptied out to the user.
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// passig null because this container doesn't need any state, which is typically the first argument. matching dispatch to container is always passed as second argument.
export default connect(null, mapDispatchToProps)(SearchBar);
