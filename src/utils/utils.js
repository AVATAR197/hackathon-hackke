export const loginFunc = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        fetch("url", { body: { email, password }, method: "POST" })
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
    return new Promise((resolve, reject) => {
        fetch("url", { body: { email, password, repeatPassword }, method: "POST" })
            .then((res) => res.json())
            .then((body) => {
                resolve(body);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
