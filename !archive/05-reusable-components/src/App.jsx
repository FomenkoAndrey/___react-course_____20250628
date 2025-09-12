import Button from './Button';

const App = () => {
  return (
    <div>
      <h1>Hello From App Component</h1>
      <Button number={1} text="Submit button" type="button" />
      <Button number={2} text="Reset button" type="button" disabled={false} />
      <Button number={3} text="Cancel button" type="button" disabled={true} />
    </div>
  );
};

export default App;
