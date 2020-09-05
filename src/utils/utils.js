export const loginFunc = ({ email, password }) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
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
