import React from 'react';
import TelegramLoginButton from 'react-telegram-login';

function App() {
  const handleTelegramResponse = (response) => {
    console.log(response);
  };
  return (
    <div className="App">
      <header className="App-header">yo niga</header>
      <TelegramLoginButton
        dataOnauth={handleTelegramResponse}
        botName="secretapplogin_bot"
      />
    </div>
  );
}

export default App;
