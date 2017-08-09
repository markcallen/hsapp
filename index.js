var HsApi = require('hsapi');

var config = require('config');

var hs_client_id = config.get('Hootsuite.hs_client_id');
var hs_client_secret = config.get('Hootsuite.hs_client_secret');
var memberId = config.get('Hootsuite.memberId');
var organizationId = config.get('Hootsuite.organizationId');
var username = config.get('Hootsuite.username');
var password = config.get('Hootsuite.password');

/*
var hsapi1 = new HsApi({hs_client_id, hs_client_secret, organizationId});

hsapi1.me().then(function(data) {
  console.log(data);
})
.catch(function(err) {
  console.error(err);
});

var messageId = "4705825557";
var sequenceNumber = 2;

hsapi1.getMessage({messageId, sequenceNumber}).then(function(data) {
  console.log(data);
})
.catch(function(err) {
  console.error(err);
});
*/


/*
hsapi1.socialProfiles().then(function(data) {
  console.log(data.data);
  var twData = data.data.filter(function(elem) {
    return elem.type == "TWITTER";
  });
  console.log(twData);
})
.catch(function(err) {
  console.error(err);
});
*/

var hsapi2 = new HsApi({hs_client_id, hs_client_secret, username, password});
hsapi2.socialProfiles().then(function(data) {
  console.log(data);
})
.catch(function(err) {
  console.error(err);
});

/*
var hsapi3 = new HsApi({hs_client_id, hs_client_secret, organizationId});
hsapi3.socialProfiles().then(function(data) {
  console.log(data);
})
.catch(function(err) {
  console.error(err);
});

var hsapi4 = new HsApi({hs_client_id, hs_client_secret});
hsapi4.me().then(function(data) {
  console.log(data);
})
.catch(function(err) {
  console.error(err);
});*/
