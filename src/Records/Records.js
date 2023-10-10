import React from 'react';
import './Records.css';
import {useSelector, useDispatch } from 'react-redux';
import { removeRecord } from '../Slices/recordSlice';
import editBtn from '../assets/edit.png';
import deleteBtn from '../assets/trash.png';

export default function Records({handleUpdate}) {
    const records = useSelector((state)=> state.records);
    const dispatch = useDispatch();

    const openUpdateRecord = (id) => {
        handleUpdate(id);
    }

     
  return (
    <div className="records-container">
        <table>
            <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th></th>
                
            </tr>
            {
                records.map((record)=> {
                    return (
                        <tr key={record.id}>
                                <td>{record.name}</td>
                                <td>{record.age}</td>
                                <td><button onClick={() => openUpdateRecord(record.id)}><img src={editBtn} alt="edit"/></button>
                                <button onClick={() => dispatch(removeRecord(record.id))}><img src={deleteBtn} alt="delete"/></button>
                                </td>
                        </tr>
                    )
                })
            }
        </table>
        <div>
        </div>     
    </div>
  )
}
