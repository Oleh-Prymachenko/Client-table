import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form({
    handleNewClient,
    setFirstName,
    setLastName,
    setPhone,
    setAvatarUrl,
    openCreateModal,
    firstName,
    lastName,
    phone,
    avatarUrl,
}): JSX.Element {
    const { register, handleSubmit, errors } = useForm()

    const showHideModal = openCreateModal
        ? 'create-modal display-block'
        : 'create-modal display-none'

    const required = 'This field is required'
    const maxLength = 'Your input exceed maximum length'
    const minLength = 'Your input exceed minimum length'
    const errorMessage = (error) => (
        <div className="uncorrect-response">{error}</div>
    )

    return (
        <div className={showHideModal}>
            <div className="modal-fixed">
                {openCreateModal && (
                    <form onSubmit={handleSubmit(handleNewClient)}>
                        <input
                            type="text"
                            placeholder="firstame"
                            name="firstName"
                            ref={register({
                                required: true,
                                maxLength: 18,
                                minLength: 2,
                            })}
                            value={firstName}
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                setFirstName(e.currentTarget.value)
                            }
                        />
                        {errors.firstname &&
                            errors.firstname.type === 'required' &&
                            errorMessage(required)}
                        {errors.firstname &&
                            errors.firstname.type === 'maxLength' &&
                            errorMessage(maxLength)}
                        {errors.firstname &&
                            errors.firstname.type === 'minLength' &&
                            errorMessage(minLength)}
                        <input
                            type="text"
                            placeholder="lastname"
                            name="lastName"
                            ref={register({
                                required: true,
                                maxLength: 18,
                                minLength: 2,
                            })}
                            value={lastName}
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                setLastName(e.currentTarget.value)
                            }
                        />
                        {errors.lastname &&
                            errors.lastname.type === 'required' &&
                            errorMessage(required)}
                        {errors.lastname &&
                            errors.lastname.type === 'maxLength' &&
                            errorMessage(maxLength)}
                        {errors.lastname &&
                            errors.lastname.type === 'minLength' &&
                            errorMessage(minLength)}
                        <input
                            type="text"
                            placeholder="phone"
                            name="phone"
                            ref={register({
                                required: true,
                                maxLength: 15,
                                minLength: 8,
                            })}
                            value={phone}
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                setPhone(e.currentTarget.value)
                            }
                        />
                        {errors.phone &&
                            errors.phone.type === 'required' &&
                            errorMessage(required)}
                        {errors.phone &&
                            errors.phone.type === 'maxLength' &&
                            errorMessage(maxLength)}
                        {errors.phone &&
                            errors.phone.type === 'minLength' &&
                            errorMessage(minLength)}
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Add
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}
