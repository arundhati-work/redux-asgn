import React from 'react';
import AddRecords from '../AddRecords/AddRecords';
import UpdateRecords from '../UpdateRecords/UpdateRecords';



export default function CreateUpdate(props) {
  return (
    <div>
        {
            (props.content==='create')? <AddRecords/> : <UpdateRecords passedId={props.passedId} handleClose={props.handleClose}/>
        }
    </div>
  )
}
