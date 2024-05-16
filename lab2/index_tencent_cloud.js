'use strict';
/*
To enable the initializer feature (https://help.aliyun.com/document_detail/156876.html)
please implement the initializer function as below：
exports.initializer = (context, callback) => {
  console.log('initializing');
  callback(null, '');
};
*/

const _ = require('lodash');
const axios = require('axios');
const express = require('express');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const yaml = require('js-yaml');
const qrcode = require('qrcode');
const { encode } = require('blurhash');
const requests = require('requests');
const deno = require("deno")
const koa = require("koa")
const redis = require("redis")
const mongoose = require('mongoose');
const echarts = require("echarts")
const commander = require("commander")
const uuid = require("uuid")
const vuerouter = require("vue-router")
const awsamplify = require("aws-amplify")

exports.main_handler = async (event, context) => {
  console.log("Hello World")
  console.log(event)
  console.log(event["non-exist"])
  console.log(context)
  return event
};