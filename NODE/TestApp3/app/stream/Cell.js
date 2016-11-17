import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  color: string,
  value: number,
};

type State = {
  hover: boolean,
};

export class Cell extends React.Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      hover: false,
    }
  }

  render(): React.Element<any> {
    return (
      <div
        style={{
          backgroundColor: this.props.color,
          width: 10,
          height: 10,
          boxSizing: 'border-box',
          margin: 1,
          position: 'relative',
        }}
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}
      >
        <span
          style={{
            visibility: this.state.hover ? 'visible' : 'hidden',
            backgroundColor: 'black',
            color: '#fff',
            textAlign: 'center',
            padding: '5px 5px 5px 5px',
            borderRadius: '6px',
            /* Position the tooltip text - see examples below! */
            position: 'absolute',
            margin: '15px 15px 15px 15px',
            zIndex: '1',
          }}
        >
          {this.props.value}
        </span>
      </div>
    );
  }
}
