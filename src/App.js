import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Clock from './components/Clock/Clock';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => (<div><h1>Welcome home</h1></div>)
const Homes = () => (<div><h1>Youre homes</h1></div>)

function App() {
  const activities = [
    {
      timestamp: new Date().getTime(),
      text: "Ate lunch",
      user: {
        id: 1, name: 'Nate',
        avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
      },
      comments: [{ from: 'Ari', text: 'Me too!' }]
    },
    {
      timestamp: new Date().getTime(),
      text: "Woke up early for a beautiful run",
      user: {
        id: 2, name: 'Ari',
        avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
      },
      comments: [{ from: 'Nate', text: 'I am so jealous' }]
    },
  ]

  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/homes" component={Homes} />
      </div>
    </Router>
    // <div className="notificationsFrame">
    //   <div className="panel">
    //     <Clock />
    //     <Header title='Timeline' />
    //     <Content activities={activities} />
    //     <Header title='Profile' />
    //     <Header />
    //     <Header title='Chat' />
    //     Strana 153 knjige 30 dana react
    //   </div>
    // </div>
  );
}

export default App;