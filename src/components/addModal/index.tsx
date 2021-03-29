import React from 'react'

import AddClient from './AddClient'

export default function addModal({
    setOpenCreateModal,
    setFirstName,
    setLastName,
    setPhone,
    openCreateModal,
    firstName,
    lastName,
    phone,
    id,
}) {
    return (
        <div>
            <AddClient
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
    )
}
