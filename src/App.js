import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TriviaSelectForm from './components/TriviaSelectForm';
import Trivia from './components/Trivia';
import TriviaResults from './components/TriviaResults';
import * as api from './utils/api';
import * as trivia from './utils/trivia';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      trivia: [],
      correctAnswers: {},
      score: 0
    }
  }

  getTrivia = async (formData) => {
    let triviaResults = await api.getTrivia(formData);
    const results = trivia.randomizeAnswers(triviaResults.results);
    const correctAnswers = trivia.correctAnswers(triviaResults.results);
    this.setState({ trivia: results, correctAnswers })
  }

  handleScore = (correct) => {
    let score = (correct / this.state.trivia.length) * 100;
    this.setState({ score: score })
  }

  componentDidMount = async () => {
    const apiCategories = await api.getCategories();
    this.setState({
      categories: apiCategories.trivia_categories
    });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
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
                correctAnswers={this.state.correctAnswers}
                handleScore={this.handleScore}
              />
            } />
            <Route exact path='/results' render={({ history }) =>
              <TriviaResults
                history={history}
                score={this.state.score}
              />
            } />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;