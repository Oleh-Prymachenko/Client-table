import React from 'react'
import { useQueryClient, useMutation } from 'react-query'

import { expaneClient } from '../../api/graphqlClients'
import { updateClient } from '../../api/mutations'
import { IForUpdate } from '../../types/interfaces'
import Form from './Form'

interface IForm {
    setFirstName: string
    setLastName: string
    setPhone: string
    setAvatarUrl: string
    firstName: string
    lastName: string
    phone: string
    avatarUrl: string
    id: string
    openEditModal: boolean
    setOpenEditModal: boolean
    setId: string
}

export const EditClient = ({
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
}): JSX.Element => {
    const queryClient = useQueryClient()

    const variablesForUpdate: IForUpdate = {
        id,
        firstName,
        lastName,
        phone,
        avatarUrl,
    }

    const updateClients = async () => {
        const response = await expaneClient.request(
            updateClient,
            variablesForUpdate
        )
        console.log(JSON.stringify(response, undefined, 2))
    }

    const updateClientMutuation = useMutation(updateClients, {
        onSuccess: () => queryClient.invalidateQueries('clients'),
    })

    const handleUpdateClient = (data) => {
        setOpenEditModal(false)
        updateClientMutuation.mutate(data, {
            onSuccess: () => {
                setId('')
                setFirstName('')
                setLastName('')
                setPhone('')
            },
        })
    }

    return (
        <Form
            handleUpdateClient={handleUpdateClient}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setPhone={setPhone}
            setAvatarUrl={setAvatarUrl}
            openEditModal={openEditModal}
            firstName={firstName}
            lastName={lastName}
            phone={phone}
            avatarUrl={avatarUrl}
        />
    )
}
