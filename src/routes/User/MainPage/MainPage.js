import React from 'react';
import AddDataButton from '../../../components/AddDataButton/AddDataButton';
import classes from './MainPage.module.scss';
import { useTable } from 'react-table';
import Table from '../../../components/Table/Table';

const Dashboard = () => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'date', // accessor is the "key" in the data
            },
            {
                Header: 'Gluken',
                accessor: 'gluken',
            },
            {
                Header: 'Insuline',
                accessor: 'insuline',
            },
        ],
        []
    );
    const data = React.useMemo(
        () => [
            {
                date: '10.2.2020 15:48',
                gluken: '152.25 mg/dl',
                insuline: '15',
            },
        ],
        []
    );
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
