/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var express = require("express");
var bodyParser = require("body-parser");
const mailchimp = require("@mailchimp/mailchimp_marketing");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

//BEGIN MAILCHIMP
mailchimp.setConfig({
  apiKey: "418cab9a056798621dba231cca696763-us5",
  server: "us5",
});

const listId = "a27d6572df";

//POST - Signup Route
app.post("/mailchimpApi", async function (req, res) {
  if (!req.body) {
    res.redirect("/failed.html");
    return;
  }
  const mailchimpResponse = await mailchimp.lists.addListMember(listId, {
    email_address: req.body.email,
    status: "subscribed",
  });

  res.json({
    email: req.body.email,
    success: "post call succeed!",
    url: mailchimpResponse,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
