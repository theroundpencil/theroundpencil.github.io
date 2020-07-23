

var mydomain = {
   theme: 'dark',
  "graphset": [{
    "type": "wordcloud",
	"background-color":"#0b1011",  
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
          count : "296"
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
			},{
			  text: "word6",
			  count: 7
			},
			{
			  text: "word5",
			  count: 8
			},{
			  text: "word7",
			  count: 9
			},
			{
			  text: "word8",
			  count: 2
			},{
			  text: "word9",
			  count: 1
			},
			{
			  text: "word10",
			  count: 11
			},{
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
}]};


var myskills = {
  type: 'radar',
  theme: 'dark',
  globals: {
    fontFamily: 'PT Sans',
    shadow: false
  },
  backgroundColor: "#0b1011",
  plot: {
    animation: {
      effect: 'ANIMATION_EXPAND_TOP',
      sequence: 'ANIMATION_BY_PLOT_AND_NODE',
      speed: 10,
      delay: 500,
    },
    aspect: 'rose'
  },
  scaleK: {
    aspect: 'circle',
    visible: false
  },
  scaleV: {
    values: '0:25:5',
    guide: {
      lineColor: '#333',
      lineStyle: 'solid',
      lineWidth: '1px'
    },
    item: {
      color: '#333'
    },
    lineColor: '#FFF'
  },
  tooltip: {
    text: '%v studio albums made by %data-band',
    backgroundColor: '#CFF',
    color: '#333',
    fontSize: '14px'
  },
  series: [
    {
      values: [15, 21, 16, 14, 18, 21, 9],
      url: 'http://www.google.com/#q=%data-band',
      target: '_blank',
      backgroundColor: '#0CF',
      dataBand: ['Genesis', 'Rush', 'Pink Floyd', 'King Crimson', 'The Moody Blues', 'Yes', 'Emerson, Lake and Palmer']
    }
  ]
};


function lily(){
	zingchart.MODULESDIR = 'https://cdn.zingchart.com/modules/';
	zingchart.render({
      id: 'mydomains',
      data: mydomain,
      height: 400,
      width: '100%'
    });
	
	zingchart.render({
      id: 'myskills',
      data: myskills,
      height: 400,
      width: '100%'
    });
};



