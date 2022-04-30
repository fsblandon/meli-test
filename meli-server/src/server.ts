process.env.NODE_CONFIG_DIR = __dirname + '/configs';

import 'dotenv/config';
import App from './index';
import IndexRoute from './routes/index';

const app = new App([new IndexRoute()]);

app.listen();