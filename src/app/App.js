/**
 * Created by Indra on 4/22/2018.
 */
import React from 'react';
import UserInfo from './components/UserInfo/UserInfo.jsx';
import './App.scss';

const message = 'My first react app';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Indra Jeet',
      branch: 'Computer Science',
    };
  }

  render() {
    return (

            <div>
                <h1>{message}</h1>
                <p>Working fine! :)</p>
                <UserInfo {...this.state}/>
            </div>
    );
  }
}
export default App;
