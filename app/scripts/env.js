module.exports = {
    development: {
        NODE_ENV: "DEV",
        SERVER: {
            IP: "127.0.0.1",
            PORT: 8080
        },
        DATABASE: {
            NAME: "teewa_dev",
            HOST: "localhost",
            PORT: "5432",
            PASSWORD: "123456",
            USERNAME: "ubuntu",
            DIALETIC: "postgres"
        }
    }
};