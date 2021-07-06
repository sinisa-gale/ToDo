import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Clock from './components/Clock/Clock';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { IndexRoute } from 'react-router';

const Home = () => (<div><h1>Welcome home</h1></div>)
const About = () => (<div><h1>About page</h1></div>)


const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/home" activeClassName="active">
        Home
      </Link>
      <Link className="link" to="/about" activeClassName="active">
        About
      </Link>
    </div >
  )
}

const IndexPage = props => {
  return (
    <div className="app-container">
      <h2>Container goes here</h2>
      <Navbar/>
      <div className="page-container">
        {props.children}
      </div>
    </div>
  )
}

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
        <Navbar />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
    </Router>
    // <div className="notificationsFrame">
    //   <div className="panel">
    //     <Clock />
    //     <Header title='Timeline' />
    //     <Content activities={activities} />
    //     <Header title='Profile' />
    //     <Header />
    //     <Header title='Chat' />
    //     Strana 167 knjige 30 dana react
    //   </div>
    // </div>
  );
}

export default App;