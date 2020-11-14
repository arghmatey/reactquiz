import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TriviaSelectForm from './components/TriviaSelectForm';
import Trivia from './components/Trivia'
import * as api from './utils/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      trivia: [],
      categories: []
    }
  }

  getTrivia = async (formData) => {
    const triviaResults = await api.getTrivia(formData);
    this.setState({ trivia: triviaResults.results })
  }

  componentDidMount = async () => {
    const apiCategories = await api.getCategories();
    this.setState({
      categories: apiCategories.trivia_categories
    });
  }

  render() {

    return (
      <div className="App" >
        <header className="App-header">
        </header>
        <Router>
          <Route exact path='/' render={({ history }) =>
            <TriviaSelectForm
              history={history}
              categories={this.state.categories}
              getTrivia={this.getTrivia} />
          } />
          <Route exact path='/trivia' render={({ history }) =>
            <Trivia
              history={history}
              trivia={this.state.trivia}
            />
          } />
        </Router>
      </div>
    );
  }
}

export default App;