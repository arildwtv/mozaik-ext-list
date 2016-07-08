import request from 'superagent';
import Promise from 'bluebird';
import cache   from 'memory-cache';
import config  from './config';
import jp      from 'jsonpath';
require('superagent-bluebird-promise');

/**
 * @param {Mozaik} mozaik
 */
const client = mozaik => {
    mozaik.loadApiConfig(config);

    const methods = {
        list(params) {
            const {
                url,
                pathText
            } = params;

            return request.get(url)
                .promise()
                .then(res => {
                    const json = JSON.parse(res.text);
                    const texts = jp.query(json, pathText);
                    
                    return { items: texts };
                })
                .catch(err => {
                    console.error(err, err.stack);
                });
        }
    };

    return methods;
};

export default client;
