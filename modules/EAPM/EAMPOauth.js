/*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
var EAMPOauth=(function(){var redirectUrlOnCompletion="";return{startOauthAuthentication:function(url,onCompleteRedirect){redirectUrlOnCompletion=onCompleteRedirect;window.open(url,"_blank","width=600,height=400,centerscreen=1,resizable=1");},handleOauthComplete:function(e){var data=JSON.parse(e.data);if(data.result){if(!data.hasRefreshToken){alert("The application is unable to work in offline mode. Please sign out and sign in again.");}}else{alert("Unable to connect to the data source");}
document.location=redirectUrlOnCompletion;}};})();window.addEventListener("message",EAMPOauth.handleOauthComplete);