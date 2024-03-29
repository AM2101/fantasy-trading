//HighChart Graph
import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highstock';

function Graph() {
  useEffect(() => {
    const options = {
      title: {
        text: 'Dynamic data in Highcharts Stock'
      },

      xAxis: {
        overscroll: 500000,
        range: 4 * 200000,
        gridLineWidth: 1
      },

      rangeSelector: {
        buttons: [{
          type: 'minute',
          count: 15,
          text: '15m'
        }, {
          type: 'hour',
          count: 1,
          text: '1h'
        }, {
          type: 'all',
          count: 1,
          text: 'All'
        }],
        selected: 1,
        inputEnabled: false
      },

      navigator: {
        series: {
          color: '#000000'
        }
      },

      series: [{
        type: 'candlestick',
        color: '#FF7F7F',
        upColor: '#90EE90',
        lastPrice: {
          enabled: true,
          label: {
            enabled: true,
            backgroundColor: '#FF7F7F'
          }
        },
        data: [] // Initialize with an empty array
      }]
    };

    // Function to generate dummy data
    function generateDummyData(count) {
      const data = [];
      let baseTime = new Date().getTime();

      for (let i = 0; i < count; i++) {
        const open = Math.random() * 100 + 300;
        const close = Math.random() * 100 + 300;
        const high = Math.max(open, close) + Math.random() * 10;
        const low = Math.min(open, close) - Math.random() * 10;

        data.push([
          baseTime + i * 60000, // Increment by 1 minute
          open,
          high,
          low,
          close
        ]);
      }

      return data;
    }

    // Apply the data to the options
    options.series[0].data = generateDummyData(100); // Generate dummy data

    // Create the chart
    Highcharts.stockChart('container', options);
  }, []); // Empty dependency array to run the effect only once on mount

  return <div id="container" className='container-fluid' style={{  height:"100%", width: '100%' }}></div>;
}

export default Graph;




// TradingView Graph
// import React, { useEffect, useRef, memo } from 'react';

// function Graph() {
//   const container = useRef();

//   useEffect(
//     () => {
//       const script = document.createElement("script");
//       script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//       script.type = "text/javascript";
//       script.async = true;
//       script.innerHTML = `
//         {
//           "autosize": true,
//           "symbol": "NASDAQ:AAPL",
//           "interval": "D",
//           "timezone": "Etc/UTC",
//           "theme": "light",
//           "style": "1",
//           "locale": "en",
//           "enable_publishing": false,
//           "allow_symbol_change": true,
//           "calendar": false,
//           "support_host": "https://www.tradingview.com"
//         }`;
//       container.current.appendChild(script);
//     },
//     []
//   );

//   return (
//     <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
//       <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
//       {/* <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div> */}
//     </div>
//   );
// }

// export default memo(Graph);

