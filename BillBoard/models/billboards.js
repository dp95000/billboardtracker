"use strict";
module.exports = (sequelize, DataTypes) => {

    const billboards = sequelize.define("billboards", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: true,
        },

        lat: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        lng: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },


        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },


        size: {
            type: DataTypes.STRING,
            allowNull: true,
        },


        type: {

            type: DataTypes.ENUM,
            VALUES: ["Digital", "Static"],
                
            },


            available: {
                type: DataTypes.ENUM,
                VALUES: ["Yes", "No"],
            },


            sides: {

                type: DataTypes.ENUM,
                values: ["Single-Sided", "Double-Sided", "3-Sided", "4-Sided"],

            },

            sign_no: {

                type: DataTypes.INTEGER,
                allowNull: false,
            },

           

        });
        billboards.associate = models => {
           
        }
        return billboards;

    }