import React from 'react'

import EditClient from './EditClient'

export default function EditModal({
    setOpenEditModal,
    openEditModal,
    setFirstName,
    setLastName,
    setPhone,
    setId,
    firstName,
    lastName,
    phone,
    id,
}) {
    return (
        <EditClient
            setOpenEditModal={setOpenEditModal}
            openEditModal={openEditModal}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setPhone={setPhone}
            firstName={firstName}
            lastName={lastName}
            phone={phone}
            id={id}
            setId={setId}
        />
    )
}
