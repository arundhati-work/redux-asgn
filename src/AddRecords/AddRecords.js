import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addRecord} from '../Slices/recordSlice';
import './AddRecords.css';

export default function AddRecords() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const dispatch = useDispatch();

    const addRecordHandler = (e) => {
        e.preventDefault();
        dispatch(addRecord({name,age}));
        setName('');
        setAge('');
    }

  return (
    <div className='create-record-container'>
        <h2>Create a Record</h2>
        <form onSubmit={addRecordHandler}>
            <input value={name} type='text' placeholder='Enter name...' onChange={(e)=>setName(e.target.value)} required/>
            <input value={age} type='number' placeholder='Enter age...' onChange={(e)=>setAge(e.target.value)} required/>
            <button type='submit'>Add Record</button>
        </form>
    </div>
  )
}
