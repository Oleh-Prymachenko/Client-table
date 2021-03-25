import React from 'react'

import { AddClient } from './AddClient'

export default function addModal({
    setOpenCreateModal,
    setFirstName,
    setLastName,
    setPhone,
    setAvatarUrl,
    openCreateModal,
    firstName,
    lastName,
    phone,
    avatarUrl,
    id,
}) {
    return (
        <div>
            <AddClient
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
    )
}
