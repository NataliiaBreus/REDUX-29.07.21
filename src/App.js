import { connect } from 'react-redux';

function App(props) {
  const { step, count, dispatch } = props;
  const increment = () => {
    const action = { type: 'increment' };
    dispatch(action);
  };
  const decrement = () => {
    const action = { type: 'decrement' };
    dispatch(action);
  };
  const onStepChange = ({target: { value }}) => {
const action = { type: 'setStep', newStep: Number(value) };
dispatch(action);
  };
  return (
    <div> 
      <h1>Current count: {counter}</h1>
    <input type='number' value={step} onChange={onStepChange} />
      <button onClick = {decrement}>-</button>
      <button onClick = {increment}>+</button>
    </div>
  );
}

const mapStateToProps = state => ({ count: state.count, step: state.step });

/* 
const withProps = connect(mapStateToProps);
const ComponentWithProps = withProps(App);
export default ComponentWithProps;
*/

export default connect(mapStateToProps)(App);
