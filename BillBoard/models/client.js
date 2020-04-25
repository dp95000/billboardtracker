//This is for update api routes and using ajax calls

module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define("Client", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return Client;
};