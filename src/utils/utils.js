export const loginFunc = ({ email, password, type }) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
            type: type,
        }),
    };

    return new Promise((resolve, reject) => {
        fetch('url', requestOptions)
            .then((res) => res.json())
            .then((body) => {
                resolve(body);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export const registerFunc = ({ email, password, repeatPassword }) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, repeatPassword }),
    };

    return new Promise((resolve, reject) => {
        fetch('url', requestOptions)
            .then((res) => res.json())
            .then((body) => {
                resolve(body);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export const getUserDetails = ({ id }) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    };

    return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/get-user-details', requestOptions)
            .then((res) => res.json())
            .then((body) => {
                resolve(body);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export const addPatient = (data) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data }),
    };

    return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/add-patient', requestOptions)
            .then((res) => res.json())
            .then((body) => {
                resolve(body);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
