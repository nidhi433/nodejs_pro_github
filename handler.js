// handler.js
'use strict';

const add = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello, Serverlesss1!'
    }),
  };
};
module.exports={add}
