import './App.css';
import Greeting from './props/Greeting';
import Age from './props/Age';
import User from './props/User';
import ItemList from './props/ItemList';
import Button from './props/Button';
import Welcome from './props/Welcome';
import Profile from './props/Profile';
import Container from './props/Container';
import Status from './props/Status';
import Product from './props/Product';
import MemoizedComponent from './props/MemoizedComponent'








function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Greeting name="Ahmed" />
      <Age age={25} />
      <User user={{
        name: "Mohmead",
        age: 30,
        mail: "Ahmed@gmail.com"
      }}
      />
      <ItemList items={["Apple", "banana", "Cherry"]} />
      <Button onClick={() => alert("Button Clicked")} />
        <Welcome />
        <Profile name="Saead" age={33} />
        <Container content={<p>This is a paragraph.</p>} />
        <Status isOnline={true} />
        <Product name="Laptop" price={999.99} />
        <MemoizedComponent text="This is memoized" />
      </header>
    </div>
  );
}

export default App;
