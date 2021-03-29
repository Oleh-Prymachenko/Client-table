import React from 'react'
import { useQuery } from 'react-query'

import { queryGetClients } from '../../api/queries'
import { expaneClient } from '../../api/graphqlClients'
import ClientsList from './ClientsList'

const Table = ({
    setId,
    setOpenEditModal,
    setOpenCreateModal,
    setFirstName,
    setLastName,
    setPhone,
}): JSX.Element => {
    const getClient = async () => {
        const response = await expaneClient.request(queryGetClients)
        return response
    }

    const { status, data } = useQuery('clients', getClient)

    const OpenEditFormModal = (e): any => {
        setOpenEditModal(true)
        setOpenCreateModal(false)
        setId(e.target.value)
        setFirstName(e.target.value.fitstName)
        // setLastName(e.target.client.lastName)
        // setPhone(e.target.client.phone)
    }

    return (
        <ClientsList
            OpenEditFormModal={OpenEditFormModal}
            data={data}
            status={status}
        />
    )
}

export default Table
