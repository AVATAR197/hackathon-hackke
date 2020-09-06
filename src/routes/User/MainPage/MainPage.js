import React, { useEffect, useState } from 'react';
import AddDataButton from '../../../components/AddDataButton/AddDataButton';
import classes from './MainPage.module.scss';
import { useTable } from 'react-table';
import Table from '../../../components/Table/Table';
import { getGlykemia } from '../../../utils/utils';
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
                <AddDataButton />
            </div>
        </div>
    );
};

export default Dashboard;
