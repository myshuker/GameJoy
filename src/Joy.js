import React, { Component } from 'react';

class Joy extends Component {
    state={  
        joy:[
            {
                id:1,
                score:'1'
            },
            {
                id:2,
                score:'5'
            },
            {
                id:3,
                score:'0'
            },
            {
                id:4,
                score:'7'
            }
        ]
    }
        

  render() {
    return (
      <div> 
          <span>1</span>{' '}
          <span>2</span> {' '}
          <span>3</span>{' '}
          <span>4</span>{' '}
          <span>5</span>{' '}
          <span>6</span>{' '}
          <span>7</span>{' '}
          <span>8</span>{' '}
          <span>9</span>{' '}
          <span>10</span>{' '}
          <h2> Player number {this.state.joy[3].id} </h2>
          <p>{this.state.joy[3].score}</p>
    <input  />      
          
          
     </div>
    );
  }
}

export default Joy;
