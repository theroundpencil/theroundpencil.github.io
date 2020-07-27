var mydomain = {
  theme: 'dark',
  "graphset": [{
    "type": "wordcloud",
    "background-color": "#0b1011",
    "options": {
      "style": {
        "tooltip": {
          visible: true,
          text: '%text: %hits Years'
        }
      },
      "words": [{
          text: "time",
          count: "342"
        },
        {
          text: "shampoo",
          count: "296"
        },
        {
          text: "word2",
          count: 4
        },
        {
          text: "word4",
          count: 8
        },
        {
          text: "word3",
          count: 5
        }, {
          text: "word6",
          count: 7
        },
        {
          text: "word5",
          count: 8
        }, {
          text: "word7",
          count: 9
        },
        {
          text: "word8",
          count: 2
        }, {
          text: "word9",
          count: 1
        },
        {
          text: "word10",
          count: 11
        }, {
          text: "word12",
          count: 6
        },
        {
          text: "word13",
          count: 7
        },
        {
          text: "word14",
          count: 4
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
      values: [95, 80, 90, 80, 75, 85, 85, 95],
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
      values: [5, 20, 10, 20, 25, 15, 15, 05],
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