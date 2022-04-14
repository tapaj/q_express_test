"use strict";

const status = async (req, res, next) => {
    return res.status(200).json({
        message: "Success",
        data: {},
    });
};

module.exports = { status };
