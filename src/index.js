let choo = require('choo');
let html = require('choo/html');
let css = require('sheetify');

let store = require('./store/mainStore');

let layout = require('./templates/_layout');
let homepage = require('./templates/homepage');
let cats = require('./templates/cats/cats');
let shopping = require('./templates/shopping');
let checkout = require('./templates/checkout/checkout');

let app = choo()

app.use((state, emitter) => store(state, emitter));

app.route('/', (state, emit) => layout(homepage, state, emit));
app.route('/cats', (state, emit) => layout(cats, state, emit));
app.route('/shopping', (state, emit) => layout(shopping, state, emit));
app.route('/checkout', (state, emit) => layout(checkout, state, emit));

app.mount('div');
