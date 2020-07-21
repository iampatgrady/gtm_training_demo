/*
/   pushGaEvent() safely invokes dataLayer Event API
/   Configure GTM with Custom Event trigger using `ga-event`
*/
var pushGaEvent = function(category, action, label) {
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    'event':'ga-event',
    'ga_event_category': category,
    'ga_event_action' : action,
    'ga_event_label': label
  });
}

/*
/   pushGaEvent() safely invokes dataLayer Event API
/   Configure GTM with Custom Event trigger using `pageview`
*/
var sendGaPageview = function(pagename, servername) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'ga-pageview',
    'server_name': servername,
    'page_name': pagename
  });
}
