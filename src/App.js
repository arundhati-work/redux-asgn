import './App.css';
import Records from './Records/Records';
import CreateUpdate from './CreateUpdate/CreateUpdate';
import React, {useState} from 'react';

function App() {
  const [retreivedId, setRetreivedId] = useState(0);
  const [content,setContent] = useState('create');

  const updateHandler = (id) => {
    setRetreivedId(id);
    setContent('update');
  }

  return (
    <div className="App">
      <h1>Creating records with Redux</h1>
        <div className='container'>
          <CreateUpdate content={content} passedId={retreivedId} handleClose={()=>setContent('create')}/>
          <Records handleUpdate={(Id)=> updateHandler(Id)}/>
        </div>
    </div>
  );
}

export default App;
