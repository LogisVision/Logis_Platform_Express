// 필요한 라이브러리 불러오는 부분
var express = require('express');
var path = require('path');
const history = require('connect-history-api-fallback');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Express 설정
var app = express();

// EJS View 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Express 확장 설정
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Vue와 연결하기
app.use(history());
app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

module.exports = app;
