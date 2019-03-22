import React, { Component } from 'react';
import Square from './Square';
import calculateWinner from './WinnerCalculator';
import './Style.css';

class Board extends Component {
    handleClick(index) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[index]) {
            return;
          }
        squares[index] = this.state.xIsNext ? 'X' : '0';
        this.setState({squares: squares,
            xIsNext: !this.state.xIsNext});
    }

    renderSquare(i) {
        return <Square 
        value={this.state.squares[i]}
        onClick = {() => this.handleClick(i)} />;
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
        status = 'Winner: ' + winner;
        } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
        <div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}

export default Board;