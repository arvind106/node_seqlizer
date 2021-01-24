const Blog = require('../models/Blog');
const config = require("../config/config");

module.exports = {
    list: async function (req, res) {
        Blog.findAll().then(result => {
            if (result.length >= 0) {
                res.status(200).json(
                    {
                        'status': 'success',
                        'statusCode': config.SUCCESS_STATUS_CODE,
                        'message': 'Data found successfully!',
                        'data': result
                    }
                );
            } else {
                res.status(config.NOT_FOUND_STATUS_CODE).json(
                    {
                        'status': 'failed',
                        'statusCode': '404',
                        'message': 'No entries found!',
                    }
                );
            }

        }).catch(err => {
            res.status(config.SERVER_ERROR_STATUS_CODE).json(
                {
                    'status': 'failed',
                    'statusCode': '500',
                    'message': 'Internal server error!',
                    'Error': err
                }
            );
        })
    }
}