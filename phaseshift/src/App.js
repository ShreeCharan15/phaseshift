import './App.css';
import Qna from './components/QnA'
function App() {
  var i=1;
  return (
    <div className="App">
     <Qna num={i++} question="what is your name" theme="1"/>
     <Qna num={i++} question="what is your DOB" theme="2"/>
     <Qna num={i++} question="what is your fav color" theme="3"/>
    </div>
  );
}

export default App;
