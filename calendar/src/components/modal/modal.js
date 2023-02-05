import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from "react";
<Calendar onChange={setDate} value={date} />


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Basic() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = useState("")
    const [allData, setAllData] = useState([])
    const [show, setShow] = useState(false)
    const [editIndex, setEditIndex] = useState()


    const handleAdd = () => {
        if (name.length !== 0) {
            setAllData(newData => [...newData, name])
            setName("")
        }
    }

    const handleUpdate = () => {
        allData.splice(editIndex, 1, name)
        setAllData([...allData])
        setShow(false)
        setName("")
    }
    const handleDelete = (index) => {
        allData.splice(index, 1)
        setAllData([...allData])
    }

    const handleEdit = (i) => {
        setName(allData[i])
        setShow(true)
        setEditIndex(i)
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                    {!show ? <button onClick={handleAdd}>Add</button> : <button onClick={handleUpdate}>Update</button>}
                    {allData.map((val, i) =>

                        <div>
                            <h1>{val}</h1>
                            <button className="edit" onClick={() => handleEdit(i)} >Edit</button>
                            <button className="delete" onClick={() => handleDelete(i)}>Delete</button>
                        </div>
                    )
                    }

                </Box>
            </Modal>
        </div>
    );
}