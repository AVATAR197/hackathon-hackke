import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetails } from '../../../utils/utils';
import classes from './UserDetails.module.scss';

const UserDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        //fetch the user data using this id
        getUserDetails({ id: id }).then((res) => {
            setData({ ...res[0] });
        });
    }, [id]);

    return (
        <div className={classes.Wrapper}>
            <table>
                <tbody>
                    {Object.keys(data).map((key, index) => {
                        return (
                            <tr key={index}>
                                <td className={classes.Info}>{key}:</td>
                                <td className={classes.Data}>{data[key]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default UserDetails;
