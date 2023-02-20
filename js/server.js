const express = require("express");
const helmet = require("helmet");

const app = express();

helmet({
    crossOriginResourcePolicy: false,
});