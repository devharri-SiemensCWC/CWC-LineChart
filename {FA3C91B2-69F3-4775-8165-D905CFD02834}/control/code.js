////////////////////////////////////////////
// Initialize the trend control variables for Echart Line Chart
var TrendValueX = [];
var TrendValueY = [];
var SmoothValue;
var dom = document.getElementById('container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};
var option;
option = {
  tooltip: {
    trigger: 'axis'
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      type: 'line',
      smooth: true
    }
  ]
};
if (option && typeof option === 'object') {
  myChart.setOption(option);
}
window.addEventListener('resize', myChart.resize);

////////////////////////////////////////////
// Initialize the custom control, Siemens specific code
WebCC.start(
  // callback function; occurs when the connection is done or failed. 
  // "result" is a boolean defining if the connection was successfull or not.
  function (result) {
    if (result) {
      console.log('connected successfully');
      //initializeTrendControl();
      // Set current values 20 XY-pairs
      setProperty({ key: 'Smooth', value: WebCC.Properties.Smooth });
      setProperty({ key: 'XValue1', value: WebCC.Properties.XValue1 });
      setProperty({ key: 'XValue2', value: WebCC.Properties.XValue2 });
      setProperty({ key: 'XValue3', value: WebCC.Properties.XValue3 });
      setProperty({ key: 'XValue4', value: WebCC.Properties.XValue4 });
      setProperty({ key: 'XValue5', value: WebCC.Properties.XValue5 });
      setProperty({ key: 'XValue6', value: WebCC.Properties.XValue6 });
      setProperty({ key: 'XValue7', value: WebCC.Properties.XValue7 });
      setProperty({ key: 'XValue8', value: WebCC.Properties.XValue8 });
      setProperty({ key: 'XValue9', value: WebCC.Properties.XValue9 });
      setProperty({ key: 'XValue10', value: WebCC.Properties.XValue10 });
      setProperty({ key: 'XValue11', value: WebCC.Properties.XValue11 });
      setProperty({ key: 'XValue12', value: WebCC.Properties.XValue12 });
      setProperty({ key: 'XValue13', value: WebCC.Properties.XValue13 });
      setProperty({ key: 'XValue14', value: WebCC.Properties.XValue14 });
      setProperty({ key: 'XValue15', value: WebCC.Properties.XValue15 });
      setProperty({ key: 'XValue16', value: WebCC.Properties.XValue16 });
      setProperty({ key: 'XValue17', value: WebCC.Properties.XValue17 });
      setProperty({ key: 'XValue18', value: WebCC.Properties.XValue18 });
      setProperty({ key: 'XValue19', value: WebCC.Properties.XValue19 });
      setProperty({ key: 'XValue20', value: WebCC.Properties.XValue20 });
      setProperty({ key: 'YValue1', value: WebCC.Properties.YValue1 });
      setProperty({ key: 'YValue2', value: WebCC.Properties.YValue2 });
      setProperty({ key: 'YValue3', value: WebCC.Properties.YValue3 });
      setProperty({ key: 'YValue4', value: WebCC.Properties.YValue4 });
      setProperty({ key: 'YValue5', value: WebCC.Properties.YValue5 });
      setProperty({ key: 'YValue6', value: WebCC.Properties.YValue6 });
      setProperty({ key: 'YValue7', value: WebCC.Properties.YValue7 });
      setProperty({ key: 'YValue8', value: WebCC.Properties.YValue8 });
      setProperty({ key: 'YValue9', value: WebCC.Properties.YValue9 });
      setProperty({ key: 'YValue10', value: WebCC.Properties.YValue10 });
      setProperty({ key: 'YValue11', value: WebCC.Properties.YValue11 });
      setProperty({ key: 'YValue12', value: WebCC.Properties.YValue12 });
      setProperty({ key: 'YValue13', value: WebCC.Properties.YValue13 });
      setProperty({ key: 'YValue14', value: WebCC.Properties.YValue14 });
      setProperty({ key: 'YValue15', value: WebCC.Properties.YValue15 });
      setProperty({ key: 'YValue16', value: WebCC.Properties.YValue16 });
      setProperty({ key: 'YValue17', value: WebCC.Properties.YValue17 });
      setProperty({ key: 'YValue18', value: WebCC.Properties.YValue18 });
      setProperty({ key: 'YValue19', value: WebCC.Properties.YValue19 });
      setProperty({ key: 'YValue20', value: WebCC.Properties.YValue20 });
      // Subscribe for value changes
      WebCC.onPropertyChanged.subscribe(setProperty);
    }
    else {
      console.log('connection failed');
    }
  },
  // contract (see also manifest.json)
  {
    // Methods
    methods: {
    },
    // Events
    events: [],
    // Properties
    properties: {
      Smooth: true,
      XValue1: 1,
      XValue2: 1,
      XValue3: 1,
      XValue4: 1,
      XValue5: 1,
      XValue6: 1,
      XValue7: 1,
      XValue8: 1,
      XValue9: 1,
      XValue10: 1,
      XValue11: 1,
      XValue12: 1,
      XValue13: 1,
      XValue14: 1,
      XValue15: 1,
      XValue16: 1,
      XValue17: 1,
      XValue18: 1,
      XValue19: 1,
      XValue20: 1,
      YValue1: 1,
      YValue2: 1,
      YValue3: 1,
      YValue4: 1,
      YValue5: 1,
      YValue6: 1,
      YValue7: 1,
      YValue8: 1,
      YValue9: 1,
      YValue10: 1,
      YValue11: 1,
      YValue12: 1,
      YValue13: 1,
      YValue14: 1,
      YValue15: 1,
      YValue16: 1,
      YValue17: 1,
      YValue18: 1,
      YValue19: 1,
      YValue20: 1,
    }
  },
  // placeholder to include additional Unified dependencies (not used in this example)
  [],
  // connection timeout
  10000
);

