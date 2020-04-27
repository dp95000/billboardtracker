module.exports = function(sequealize, DataTypes) {

    const Customer = sequealize.define("Customer", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        business_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },


        bill_address: {
            type: DataTypes.STRING,
            allowNull: true,
        },


        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },


        number_signs: {

            type: DataTypes.INTEGER,
            allowNull: false,
                
            },


            signs_rented: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },


            contract_term: {

                type: DataTypes.ENUM,
                values: ["3 months", "6 months", "12 months"],

            },

            monthly_rent: {

                type: DataTypes.INTEGER,
                allowNull: false,
            },

            delinquent_account: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            past_due_payment: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }

        })
        return Customer;

    }