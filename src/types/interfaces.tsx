export interface IForCreate {
    id: string
    firstName: string
    lastName: string
    phone: string
}

export interface IForUpdate {
    id: string
    firstName: string
    lastName: string
    phone: string
}

export interface IForm {
    setFirstName: string
    setLastName: string
    setPhone: string
    firstName: string
    lastName: string
    phone: string
    id: string
    openEditModal: boolean
    setOpenEditModal: boolean
    setId: string
}

export interface I {
    setOpenCreateModal: any
    openCreateModal: any
    setFirstName: any
    setLastName: any
    setPhone: any
    firstName: string
    lastName: string
    phone: string
    id: string
}
