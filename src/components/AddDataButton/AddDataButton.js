import React, { useState } from 'react';
import moment from 'moment';
import Swal from 'sweetalert2';
import classes from './AddDataButton.module.scss';
import Button from '../UI/Button/Button';
import { setGlykemia } from '../../utils/utils';

const AddData = () => {
    const handleSubmit = (gluken, inzuline) => {
        //toto sa posle do DB spolu s udajmi
        let date = moment().format('YYYY-MM-DD');

        const payload = {
            date_meassurment: date,
            value_glykem: gluken,
            units_inzulin: inzuline,
            id_patient: '1',
        };

        setGlykemia(payload).then((res) => {
            if (res.status === 'success') {
                alert('success');
            }
        });
    };

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
