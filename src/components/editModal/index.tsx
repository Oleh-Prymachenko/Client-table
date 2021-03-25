import React from 'react'

import { EditClient } from './EditClient'

export default function EditModal({
    setOpenEditModal,
    openEditModal,
    setFirstName,
    setLastName,
    setPhone,
    setAvatarUrl,
    setId,
    firstName,
    lastName,
    phone,
    avatarUrl,
    id,
}) {
    return (
        <EditClient
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
    )
}
