import React, { useEffect, useState } from 'react';
import classes from './MainPage.module.scss';
import { useTable, useGlobalFilter } from 'react-table';
import GlobalFilter from '../../../components/GlobalSearch/GlobalSearch';
import Button from '../../../components/UI/Button/Button';
import Table from '../../../components/Table/Table';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const MainPage = () => {
    const history = useHistory();
    const columns = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstname', // accessor is the "key" in the data
            },
            {
                Header: 'Last Name',
                accessor: 'lastname',
            },
            {
                Header: 'Date of birth',
                accessor: 'birthdate',
            },
            {
                Header: 'Diabetes type',
                accessor: 'diabetes_type',
            },
            {
                Header: 'Details',
                accessor: 'id_patient',
                Cell: ({ cell }) => (
                    <Button
                        value={cell.row.values.name}
                        onClick={() =>
                            history.push(
                                `/doctor/patient-details/${cell.value}`
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
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/test', { method: 'GET' })
            .then((res) => res.json())
            .then((body) => {
                const arr = [];
                body.forEach((e) => {
                    arr.push({
                        ...e,
                        birthdate: moment(e.birthdate).format('L'),
                    });
                });
                setData(arr);
            });
    }, []);

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
