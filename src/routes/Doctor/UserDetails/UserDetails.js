import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetails } from '../../../utils/utils';
import classes from './UserDetails.module.scss';
import Table from '../../../components/Table/Table';
import { useTable } from 'react-table';
import { getGlykemia } from '../../../utils/utils';
import moment from 'moment';

const UserDetails = () => {
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
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [tableData, setTableData] = useState({});

    const tableInstance = useTable({ columns, data });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    useEffect(() => {
        //fetch the user data using this id
        getUserDetails({ id: id }).then((res) => {
            setTableData({ ...res[0] });
        });
        getGlykemia(id).then((res) => {
            const arr = [];
            res.forEach((e) => {
                arr.push({
                    ...e,
                    date_meassurment: moment(e.date_meassurment).format('L'),
                });
            });
            setData(arr);
        });
    }, [id]);

    return (
        <div className={classes.Wrapper}>
            <table className={classes.table}>
                <tbody>
                    {Object.keys(tableData).map((key, index) => {
                        return (
                            <tr key={index}>
                                <td className={classes.Info}>{key}:</td>
                                <td className={classes.Data}>
                                    {tableData[key]}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
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

export default UserDetails;
