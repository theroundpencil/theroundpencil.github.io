var mydomain = [
	{word:'IIoT', weight: 70},
	{word:'Manufacturing', weight: 50},
	{word:'Analytics', weight: 50},
	{word:'Financial Products', weight: 30},
	{word:'Smart Workplaces', weight: 40},
	{word:'Mobile', weight: 70},
	{word:'SaaS', weight: 80},
	{word:'PaaS', weight: 50},
	{word:'Gamification', weight: 70},
	{word:'Digital Transformation', weight: 50},
	{word:'ALM', weight: 50},
	{word:'Big Data', weight: 70},
	{word:'B2B', weight: 100},
	{word:'B2C', weight: 70},
	{word:'Products', weight: 100},
	{word:'Platforms', weight: 80}
		   ];


var myskills = {
  type: 'hbar',
  backgroundColor: '#0b1011',
  plot: {
    tooltip: {
      borderRadius: '2px',
      borderWidth: '0px'
    },
    valueBox: {

      rules: [{
          "rule": "%v >= 75",
          text: '%kl',
          fontColor: '#FFF',
          fontSize: '12px',
          fontFamily: "Montserrat",
          placement: 'middle',
          visible: true,
        },
        {
          "rule": "%v < 75",
          "placement": "top-in",
          visible: false
        }
      ]
    },
    animation: {
      effect: 13,
      method: 3,
      sequence: 2,
      delay: 1000
    },
    barsSpaceRight: '15px',
    barsSpaceLeft: '15px',
    stacked: true
  },
  plotarea: {
    adjustLayout: true
  },
  scaleX: {
    item: {
      fontColor: '#e8e8e8',
      fontSize: '12px',
      visible: false
    },
    labels: ['Team Leadership', 'Empathy', 'Design Thinking', 'Data Profiency', 'Decision Making', 'Requirements', 'Vision & Strategy', 'Product Management'],
    lineColor: 'transparent',
    tick: {
      visible: false
    }
  },
  scaleY: {
    guide: {
      visible: false
    },
    lineColor: 'transparent',
    tick: {
      visible: false
    },
    visible: false
  },
  tooltip: {
    visible: false
  },
  series: [{
      values: [95, 85, 90, 80, 85, 95, 90, 95],
      backgroundColor: '#E71D36',
      borderRadius: '10px 0px 0px 10px',
      rules: [{
          backgroundColor: '#E71D36',
          rule: '%i === 0'
        },
        {
          backgroundColor: '#2EC4B6',
          rule: '%i === 1'
        },
        {
          backgroundColor: '#FF9F1C',
          rule: '%i === 2'
        },
        {
          backgroundColor: '#973d86',
          rule: '%i === 3'
        },
        {
          backgroundColor: '#14d44e',
          rule: '%i === 4'
        },
        {
          backgroundColor: '#fa44bb',
          rule: '%i === 5'
        },
        {
          backgroundColor: '#4a928d',
          rule: '%i === 6'
        },
        {
          backgroundColor: '#1d4bba',
          rule: '%i === 7'
        }
      ]
    },
    {
      values: [5, 15, 10, 20, 15, 05, 10, 05],
      backgroundColor: '#E71D36',
      borderRadius: '0px 10px 10px 0px',
      rules: [{
          backgroundColor: '#f6abb4',
          rule: '%i === 0'
        },
        {
          backgroundColor: '#b5eee8',
          rule: '%i === 1'
        },
        {
          backgroundColor: '#ffd9a5',
          rule: '%i === 2'
        },
        {
          backgroundColor: '#e7c4e1',
          rule: '%i === 3'
        },
        {
          backgroundColor: '#b4f8c9',
          rule: '%i === 4'
        },
        {
          backgroundColor: '#fdb7e5',
          rule: '%i === 5'
        },
        {
          backgroundColor: '#c1dfdd',
          rule: '%i === 6'
        },
        {
          backgroundColor: '#bacbf4',
          rule: '%i === 7'
        }
      ]
    }

  ]
};


function lily() {

	zingchart.MODULESDIR = 'https://cdn.zingchart.com/modules/';
	zingchart.TOUCHZOOM = 'pinch';
	  zingchart.render({
		id: 'myskills',
		data: myskills,
		height: 500,
		width: '100%'
	  });
	$("#wordCloud").jQWCloud({
	  words: mydomain,
		  minFont: 15,
		  maxFont: 50,
		  fontOffset: 0,
		  showSpaceDIV:false,
		  verticalEnabled:true,
		  cloud_color:null,
		  cloud_font_family:null,
		  spaceDIVColor:'black',
		  padding_left:null,
		  word_common_classes:null
	});

};