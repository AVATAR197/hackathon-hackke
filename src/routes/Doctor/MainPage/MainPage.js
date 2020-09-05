import React from 'react';
import classes from './MainPage.module.scss';
import { useTable, useGlobalFilter } from 'react-table';
import GlobalFilter from '../../../components/GlobalSearch/GlobalSearch';
import Button from '../../../components/UI/Button/Button';
import Table from '../../../components/Table/Table';

const MainPage = () => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName', // accessor is the "key" in the data
            },
            {
                Header: 'Second Name',
                accessor: 'secondName',
            },
            {
                Header: 'Date of birth',
                accessor: 'birthdate',
            },
            {
                Header: 'Diabetes type',
                accessor: 'diabetesType',
            },
            {
                Header: 'Details',
                accessor: '',
                Cell: ({ cell }) => (
                    <Button
                        value={cell.row.values.name}
                        onClick={() =>
                            alert(
                                'todo --> navigate to the details of the user'
                            )
                        }
                    >
                        Details
                    </Button>
                ),
            },
        ],
        []
    );
    const data = React.useMemo(
        () => [
            {
                firstName: 'Hello',
                secondName: 'World',
                birthdate: '10.2.2001',
                diabetesType: 2,
            },
            {
                firstName: 'John',
                secondName: 'Krakskf',
                birthdate: '10.2.20545001',
                diabetesType: 1,
            },
            {
                firstName: 'sadfasdf',
                secondName: 'asdfasdf',
                birthdate: '10.2.2001',
                diabetesType: 1,
            },
            {
                firstName: 'Hello',
                secondName: 'World',
                birthdate: '10.2.2001',
                diabetesType: 2,
            },
            {
                firstName: 'Hello',
                secondName: 'World',
                birthdate: '10.2.2001',
                diabetesType: 2,
            },
            {
                firstName: 'Hello',
                secondName: 'World',
                birthdate: '10.2.2001',
                diabetesType: 2,
            },
            {
                firstName: 'Hello',
                secondName: 'World',
                birthdate: '10.2.2001',
                diabetesType: 2,
            },

            {
                firstName: 'Hello',
                secondName: 'World',
                birthdate: '10.2.2001',
                diabetesType: 2,
            },
            {
                firstName: 'Hello',
                secondName: 'World',
                birthdate: '10.2.2001',
                diabetesType: 2,
            },

            {
                firstName: 'Hello',
                secondName: 'World',
                birthdate: '10.2.2001',
                diabetesType: 2,
            },
            {
                firstName: 'Hello',
                secondName: 'World',
                birthdate: '10.2.2001',
                diabetesType: 2,
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter // useGlobalFilter!
    );

    return (
        <div className={classes.Wrapper}>
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <Table
                getTableProps={getTableProps}
                getTableBodyProps={getTableBodyProps}
                headerGroups={headerGroups}
                rows={rows}
                prepareRow={prepareRow}
            />
        </div>
    );
};

export default MainPage;
