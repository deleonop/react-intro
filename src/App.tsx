import React from 'react';
import Button from './UI/Button';
import Clock from './components/Clock';

const App: React.FC = () => {
  return (
    <div>
      {/* <div>
        <Button
          title="Login"
          color="red"
          disabled={false}
        />
        <Button
          title="Sign up"
          color="blue"
          disabled={false}
        />
        <Button
          title="Logout"
          color="black"
        />
      </div> */}
      <div>
        <Clock />
      </div>
    </div>
  );
}

export default App;
