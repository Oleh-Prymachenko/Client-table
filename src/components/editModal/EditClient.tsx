import React from 'react'
import { useQueryClient, useMutation } from 'react-query'

import { expaneClient } from '../../api/graphqlClients'
import { PUT_CLIENT } from '../../api/mutations'
import { IForUpdate } from '../../types/interfaces'
import Form from './Form'

export default ({
    setOpenEditModal,
    openEditModal,
    setFirstName,
    setLastName,
    setPhone,
    firstName,
    lastName,
    phone,
    id,
    setId,
}): JSX.Element => {
    const queryClient = useQueryClient()

    const variablesForUpdate: IForUpdate = {
        id,
        firstName,
        lastName,
        phone,
    }

    const updateClient = async () => {
        const response = await expaneClient.request(
            PUT_CLIENT,
            variablesForUpdate
        )
        console.log(JSON.stringify(response, undefined, 2))
    }

    const editClient: any = useMutation(updateClient, {
        onSuccess: () => queryClient.invalidateQueries('clients'),
    })

    const handleUpdateClient = (data) => {
        setOpenEditModal(false)
        editClient.mutate(data, {
            onSuccess: () => {
                setFirstName('')
                setLastName('')
                setPhone('')
                console.log(data)
            },
        })
    }

    if (editClient.isLoading) {
        return <div className="response-status">Editing client...</div>
    }

    if (editClient.isError) {
        return (
            <div className="response-status">
                An error occurred {editClient.error.message}
            </div>
        )
    }

    if (editClient.isSuccess) {
        setTimeout(() => {
            return <div className="response-status">Client edit</div>
        }, 2000)
    }

    return (
        <Form
            handleUpdateClient={handleUpdateClient}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setPhone={setPhone}
            openEditModal={openEditModal}
            setOpenEditModal={setOpenEditModal}
            firstName={firstName}
            lastName={lastName}
            phone={phone}
            id={id}
            setId={setId}
        />
    )
}
