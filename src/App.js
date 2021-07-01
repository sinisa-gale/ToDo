import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

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
    <div className="notificationsFrame">
      <div className="panel">

        <Header title='Timeline' />
        <Content activities={activities} />
        <Header title='Profile' />
        <Header title='Settings' />
        <Header title='Chat' />
        Strana 42 knjige 30 dana react
      </div>
    </div>
  );
}

export default App;