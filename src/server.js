const { serverHttp, app } = require('../config/http');

var exphbs  = require('express-handlebars');

var hbs = exphbs.create({ /* config */ });

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

require('../config/websocket');

app.use('/', require('./routes'));

serverHttp.listen(3000, () => console.log('⚡️ Server is running on PORT 3000'));
