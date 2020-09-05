import React from 'react';
import classes from './MainPage.module.scss';
import { useTable } from 'react-table';

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
                    <button
                        value={cell.row.values.name}
                        onClick={() =>
                            alert(
                                'todo --> navigate to the details of the user'
                            )
                        }
                    >
                        Details
                    </button>
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
            <div className={classes.TableWrapper}>
                <table {...getTableProps()}>
                    <thead>
                        {
                            // Loop over the header rows
                            headerGroups.map((headerGroup) => (
                                // Apply the header row props
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {
                                        // Loop over the headers in each row
                                        headerGroup.headers.map((column) => (
                                            // Apply the header cell props
                                            <th {...column.getHeaderProps()}>
                                                {
                                                    // Render the header
                                                    column.render('Header')
                                                }
                                            </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </thead>
                    {/* Apply the table body props */}
                    <tbody {...getTableBodyProps()}>
                        {
                            // Loop over the table rows
                            rows.map((row) => {
                                // Prepare the row for display
                                prepareRow(row);
                                return (
                                    // Apply the row props
                                    <tr {...row.getRowProps()}>
                                        {
                                            // Loop over the rows cells
                                            row.cells.map((cell) => {
                                                // Apply the cell props
                                                return (
                                                    <td
                                                        {...cell.getCellProps()}
                                                    >
                                                        {
                                                            // Render the cell contents
                                                            cell.render('Cell')
                                                        }
                                                    </td>
                                                );
                                            })
                                        }
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MainPage;
