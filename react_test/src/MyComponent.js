import React, { Component } from 'react';
import ProptTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: 'Test'
    }
    static ProptTypes = {
        name: ProptTypes.string,
        age : ProptTypes.number.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    render() {
        return (
            <div>
                <p>컴포넌트 테스트</p>
                <p>prop {this.props.name}</p>
                <p>ProptTypes {this.props.age}</p>
                <p>state {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>더하기</button>
            </div>

        )
    }
}

// MyComponent.defaultProps = {
//     name: 'test'
// }
// MyComponent.PropTypes = {
//     name: PropTypes.string
// }
export default MyComponent;