import React from 'react'
import { useForm } from 'react-hook-form'

export default function Model({
    setFirstName,
    setLastName,
    setPhone,
    setAvatarUrl,
    firstName,
    lastName,
    phone,
    avatarUrl,
    openEditModal,
    handleUpdateClient,
}): JSX.Element {
    const { register, handleSubmit, errors } = useForm()

    const showHideModal = openEditModal
        ? 'edit-modal display-block'
        : 'edit-modal display-none'

    const required = 'This field is required'
    const maxLength = 'Your input exceed maximum length'
    const minLength = 'Your input exceed minimum length'

    const errorMessage = (error) => (
        <div className="uncorrect-response">{error}</div>
    )

    return (
        <>
            {openEditModal && (
                <div className={showHideModal}>
                    <div className="modal-fixed">
                        <form onSubmit={handleSubmit(handleUpdateClient)}>
                            <input
                                type="text"
                                placeholder="firstname"
                                name="firstname"
                                value={firstName}
                                ref={register({
                                    required: true,
                                    maxLength: 18,
                                    minLength: 2,
                                })}
                                onChange={(
                                    e: React.FormEvent<HTMLInputElement>
                                ) => setFirstName(e.currentTarget.value)}
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
                                value={lastName}
                                ref={register({
                                    required: true,
                                    maxLength: 18,
                                    minLength: 2,
                                })}
                                onChange={(
                                    e: React.FormEvent<HTMLInputElement>
                                ) => setLastName(e.currentTarget.value)}
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
                                value={phone}
                                ref={register({
                                    required: true,
                                    maxLength: 15,
                                    minLength: 8,
                                })}
                                onChange={(
                                    e: React.FormEvent<HTMLInputElement>
                                ) => setPhone(e.currentTarget.value)}
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
                                name="id"
                                ref={register}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Edit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
