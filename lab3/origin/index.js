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
const inquirer = require("inquirer")
const commander = require("commander")
const uuid = require("uuid")
const vuerouter = require("vue-router")
const awsamplify = require("aws-amplify")
const midwayfaas = require("@midwayjs/faas")
const malagu = require("@malagu/cloud")
//const uglifyjs = require("uglify-js")
const awssdk_ac = require("@smithy/abort-controller")
//const awssdk_cc = require("@aws-sdk/client-cloudwatch")
//const awssdk_ccl = require("@aws-sdk/client-cloudwatch-logs")
//const awssdk_ci = require("@aws-sdk/client-iam")
//const awssdk_cl = require("@aws-sdk/client-lambda")
//const awssdk_cp = require("@aws-sdk/client-pricing")
//const awssdk_cs = require("@aws-sdk/client-s3")
//const awssdk_csns = require("@aws-sdk/client-sns")
//const awssdk_csqs = require("@aws-sdk/client-sqs")
//const awssdk_csts = require("@aws-sdk/client-sts")
//const awssdk_types = require("@aws-sdk/types")
//const awssdk_ls = require("@aws-sdk/lib-storage")

exports.handler = (event, context, callback) => {
  // const eventObj = JSON.parse(event.toString());
  console.log('hello world');
  callback(null, 'hello world');
}
