import React, { useState, useRef, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import indicatorsAll from 'highcharts/indicators/indicators-all';
import annotationsAdvanced from "highcharts/modules/annotations-advanced";
import stockTools from "highcharts/modules/stock-tools";
import "./Graph.css";
import HighchartsFullscreen from 'highcharts/modules/full-screen';
import { useParams } from 'react-router-dom';

HighchartsFullscreen(Highcharts);
indicatorsAll(Highcharts);
annotationsAdvanced(Highcharts);
stockTools(Highcharts);

// const data = await fetch(
//   'http://localhost:8081/stockdata'
// ).then(response => response.json());

// let time ;

const Graph = () => {
  // const [cryptoData, setCryptoData] = useState([]);
  const { name } = useParams();
  const chartComponentRef = useRef(null);

  
  // const [xAxis, setXAxis] = useState(time);
  const [options, setOptions] = useState({


    // Your initial chart options
    exporting: {
      allowHTML: true,
      buttons: {
        contextButton: {
          menuItems: [{
            text: 'Change Type',
            onclick: function () {
              var chart = this;
              var types = ['line', 'column', 'ohlc', 'candlestick']; // Add other types if needed
              var currentType = chart.series[0].type;
              var nextType = types[(types.indexOf(currentType) + 1) % types.length];
              chart.series[0].update({ type: nextType });
            }
          }, {
            text: 'Full Screen',
            onclick: function () {
              this.fullscreen.toggle();
            }
          }]
        }
      },
      enabled: true
    },
    navigator: {
      enabled: false,

    },
    //   srcollbar: {
    //     enabled: false
    // },

    navigation: {
      buttonOptions: {
        align: 'left',
        verticalAlign: 'top',
        y: 0
      }
    },
    stockTools: {
      gui: {

        enabled: true,
        //   buttons: ['simpleShapes', 'lines', 'crookedLines', 'measure', 'advanced', 'toggleAnnotations', 'separator', 'fullScreen']
        buttons: ['separator', 'separator', 'typeChange', 'separator', 'fullScreen'],
        fullScreen: {
          /**
           * A predefined background symbol for the button.
           *
           * @type   {string}
           */
          symbol: 'fullscreen.svg'
        },
        definitions: {
          typeChange: {

            items: [
              'typeOHLC',
              'typeLine',
              'typeCandlestick',
              // 'typeHollowCandlestick',
              'typeHLC',
              // 'typeHeikinAshi'
            ],
          }
        }
      },

    },


    chart: {
      height: (10.5 / 16 * 100) + '%',
      //   width:'100%',
      // height:"100%",
      renderTo: 'container',
      events: {
        load: function () {
          var chart = this,
            series = this.series[0],
            xAxis = chart.xAxis[0],
            newStart = series.xData[2],
            newEnd = series.xData[6];

          xAxis.setExtremes(newStart, newEnd);
        }
      }
    },

    rangeSelector: {
      dropdown:"always",
      selected: 8,
      allButtonsEnabled: true,
      inputEnabled: false,
      
      buttons: [
        {
          type: 'min',
          count: 1,
          text: '1m',
          title: '1 Min',
          events: {
            click: () => {
              const chart = chartComponentRef.current.chart;
              if (chart) {
                const lastPoint = chart.xAxis[0].dataMax;
                const newMin = lastPoint - (1 * 60 * 1000);


                chart.update({
                  xAxis: {
                    min: newMin,
                    max: lastPoint
                  }
                });
              }

              // time = localStorage.setItem('time',"1min")
            }
          }
        },
        {
          type: 'min',
          count: 1,
          text: '5m',
          title: '5 Min',
          events: {
            click: () => {
              const chart = chartComponentRef.current.chart;
              if (chart) {
                const lastPoint = chart.xAxis[0].dataMax;
                const newMin = lastPoint - (5 * 60 * 1000);

                chart.update({
                  xAxis: {
                    min: newMin,
                    max: lastPoint
                  }
                });
              }
              // time = localStorage.setItem('time',"5min");
            }

          }
        },
        {
          type: 'hour',
          count: 1,
          text: '1H',
          title: '1 Hour',
          dataGrouping: {
            forced: true,
            units: [
              [
                'minute',
                [1, 2, 5, 10, 15, 30]
              ],
              ['hour', [1]],
              [
                'day',
                [1]
              ]
            ]
          },
          events: {
            click: () => {
              // time = localStorage.setItem('time',"1hour");
            }
          }
        },
        {
          type: 'day',
          count: 1,
          text: '1D',
          title: '1 Day',
          dataGrouping: {
            // forced: true,
            // units: [['day', [1]]]
          },
          events: {
            click: () => {
              // time = localStorage.setItem('time',"1day");
            }
          }
        },
        {
          type: 'month',
          count: 1,
          text: '1m',
          title: '1 Month'
        }, 
        {
          type: 'month',
          count: 3,
          text: '3m',
          title: '3 Months'
        },
        {
          type: 'month',
          count: 6,
          text: '6m',
          title: '6 Months'
        }, 
        {
          type: 'year',
          count: 1,
          text: '1y',
          title: '1 Year'
        }, 
        {
          type: 'all',
          text: 'All',
          title: 'All'
        }]
    },

    yAxis: [
      {
        labels: {
          align: "left"
        },
        height: "100%",
        resize: {
          enabled: false
        }
      },
      {
        labels: {
          align: "left"
        },
        top: "80%",
        height: "30%",
        offset: 0
      },
      {
        gridLineWidth: 1
      }
    ],
   

    tooltip: {
      formatter: function () {
        return [''].concat(
          this.points ?
            this.points.map(function (point) {
              return name + `: O<span style=color:${point.color}>` + parseFloat(point.point.plotOpen).toFixed(2) + `</span> H<span style="color:${point.color}">` + parseFloat(point.point.plotHigh).toFixed(2) + `</span> L<span style="color:${point.color}">` + parseFloat(point.point.plotLow).toFixed(2) + `</span> C<span style="color:${point.color}">` + parseFloat(point.point.plotClose).toFixed(2) + '</span>';
            }) : []
        );
      },
      useHTML: true,
      borderWidth: 0,
      shadow: false,
      positioner: function (width, height, point) {
        const chart = this.chart;
        let position;
        if (point.isHeader) {
          position = {
            x: Math.max(
              chart.plotLeft,
              Math.min(
                point.plotX + chart.plotLeft - width / 2,
                chart.chartWidth - width - chart.marginRight
              )
            ),
            y: point.plotY
          };
        } else {
          position = {
            x: point.series.chart.plotLeft,
            y: point.series.yAxis.top - chart.plotTop
          };
        }
        return position;
      }
    },
    series: [
      {
        id: 'actorchart-series',
        type: 'candlestick',
        color: '#f23645',
        upColor: '#089981',
        upLineColor: '#089981',
        lineColor: '#f23645',
        name: "INFY",
        showInNavigator: true,
      }
    ]
  });

  useEffect(() => {
    // console.log(name);
    const fetchData = async () => {

      try {
        const response = await fetch(`http://localhost:8081/Stockdata/${name}`);
        const data = await response.json();
        // console.log(data[0][0].name);
        
        // Update the chart options with new data
        setOptions(prevOptions => ({
          ...prevOptions,
          series: [{
            ...prevOptions.series[0],
            data: data,
          }],
          title: {
            text: `${data[0][0].name}`,
            align:"left",
            style:{
              color:'#4d3a92',
              fontSize: "1.5em",  

            }
          },
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [name]);

//   document.getElementById('dropdown').addEventListener('click', e => {
//     const dropdown = e.target.dataset.dropdown;
//     if (dropdown) {
//         chart.update({
//             rangeSelector: {
//                 dropdown
//             }
//         });
//     }
// });


  // Update tooltip formatter when name changes
  useEffect(() => {

    setOptions(prevOptions => ({
      ...prevOptions,
      tooltip: {
        ...prevOptions.tooltip,
        formatter: function () {
          return [''].concat(
            this.points ?
              this.points.map(function (point) {
                return name + `: O<span style=color:${point.color}>` + parseFloat(point.point.plotOpen).toFixed(2) + `</span> H<span style="color:${point.color}">` + parseFloat(point.point.plotHigh).toFixed(2) + `</span> L<span style="color:${point.color}">` + parseFloat(point.point.plotLow).toFixed(2) + `</span> C<span style="color:${point.color}">` + parseFloat(point.point.plotClose).toFixed(2) + '</span>';
              }) : []
          );
        },
      },
    }));
  }, [name]);



  // const handleChartUpdate = () => {
  //   const chart = chartComponentRef.current.chart;
  //   if (chart) {
  //     // Save the chart options to localStorage
  //     localStorage.setItem('chartOptions', JSON.stringify(chart.options));
  //   }
  // };

  



  return (
    <>
    
      <div className="container" id="container" >

        {/* <button onClick={refreshData}>Refresh Data</button> */}
        <HighchartsReact
          ref={chartComponentRef}
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={options}
          allowChartUpdate
        />
      </div>
    </>
  );
};

export default Graph;
