import https from 'https';

const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
};

const data = JSON.stringify({
    host: 'satyaportfolio-ten.vercel.app',
    key: '0c6a5acebc2d783bf34fb05328fffd51',
    keyLocation: 'https://satyaportfolio-ten.vercel.app/0c6a5acebc2d783bf34fb05328fffd51.txt',
    urlList: [
        'https://satyaportfolio-ten.vercel.app/',
        'https://satyaportfolio-ten.vercel.app/resume',
    ],
});

const req = https.request(options, (res) => {
    console.log(`StatusCode: ${res.statusCode}`);
    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

req.on('error', (error) => {
    console.error(error);
});

req.write(data);
req.end();
