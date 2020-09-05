import React, { useReducer, useState } from 'react';
import Swal from 'sweetalert2';
import classes from './AddPatient.module.scss';
import HospitalImage from '../../../assets/hospital.jpg';

// const reducer = useReducer((state, action) => {
//     switch (action.type) {
//         case value:
//             break;

//         default:
//             break;
//     }
// });

const AddPatient = () => {
    const handleFormSubmit = (e) => {
        console.log(e);
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
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    };

    const inputTypeHandler = (type) => {
        switch (type) {
            case 'first_name':
            //set the first name in the reducer
            case 'last_name':
            //set the first name in the reducer
            case 'birth_number':
            //set the first name in the reducer
            default:
                break;
        }
    };

    return (
        <div className={classes.Wrapper}>
            <img src={HospitalImage} alt="" />
            <h1>Add the user</h1>
            <form className={classes.FormWrapper} onSubmit={handleFormSubmit}>
                <section>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        onChange={() => inputTypeHandler('first_name')}
                        type="text"
                        name="first_name"
                    />
                </section>
                <section>
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        onChange={() => inputTypeHandler('last_name')}
                        type="text"
                        name="last_name"
                    />
                </section>
                <section>
                    <label htmlFor="birth_number">Birth number</label>
                    <input
                        onChange={() => inputTypeHandler('birth_number')}
                        type="text"
                        name="birth_number"
                    />
                </section>
                <button type="submit">Add the user</button>
            </form>
        </div>
    );
};

export default AddPatient;