// This is a callback function that is called every time a contract property changes. The function forwards the change to 
// other functions so you can see the new value in the control.
// - data: object containing a key and a value property. The "key" contains the name of the changed contract property and 
//         the "value" contains the new value.
function setProperty(data) {
  console.log('onPropertyChanged ' + data.key);  // uncomment this line to check whether data is incoming in the browser console from WinCC Unified
  switch (data.key) {
    case 'Smooth':
      updateSmooth(data.value);
      break;
    case 'XValue1':
      updateValueX1(data.value);
      break;
    case 'XValue2':
      updateValueX2(data.value);
      break;
    case 'XValue3':
      updateValueX3(data.value);
      break;
    case 'XValue4':
      updateValueX4(data.value);
      break;
    case 'XValue5':
      updateValueX5(data.value);
      break;
    case 'XValue6':
      updateValueX6(data.value);
      break;
    case 'XValue7':
      updateValueX7(data.value);
      break;
    case 'XValue8':
      updateValueX8(data.value);
      break;
    case 'XValue9':
      updateValueX9(data.value);
      break;
    case 'XValue10':
      updateValueX10(data.value);
      break;
    case 'XValue11':
      updateValueX11(data.value);
      break;
    case 'XValue12':
      updateValueX12(data.value);
      break;
    case 'XValue13':
      updateValueX13(data.value);
      break;
    case 'XValue14':
      updateValueX14(data.value);
      break;
    case 'XValue15':
      updateValueX15(data.value);
      break;
    case 'XValue16':
      updateValueX16(data.value);
      break;
    case 'XValue17':
      updateValueX17(data.value);
      break;
    case 'XValue18':
      updateValueX18(data.value);
      break;
    case 'XValue19':
      updateValueX19(data.value);
      break;
    case 'XValue20':
      updateValueX20(data.value);
      break;
    case 'YValue1':
      updateValueY1(data.value);
      break;
    case 'YValue2':
      updateValueY2(data.value);
      break;
    case 'YValue3':
      updateValueY3(data.value);
      break;
    case 'YValue4':
      updateValueY4(data.value);
      break;
    case 'YValue5':
      updateValueY5(data.value);
      break;
    case 'YValue6':
      updateValueY6(data.value);
      break;
    case 'YValue7':
      updateValueY7(data.value);
      break;
    case 'YValue8':
      updateValueY8(data.value);
      break;
    case 'YValue9':
      updateValueY9(data.value);
      break;
    case 'YValue10':
      updateValueY10(data.value);
      break;
    case 'YValue11':
      updateValueY11(data.value);
      break;
    case 'YValue12':
      updateValueY12(data.value);
      break;
    case 'YValue13':
      updateValueY13(data.value);
      break;
    case 'YValue14':
      updateValueY14(data.value);
      break;
    case 'YValue15':
      updateValueY15(data.value);
      break;
    case 'YValue16':
      updateValueY16(data.value);
      break;
    case 'YValue17':
      updateValueY17(data.value);
      break;
    case 'YValue18':
      updateValueY18(data.value);
      break;
    case 'YValue19':
      updateValueY19(data.value);
      break;
    case 'YValue20':
      updateValueY20(data.value);
      break;
  }
}

