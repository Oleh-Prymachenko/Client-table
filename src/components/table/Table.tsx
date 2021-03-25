import React from 'react'
import { useQuery } from 'react-query'

import { queryGetClients } from '../../api/queries'
import { expaneClient } from '../../api/graphqlClients'
import ClientsList from './ClientsList'

const Table = ({
    setId,
    setOpenEditModal,
    setOpenCreateModal,
}): JSX.Element => {
    const getClients = async () => {
        const response = await expaneClient.request(queryGetClients)
        return response
    }

    const { status, data } = useQuery('clients', getClients)

    const OpenEditFormModal = (e) => {
        setOpenEditModal(true)
        setOpenCreateModal(false)
        setId(e.target.value)
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

// - outer margins can be introduced out of the table [UI]
// - no last grey cell in table header [UI]
// - max-width can be introduced, so not to make table too wide on big monitors [UI]
// - “CreateClient” button named by coder :), but it’s done for the user, so it should be “Create client” [UI]
// - it would be nice to have popup also for add client like it’s done with edit client [UX]
// - When editing network request is in progress, it would be nice to show some visual feedback that something is going on [UX]
// - “Your input exceed minimum length” - it’s not clear for the user what is minimum length from this message [UX]
// - Preferably no CSS should be used aside of TailwindCSS [STYLING]
// - No avatar is shown in table and no ability to added/edit it [LOGIC]
// - When pressing on “Edit” button, popup without any data in form is opened and it’s not possible to close it in any way [LOGIC]
// - TypeScript was not used for the most of application [CODE]
// - No consistency in code formatting, sometimes hard to read - tools like `prettier` should be used [CODE]
// - Naming can be improved for better code readability, watch the typos - `updateClientMutuation`, `idVarible`, etc. [CODE]
// - It would be good to extract fetch data functions into separate `api.ts` file to decouple view from business logic [CODE]
