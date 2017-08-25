const choo = require('choo');
const html = require('choo/html');
const css = require('sheetify');

const store = require('./store/mainStore');

const layout = require('./templates/_layout');
const homepage = require('./templates/homepage');
const cats = require('./templates/cats/cats');
const shopping = require('./templates/shopping/shopping');
const checkout = require('./templates/checkout/checkout');
const callcops = require('./templates/callcops/callcops');

const app = choo()

app.use((state, emitter) => store(state, emitter));

app.route('/', (state, emit) => layout(homepage, state, emit));
app.route('/cats', (state, emit) => layout(cats, state, emit));
app.route('/shopping', (state, emit) => layout(shopping, state, emit));
app.route('/checkout', (state, emit) => layout(checkout, state, emit));
app.route('/callcops', (state, emit) => layout(callcops, state, emit));

app.route('*', layout.bind(this, homepage));

app.mount('div');
