import { response } from "express"


export const healthCheck = (req, res) => {
    return res.status(200).json({
        status: true,
        message: "The server is up and running",
        err: [],
        data: [],
    });
};
