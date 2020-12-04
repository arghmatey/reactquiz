import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import TriviaSelectForm from './components/TriviaSelectForm';
import Trivia from './components/Trivia'
import * as api from './utils/api';
import * as trivia from './utils/trivia';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      trivia: [],
      correctAnswers: {}
    }
  }

  getTrivia = async (formData) => {
    let triviaResults = await api.getTrivia(formData);
    const results = trivia.randomizeAnswers(triviaResults.results);
    const correctAnswers = trivia.correctAnswers(triviaResults.results);
    this.setState({ trivia: results, correctAnswers })
  }

  checkAnswer = (ans) => {
    if (ans) {
      this.setState({ correct: this.state.correct + 1 })
    } else return
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
                checkAnswer={this.checkAnswer}
              />
            } />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;