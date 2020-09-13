// Start of LiveChat (www.livechatinc.com) code
var countryCode = "<?php echo $_SESSION['user_ip_info']['ipCountryCode']; ?>";
var codeArray = ['BY', 'BI', 'CF', 'CU', 'CG', 'IR', 'Iraq', 'LB', 'LY', 'KP', 'SO', 'SD', 'SS', 'SY', 'CRIMEA.RU', 'VE', 'YE', 'ZW', 'NI'];
if (codeArray.indexOf(countryCode) === -1) {
  window.__lc = window.__lc || {};
  window.__lc.license = 9563165;
  // window.__lc.group = 8;
  (function () {
    // console.log(2222)
    var lc = document.createElement('script');
    lc.type = 'text/javascript';
    lc.async = true;
    lc.src = (document.location.protocol === 'https:' ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
  })();
}