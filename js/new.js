var mydomain = {
  theme: 'dark',
  "graphset": [{
    "type": "wordcloud",
    "background-color": "#0b1011",
    "options": {
      "style": {
        "tooltip": {
          visible: true,
          text: '%text'
        }
      },
	  animation: {
      effect: 13,
      method: 3,
      sequence: 2,
      delay: 1000
    },
      "words": [{
          text: "IIoT",
          count: 7
        },
        {
          text: "Manufacturing",
          count: 4
        },
        {
          text: "Analytics",
          count: 5
        },
        {
          text: "Financial Products",
          count: 3
        },
        {
          text: "Smart Workplaces",
          count: 3
        }, {
          text: "Mobile",
          count: 7
        },
        {
          text: "SaaS",
          count: 8
        }, {
          text: "PaaS",
          count: 5
        },
        {
          text: "Gamification",
          count: 6
        }, {
          text: "Digital Transformation",
          count: 3
        },
        {
          text: "Asset Lifecycle Management",
          count: 4
        }, {
          text: "Big Data",
          count: 4
        },
        {
          text: "B2B",
          count: 10
        },
        {
          text: "B2C",
          count: 5
        },
		{
          text: "Products",
          count: 11
        }
      ]
    }
  }]
};


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
    id: 'mydomains',
    data: mydomain,
    height: 400,
    width: '100%'
  });

  zingchart.render({
    id: 'myskills',
    data: myskills,
    height: 500,
    width: '100%'
  });
};