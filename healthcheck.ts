import http from 'http';

const options = {
  host: 'localhost',
  port: process.env.PORT || 3000,
  timeout: 2000,
  path: '/api/health',
};

const request = http.request(options, (res) => {
  process.exit(res.statusCode === 200 ? 0 : 1);
});

request.on('error', function (_err: Error) {
  process.exit(1);
});

request.end();
