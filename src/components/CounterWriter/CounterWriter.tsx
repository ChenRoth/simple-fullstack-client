import React from 'react';
import { connect } from 'react-redux';
import { putCounterAction } from '../../actions';

interface ICounterWriterProps {
    setValue(value: number): void;
}

class _CounterWriter extends React.Component<ICounterWriterProps> {
    render() {
        const {setValue} = this.props;

        return (
            <button onClick={() => setValue(10)}>SET COUNTER</button>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setValue: (value: number) => dispatch(putCounterAction(value))
    };
}

export const CounterWriter = connect(undefined, mapDispatchToProps)(_CounterWriter);