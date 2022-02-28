// import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component{
  componentDidMount = async () =>{
    const res = await fetch("/user");
    const bodytext = await res.text();
    console.log(bodytext);
  }
  render(){
    return (
      <div className='App'>
        리액트화면
      </div>
    );
  };
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
