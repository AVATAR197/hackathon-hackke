import React from 'react';

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

    return <div></div>;
};

export default MainPage;
