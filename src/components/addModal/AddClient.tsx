import React from 'react'
import { useQueryClient, useMutation } from 'react-query'

import Form from './Form'
import { expaneClient } from '../../api/graphqlClients'
import { POST_CLIENT } from '../../api/mutations'
import { IForCreate } from '../../types/interfaces'

export default ({
    setOpenCreateModal,
    setFirstName,
    setLastName,
    setPhone,
    openCreateModal,
    firstName,
    lastName,
    phone,
    id,
}): JSX.Element => {
    const queryClient = useQueryClient()

    const variablesForCreate: IForCreate = {
        id,
        firstName,
        lastName,
        phone,
    }

    const createClient = async () => {
        const response = await expaneClient.request(
            POST_CLIENT,
            variablesForCreate
        )
        console.log(JSON.stringify(response, undefined, 2))
        return response
    }

    const addClient: any = useMutation(createClient, {
        onSuccess: () => queryClient.invalidateQueries('clients'),
    })

    const handleNewClient = (data: any): void => {
        addClient.mutate(data, {
            onSuccess: () => {
                setFirstName('')
                setLastName('')
                setPhone('')
                console.log(data)
                setOpenCreateModal(false)
            },
        })
    }

    if (addClient.isLoading) {
        return <div className="response-status">Adding client...</div>
    }

    if (addClient.isError) {
        return (
            <div className="response-status">
                An error occurred {addClient.error.message}
            </div>
        )
    }

    if (addClient.isSuccess) {
        setTimeout(() => {
            return <div className="response-status">Client added!</div>
        }, 0)
    }

    return (
        <Form
            handleNewClient={handleNewClient}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setPhone={setPhone}
            openCreateModal={openCreateModal}
            setOpenCreateModal={setOpenCreateModal}
            firstName={firstName}
            lastName={lastName}
            phone={phone}
        />
    )
}
