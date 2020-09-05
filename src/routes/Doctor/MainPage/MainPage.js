import React from 'react';
import classes from './MainPage.module.scss';
import { useTable, useGlobalFilter } from 'react-table';
import GlobalFilter from '../../../components/GlobalSearch/GlobalSearch';
import Button from '../../../components/UI/Button/Button';
import Table from '../../../components/Table/Table';
import { useHistory } from 'react-router-dom';

const MainPage = () => {
    const history = useHistory();
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
                accessor: 'id',
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
    const data = React.useMemo(
        () => [
            {
                firstName: 'Hello',
                secondName: 'World',
                birthdate: '10.2.2001',
                diabetesType: 2,
                id: 'kasdjflksdajfkllasjkdflksjdl',
            },
            {
                firstName: 'John',
                secondName: 'Krakskf',
                birthdate: '10.2.20545001',
                diabetesType: 1,
                id: 'kas68s5df4153sd41fsd14f',
            },
            {
                firstName: 'sadfasdf',
                secondName: 'asdfasdf',
                birthdate: '10.2.2001',
                diabetesType: 1,
                id: '5465as2d4f56s41d56f24sd6f41sd',
            },
            {
                firstName: 'Hello',
                secondName: 'World',
                birthdate: '10.2.2001',
                diabetesType: 2,
                id: '652sdfs6d2f5s32d4fsd',
            },
            {
                firstName: 'Hello',
                secondName: 'World',
                birthdate: '10.2.2001',
                diabetesType: 2,
                id: 'kasdjflksdajfkllasjkdflksjdl',
            },
            {
                firstName: 'John',
                secondName: 'Krakskf',
                birthdate: '10.2.20545001',
                diabetesType: 1,
                id: 'kas68s5df4153sd41fsd14f',
            },
            {
                firstName: 'sadfasdf',
                secondName: 'asdfasdf',
                birthdate: '10.2.2001',
                diabetesType: 1,
                id: '5465as2d4f56s41d56f24sd6f41sd',
            },
            {
                firstName: 'Hello',
                secondName: 'World',
                birthdate: '10.2.2001',
                diabetesType: 2,
                id: '652sdfs6d2f5s32d4fsd',
            },
            {
                firstName: 'Hello',
                secondName: 'World',
                birthdate: '10.2.2001',
                diabetesType: 2,
                id: 'kasdjflksdajfkllasjkdflksjdl',
            },
            {
                firstName: 'John',
                secondName: 'Krakskf',
                birthdate: '10.2.20545001',
                diabetesType: 1,
                id: 'kas68s5df4153sd41fsd14f',
            },
            {
                firstName: 'sadfasdf',
                secondName: 'asdfasdf',
                birthdate: '10.2.2001',
                diabetesType: 1,
                id: '5465as2d4f56s41d56f24sd6f41sd',
            },
            {
                firstName: 'Hello',
                secondName: 'World',
                birthdate: '10.2.2001',
                diabetesType: 2,
                id: '652sdfs6d2f5s32d4fsd',
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
