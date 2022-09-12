import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component{
  state = {
    values: [
      ['', '',''],
      ['', '',''],
      ['', '','']
    ],
    playerX: true

  }
  componentDidMount() {

  }
  play = (i,j) => {
    let newBoard = this.state.values ;
    newBoard[i][j] = this.state.playerX ? "X" : "O";

    this.setState({
      values:newBoard,
      playerX: !this.state.playerX
    })
    console.log(this.state.playerX)

  }

  render() {


    return(
      <table>
        {
          this.state.values.map((row, i)=> {
            return(
              <tr>
                    {
                    row.map((cell,j) => {
                      return(
                        <td
                          style = {{border:"50px solid", height: "50px", fontSize: "40px", textAlign: "center" }}
                          onClick = {() => this.play(i,j)}>{cell}
                        </td>
                      )})
                    }

              </tr>
                   )
            })
        }
        </table>
    )
  }
}

export default App;
