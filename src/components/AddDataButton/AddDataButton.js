import React, { useState } from 'react';
import moment from 'moment';
import Swal from 'sweetalert2';
import classes from './AddDataButton.module.scss';
import Button from '../UI/Button/Button';
import { setGlykemia } from '../../utils/utils';

const AddData = ({ handleSubmit }) => {
    const show = async () => {
        const { value: formValues } = await Swal.fire({
            html:
                '<label>Gluken</label>' +
                '<input id="swal-input1" class="swal2-input" autoComplete="off">' +
                '<label>Inzuline</label>' +
                '<input id="swal-input2" class="swal2-input" autoComplete="off">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value,
                ];
            },
        });

        if (formValues) {
            handleSubmit(formValues[0], formValues[1]);
        }
    };

    return (
        <>
            <Button onClick={show} className={classes.button}>
                Add data
            </Button>
        </>
    );
};

export default AddData;
