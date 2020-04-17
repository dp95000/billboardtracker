module.exports = function(sequealize, DataTypes) {

    const Cumstomer = sequealize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        company: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        signs: {
            type: DataTypes.INTEGER,
            allowNull: false,
                
            },
            contract: {
                type: DataTypes.ENUM,
                values: ["3 months", "6 months", "12 months"],

            },

            rent: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

        })
        return Cumstomer;

    }