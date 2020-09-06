import React, { useEffect, useState } from 'react';
import AddDataButton from '../../../components/AddDataButton/AddDataButton';
import classes from './MainPage.module.scss';
import { useTable } from 'react-table';
import Table from '../../../components/Table/Table';
import { getGlykemia, setGlykemia } from '../../../utils/utils';
import moment from 'moment';

const Dashboard = () => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'date_meassurment', // accessor is the "key" in the data
            },
            {
                Header: 'Glyken',
                accessor: 'value_glykem',
            },
            {
                Header: 'Insuline',
                accessor: 'units_inzulin',
            },
        ],
        []
    );
    const [data, setData] = useState([]);

    useEffect(() => {
        getGlykemia('1').then((res) => {
            console.log(res);
            const arr = [];
            res.forEach((e) => {
                arr.push({
                    ...e,
                    date_meassurment: moment(e.date_meassurment).format('L'),
                });
            });
            setData(arr);
        });
    }, []);

    const tableInstance = useTable({ columns, data });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

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
                setData((prevState) => {
                    return [...prevState, { ...payload }];
                });
            }
        });
    };

    return (
        <div className={classes.Wrapper}>
            <h1>Main Page</h1>
            <Table
                getTableProps={getTableProps}
                getTableBodyProps={getTableBodyProps}
                headerGroups={headerGroups}
                rows={rows}
                prepareRow={prepareRow}
            />
            <div className={classes.AddDataButtonWrapper}>
                <AddDataButton handleSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default Dashboard;
