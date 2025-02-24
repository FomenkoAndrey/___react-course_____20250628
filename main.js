const App = (props) => {

  const { initialButtonText, initialClassesList, initialHeaderText } = props;

  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClassesList] = React.useState(initialClassesList);

  const onClickHandler = () => {
    setButtonText(`Clicked! ${Math.floor(Math.random() * 100)}`);
    setClassesList('btn');
  }

  return (
      <div>
        <h1>{initialHeaderText}</h1>
        <button onClick={onClickHandler} className={classesList}>{buttonText}</button>
      </div>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <App
        initialButtonText="Click me"
        initialClassesList="btn-info"
        initialHeaderText="Hello React!"
    />
);
