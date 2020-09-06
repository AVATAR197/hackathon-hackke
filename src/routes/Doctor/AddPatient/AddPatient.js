import React, { useReducer, useState } from 'react';
import Swal from 'sweetalert2';
import classes from './AddPatient.module.scss';
import HospitalImage from '../../../assets/hospital.jpg';
import Button from '../../../components/UI/Button/Button';
import { addPatient } from '../../../utils/utils';

const defaultState = {};

const reducer = (state, action) => {
    //todo this can be simplyfied like return {[action.type]: action.text}
    switch (action.type) {
        case 'first_name':
            return { ...state, firstname: action.text };
        case 'last_name':
            return { ...state, lastname: action.text };
        case 'birth_number':
            return { ...state, birthnumber: action.text };
        case 'email':
            return { ...state, email: action.text };
        case 'tel_number':
            return { ...state, tel_number: action.text };
        case 'diabetes_type':
            return { ...state, diabetes_type: action.text };
        case 'birthdate':
            return { ...state, birthdate: action.text };
        default:
            return;
    }
};

const AddPatient = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure you want to add the new user?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!',
        }).then((result) => {
            if (result.value) {
                //run the addPatient function from utils folder and show the message + show loader... when you get response from server then display the message
                addPatient({ ...state });
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    };

    const inputTypeHandler = (type, e) => {
        dispatch({ type: type, text: e.target.value });
    };

    return (
        <div className={classes.Wrapper}>
            <img src={HospitalImage} alt="" />
            <h1>Add the user</h1>
            <form className={classes.FormWrapper} onSubmit={handleFormSubmit}>
                <section>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        onChange={(e) => inputTypeHandler('first_name', e)}
                        type="text"
                        name="first_name"
                    />
                </section>
                <section>
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        onChange={(e) => inputTypeHandler('last_name', e)}
                        type="text"
                        name="last_name"
                    />
                </section>
                <section>
                    <label htmlFor="birth_number">Birth number</label>
                    <input
                        onChange={(e) => inputTypeHandler('birth_number', e)}
                        type="text"
                        name="birth_number"
                    />
                </section>
                <section>
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={(e) => inputTypeHandler('email', e)}
                        type="text"
                        name="email"
                    />
                </section>
                <section>
                    <label htmlFor="tel_number">Tel. number</label>
                    <input
                        onChange={(e) => inputTypeHandler('tel_number', e)}
                        type="text"
                        name="tel_number"
                    />
                </section>
                <section>
                    <label htmlFor="diabetes_type">Diabetes type</label>
                    <input
                        onChange={(e) => inputTypeHandler('diabetes_type', e)}
                        type="text"
                        name="diabetes_type"
                    />
                </section>
                <section>
                    <label htmlFor="birthdate">Birthdate</label>
                    <input
                        onChange={(e) => inputTypeHandler('birthdate', e)}
                        type="text"
                        name="birthdate"
                    />
                </section>
                <Button type="submit">Add the user</Button>
            </form>
        </div>
    );
};

export default AddPatient;
