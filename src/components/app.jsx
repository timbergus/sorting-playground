import React, { Component, Fragment } from 'react';

import BarStyled from './bar.styled';
import ButtonStyled from './button.styled';

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

export default class App extends Component {
  state = {
    lengths: [],
    sorting: false,
  }

  componentDidMount() {
    const lengths = [];
    for (let i = 0; i < 100; i++) {
      lengths.push((i + 1) * 5);
    }
    shuffle(lengths);
    this.setState({
      lengths,
    });
  }

  swap = (a, b) => new Promise(resolve => setTimeout(() => {
    const { lengths } = this.state;
    let tmp = lengths[a];
    lengths[a] = lengths[b];
    lengths[b] = tmp;
    this.setState({
      lengths,
    });
    resolve(true);
  }, 0));

  reset = () => {
    const { lengths } = this.state;
    shuffle(lengths);
    this.setState({
      lengths,
    });
  }

  bubbleSort = async () => {
    const { lengths } = this.state;
    let tmp = 0;
    let changed = false;
    this.setState({
      sorting: true,
    });
    do {
      changed = false;
      for (let i = 0; i < lengths.length - 1; i++) {
        if (lengths[i] > lengths[i + 1]) {
          changed = await this.swap(i, i + 1);
        }
      }
    } while(changed);
    this.setState({
      sorting: false,
    });
  }

  render() {
    const { lengths, sorting } = this.state;
    return (
      <Fragment>
        <ButtonStyled onClick={() => this.bubbleSort()} disabled={sorting}>Bubble Sort</ButtonStyled>
        <ButtonStyled onClick={() => this.reset()} disabled={sorting}>Reset</ButtonStyled>
        {
          lengths.map((length, index) => <BarStyled key={length} length={length} />)
        }
      </Fragment>
    );
  }
}
