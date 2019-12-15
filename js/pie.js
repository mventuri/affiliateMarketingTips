var chart = AmCharts.makeChart( "chartdiv", {
  "type": "pie",
  "theme": "No Theme",
  "dataProvider": [ {
    "title": "Competition",
    "value": 7375.5
  }, {
    "title": "Audience",
    "value": 7375.5
  } ],
  "titleField": "title",
  "valueField": "value",
  "labelRadius": 5,

  "radius": "42%",
  "innerRadius": "60%",
  "labelText": "[[title]]",
  "export": {
    "enabled": true
  }
} );