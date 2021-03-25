import React, { useState } from 'react'
import './App.css'

import Table from '../components/table/Table'
import AddModel from '../components/addModal'
import EditModal from '../components/editModal'

function App() {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [avatarUrl, setAvatarUrl] = useState<string>('')
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
                    CreateClient
                </button>
                <AddModel
                    setOpenCreateModal={setOpenCreateModal}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setPhone={setPhone}
                    setAvatarUrl={setAvatarUrl}
                    openCreateModal={openCreateModal}
                    firstName={firstName}
                    lastName={lastName}
                    phone={phone}
                    avatarUrl={avatarUrl}
                    id={id}
                />
            </div>
            <div className="flex justify-center mt-8">
                <Table
                    setId={setId}
                    setOpenEditModal={setOpenEditModal}
                    setOpenCreateModal={setOpenCreateModal}
                />
                <EditModal
                    setOpenEditModal={setOpenEditModal}
                    openEditModal={openEditModal}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setPhone={setPhone}
                    setAvatarUrl={setAvatarUrl}
                    setId={setId}
                    firstName={firstName}
                    lastName={lastName}
                    phone={phone}
                    avatarUrl={avatarUrl}
                    id={id}
                />
            </div>
        </div>
    )
}

export default App
