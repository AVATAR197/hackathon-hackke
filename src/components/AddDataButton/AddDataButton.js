import React, { useState } from 'react';
import moment from 'moment';
import Swal from 'sweetalert2';
import classes from './AddDataButton.module.scss'

const AddData = () => {
    const [data, setData] = useState({
        gluken: null,
        inzuline: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //toto sa posle do DB spolu s udajmi
        let date = moment().format('DD-MM-YYYY hh:mm:ss');
    };

    const show = async () => {
        const { value: formValues } = await Swal.fire({
            html:
                '<label>Gluken</label>'+
                '<input id="swal-input1" class="swal2-input">' +
                '<label>Inzuline</label>'+
                '<input id="swal-input2" class="swal2-input">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value,
                ];
            },
        });

        if (formValues) {
            setData({
                gluken: formValues[0],
                inzuline: formValues[1],
            });
        }
    };

    return (
        <div>
            <button onClick={show} className={classes.button}>Add data</button>
        </div>
    );
};

export default AddData;
