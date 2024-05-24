const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://outlook.us17.list-manage.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/subscribe/post'
      },
    })
  );
};