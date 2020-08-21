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
