import React, { useState } from 'react'
import './App.css'

import Table from '../components/table/Table'
import AddModel from '../components/addModal'
import EditModal from '../components/editModal'

function App() {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [id, setId] = useState<string>('')
    const [openEditModal, setOpenEditModal] = useState<boolean>(false)
    const [openCreateModal, setOpenCreateModal] = useState<boolean>(false)

    return (
        <div className="App">
            <div className="header">
                <button
                    type="button"
                    onClick={() =>
                        openCreateModal
                            ? setOpenCreateModal(false)
                            : setOpenCreateModal(true)
                    }
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Create client
                </button>
                <AddModel
                    setOpenCreateModal={setOpenCreateModal}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setPhone={setPhone}
                    openCreateModal={openCreateModal}
                    firstName={firstName}
                    lastName={lastName}
                    phone={phone}
                    id={id}
                />
            </div>
            <div className="flex justify-center mt-8">
                <Table
                    setId={setId}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setPhone={setPhone}
                    setOpenEditModal={setOpenEditModal}
                    setOpenCreateModal={setOpenCreateModal}
                />
                <EditModal
                    setOpenEditModal={setOpenEditModal}
                    openEditModal={openEditModal}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setPhone={setPhone}
                    setId={setId}
                    firstName={firstName}
                    lastName={lastName}
                    phone={phone}
                    id={id}
                />
            </div>
        </div>
    )
}

export default App

// - ???Your input exceed minimum length??? - it???s not clear for the user what is minimum length from this message [UX]
// - When pressing on ???Edit??? button, popup without any data in form is opened and it???s not possible to close it in any way [LOGIC]
// - TypeScript was not used for the most of application [CODE]
// - Naming can be improved for better code readability, watch the typos - `updateClientMutuation`, `idVarible`, etc. [CODE]
// - It would be good to extract fetch data functions into separate `api.ts` file to decouple view from business logic [CODE]
