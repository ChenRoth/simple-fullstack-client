import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../store';
import { getCounterAction, getCounterActionSync } from '../../actions';

interface ICounterReaderProps {
    getValue(): void;
    value: number;
}

class _CounterReader extends React.Component<ICounterReaderProps> {
    componentDidMount() {
        const { getValue } = this.props;
        getValue();
    }

    render() {
        const { value } = this.props;
        return (
            <div>
                Current value is {value}
            </div>
        )
    }
}

const mapStateToProps = (state: State) => {
    return {
        value: state.counter,
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        // getValueSync: () => dispatch(getCounterActionSync()),
        getValue: () => dispatch(getCounterAction()),
    }
}

export const CounterReader = connect(mapStateToProps, mapDispatchToProps)(_CounterReader);