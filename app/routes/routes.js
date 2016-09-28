'use strict';

const router = [{
          method: 'GET',
          path:'/', 
          handler: function (request, reply) {
              return reply('hello world');
          }
      },
      {
          method: 'GET',
          path:'/hello', 
          handler: function (request, reply) {
              return reply('hello again');
          }
      }];

module.exports = router;