// Updates the value shown by the TrendControl whenever it is changed, e.g. by a WinCC Unified tag or script.
// This function will be called by "setProperty" whenever the contract property Value is changed.
// - value: number that contains the new value to be shown in the TrendControl.
function updateSmooth(value) {
  SmoothValue = value;
}
function updateValueX1(value) {
  TrendValueX[0] = value;
  updateTrend();
}
function updateValueX2(value) {
  TrendValueX[1] = value;
  updateTrend();
}
function updateValueX3(value) {
  TrendValueX[2] = value;
  updateTrend();
}
function updateValueX4(value) {
  TrendValueX[3] = value;
  updateTrend();
}
function updateValueX5(value) {
  TrendValueX[4] = value;
  updateTrend();
}
function updateValueX6(value) {
  TrendValueX[5] = value;
  updateTrend();
}
function updateValueX7(value) {
  TrendValueX[6] = value;
  updateTrend();
}
function updateValueX8(value) {
  TrendValueX[7] = value;
  updateTrend();
}
function updateValueX9(value) {
  TrendValueX[8] = value;
  updateTrend();
}
function updateValueX10(value) {
  TrendValueX[9] = value;
  updateTrend();
}
function updateValueX11(value) {
  TrendValueX[10] = value;
  updateTrend();
}
function updateValueX12(value) {
  TrendValueX[11] = value;
  updateTrend();
}
function updateValueX13(value) {
  TrendValueX[12] = value;
  updateTrend();
}
function updateValueX14(value) {
  TrendValueX[13] = value;
  updateTrend();
}
function updateValueX15(value) {
  TrendValueX[14] = value;
  updateTrend();
}
function updateValueX16(value) {
  TrendValueX[15] = value;
  updateTrend();
}
function updateValueX17(value) {
  TrendValueX[16] = value;
  updateTrend();
}
function updateValueX18(value) {
  TrendValueX[17] = value;
  updateTrend();
}
function updateValueX19(value) {
  TrendValueX[18] = value;
  updateTrend();
}
function updateValueX20(value) {
  TrendValueX[19] = value;
  updateTrend();
}
function updateValueY1(value) {
  TrendValueY[0] = value;
  updateTrend();
}
function updateValueY2(value) {
  TrendValueY[1] = value;
  updateTrend();
}
function updateValueY3(value) {
  TrendValueY[2] = value;
  updateTrend();
}
function updateValueY4(value) {
  TrendValueY[3] = value;
  updateTrend();
}
function updateValueY5(value) {
  TrendValueY[4] = value;
  updateTrend();
}
function updateValueY6(value) {
  TrendValueY[5] = value;
  updateTrend();
}
function updateValueY7(value) {
  TrendValueY[6] = value;
  updateTrend();
}
function updateValueY8(value) {
  TrendValueY[7] = value;
  updateTrend();
}
function updateValueY9(value) {
  TrendValueY[8] = value;
  updateTrend();
}
function updateValueY10(value) {
  TrendValueY[9] = value;
  updateTrend();
}
function updateValueY11(value) {
  TrendValueY[10] = value;
  updateTrend();
}
function updateValueY12(value) {
  TrendValueY[11] = value;
  updateTrend();
}
function updateValueY13(value) {
  TrendValueY[12] = value;
  updateTrend();
}
function updateValueY14(value) {
  TrendValueY[13] = value;
  updateTrend();
}
function updateValueY15(value) {
  TrendValueY[14] = value;
  updateTrend();
}
function updateValueY16(value) {
  TrendValueY[15] = value;
  updateTrend();
}
function updateValueY17(value) {
  TrendValueY[16] = value;
  updateTrend();
}
function updateValueY18(value) {
  TrendValueY[17] = value;
  updateTrend();
}
function updateValueY19(value) {
  TrendValueY[18] = value;
  updateTrend();
}
function updateValueY20(value) {
  TrendValueY[19] = value;
  updateTrend();
}

function updateTrend() {
  myChart.setOption({
    xAxis: {
      data: TrendValueX
    },
    series: [
      {
        data: TrendValueY,
        smooth: SmoothValue
      }
    ]
  });
}