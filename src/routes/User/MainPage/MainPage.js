import React from 'react';
import AddDataButton from '../../../components/AddDataButton/AddDataButton';
import classes from './MainPage.module.scss';
import { useTable } from 'react-table';

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
                gluken: '152.25 g/mol',
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
            <AddDataButton />
        </div>
    );
};

export default Dashboard;
