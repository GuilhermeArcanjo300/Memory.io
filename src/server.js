const { serverHttp, app } = require('../config/http');
require('../config/websocket');

app.use('/', require('./routes'));

serverHttp.listen(3000, () => console.log('⚡️ Server is running on PORT 3000'));
