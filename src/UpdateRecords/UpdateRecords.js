import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {editRecord} from '../Slices/recordSlice';

export default function UpdateRecords({passedId, handleClose}) {
    const record = useSelector((state)=> state.records.find((rec)=>rec.id === passedId));
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const dispatch = useDispatch();
    useEffect(()=>{
        if (record){
            setName(record.name);
            setAge(record.age);
        }  
    },[record]);


    const editRecordHandler = (e) => {
        e.preventDefault();
        const id = record.id;
        if ((name !== '') && (age !== '')){
            dispatch(editRecord({id,name,age}));
        }
        else if ((name)&&(age!=='')){  // Age given, name not given
            const oldName = record.name;
            dispatch(editRecord({id,oldName,age}));
        }
        else if ((name!== '')&&(age)){ // Name given, age not given
            const oldAge = record.age;
            dispatch(editRecord({id,name,oldAge}));
        }
        handleClose();
    }

  return (
    <div className='create-record-container'>
        <h2>Update Record</h2>
        <form>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} required/>
            <input type='number' value={age} onChange={(e)=>setAge(e.target.value)} required/>
            <button onClick={editRecordHandler}>Update Record</button>
        </form>
    </div>
  )
}
