import { useEffect, useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [currentView, setCurrentView] = useState('About Me');

  // Fires when view is loaded to stay on the current view once the page is refreshed
  useEffect(() => {
    const urlHash = window.location.hash;

    if (urlHash === '#portfolio') {
      setCurrentView('Portfolio')
    }

    if (urlHash === '#resume') {
      setCurrentView('Resume')
    }

    if (urlHash === '#contact-me') {
      setCurrentView('Contact Me')
    }
  }, [])

  return (
    <div className="App">
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
