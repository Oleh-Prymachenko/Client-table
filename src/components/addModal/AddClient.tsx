import React from 'react'
import { useQueryClient, useMutation } from 'react-query'

import Form from './Form'
import { expaneClient } from '../../api/graphqlClients'
import { createClient } from '../../api/mutations'
import { IForAdd } from '../../types/interfaces'

interface IForm {
    setOpenCreateModal: any
    openCreateModal: any
    setFirstName: any
    setLastName: any
    setPhone: any
    setAvatarUrl: any
    firstName: string
    lastName: string
    phone: string
    avatarUrl: string
    id: string
}

export const AddClient = ({
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
}: IForm): JSX.Element => {
    const queryClient = useQueryClient()

    const variablesForAdd: IForAdd = {
        id,
        firstName,
        lastName,
        phone,
        avatarUrl,
    }

    const addClients = async () => {
        const response = await expaneClient.request(
            createClient,
            variablesForAdd
        )
        console.log(JSON.stringify(response, undefined, 2))
        return response
    }

    const addClientMutuation = useMutation(addClients, {
        onSuccess: () => queryClient.invalidateQueries('clients'),
    })

    const handleNewClient = (data: any): void => {
        addClientMutuation.mutate(data, {
            onSuccess: () => {
                setFirstName('')
                setLastName('')
                setPhone('')
                setAvatarUrl('')
                console.log(data)
                setOpenCreateModal(false)
            },
        })
    }

    return (
        <Form
            handleNewClient={handleNewClient}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setPhone={setPhone}
            setAvatarUrl={setAvatarUrl}
            openCreateModal={openCreateModal}
            firstName={firstName}
            lastName={lastName}
            phone={phone}
            avatarUrl={avatarUrl}
        />
    )
}
