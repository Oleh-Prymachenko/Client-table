import React from 'react'

export default function ClientsList({
    OpenEditFormModal,
    data,
    status,
}): JSX.Element {
    if (status === 'loading') {
        return <div>loading...</div>
    }

    if (status === 'error') {
        return <div>error</div>
    }
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead>
                <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        firstName
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        lastName
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        phone
                    </th>
                </tr>
            </thead>
            {data.getClients.map((client) => (
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr key={client.id} onClick={(e) => OpenEditFormModal(e)}>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                            {client.firstName}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                            {client.lastName}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                            {client.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                            <button
                                type="button"
                                value={client.id}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Edit
                            </button>
                        </td>
                    </tr>
                </tbody>
            ))}
        </table>
    )
}
