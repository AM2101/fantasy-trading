import React, { useState } from 'react';
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, CandleSeries, LineSeries, SplineSeries, RangeAreaSeries, HiloOpenCloseSeries, HiloSeries, RangeTooltip, Crosshair, Tooltip, DateTime, Trendlines, Export, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator } from '@syncfusion/ej2-react-charts';
import '../../App.css';
import { chartData } from './Data';

function Graph() {
  const [seriesType, setSeriesType] = useState('Candle');

  const primaryxAxis = {
    valueType: 'DateTime',
    majorGridLines: { width: 0 },
    majorTickLines: { color: 'transparent' }
};
const primaryyAxis = {
    labelFormat: 'n0',
    majorTickLines: { width: 0 } 
};

  const crosshair = { enable: true };
    const periodselector = [
        { text: '1M', interval: 1, intervalType: 'Minutes' },
        { text: '5M', interval: 5, intervalType: 'Minutes' },
        { text: '1M', interval: 1, intervalType: 'Months' }, { text: 'YTD' },
        { text: '1Y', interval: 1, intervalType: 'Years' },
        { text: '2Y', interval: 2, intervalType: 'Years', selected: true }, { text: 'All' }
    ];

  return (
    <div className="App">
      <div>
        <select value={seriesType} onChange={(e) => setSeriesType(e.target.value)}>
          <option value="Candle">Candlestick</option>
          <option value="Line">Line</option>
          <option value="Spline">Spline</option>
          <option value="RangeArea">Range Area</option>
          <option value="HiloOpenClose">Hilo Open Close</option>
          <option value="Hilo">Hilo</option>
        </select>
      </div>

      <StockChartComponent id='stockcharts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} crosshair={crosshair} periods={periodselector} tooltip={{enable:true}} 
        enableSelector={true}
        enablePeriodSelector={true} height='100%' title='Dilip Stock Price'>
        <Inject services={[ CandleSeries, LineSeries, SplineSeries, RangeAreaSeries, HiloOpenCloseSeries, HiloSeries, RangeTooltip, Crosshair, Tooltip, DateTime, Trendlines, Export, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator ]}/>
        <StockChartSeriesCollectionDirective>
          <StockChartSeriesDirective dataSource={chartData} type={seriesType} xName='x' animation={{ enable: true }}>
            
          </StockChartSeriesDirective>
        </StockChartSeriesCollectionDirective>
      </StockChartComponent>
    </div>
  );
}

export default Graph;


// import { CandleSeries, Crosshair, DateTime,Inject, LineSeries, StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
// import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
// import '../../App.css';
// import { chartData } from './Data';
// function Graph() {
//    return (
//     <div className="App">
//       <StockChartComponent title='Stock Price Analysis' crosshair={{enable:true, lineType:'Both'}} 
//         primaryXAxis={{
//           crosshairTooltip:{enable:true}
//         }}
//         tooltip={{enable:true}} 
//         enableSelector={false}
//         // periods={[
//         //  { text: '12H', interval: 12, intervalType: 'Hours', selected: true }
//         // ]}
//         enablePeriodSelector={true}>
//       <StockChartSeriesCollectionDirective>
//         <StockChartSeriesDirective dataSource={chartData} type='Candle' xName='x'>
//         </StockChartSeriesDirective>
//       </StockChartSeriesCollectionDirective>
//       <Inject services={[ DateTime, Tooltip, Crosshair,  CandleSeries,LineSeries, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]}/>
//       </StockChartComponent>
//     </div>
//   );
// }

// export default Graph;
// ReactDOM.render(<App />, document.getElementById("charts"));
// ReactDOM.render(<App />, document.getElementById("charts"));
// ReactDOM.render(<App />, document.getElementById("charts"));
// ReactDOM.render(<App />, document.getElementById("charts"));



// import React, { useEffect, useRef, useState } from 'react';
// import { createChart } from 'lightweight-charts';

// function Graph() {
//   const container = useRef();

//   // useEffect(() => {
//   //   // Configuration object
//   //   const config = {
//   //     autosize: true,
//   //     symbol: 'AAPL',
//   //     timezone: 'Etc/UTC',
//   //     theme: 'light',
//   //     style: 1,
//   //     locale: 'en',
//   //     enable_publishing: false,
//   //     hide_side_toolbar: false,
//   //     allow_symbol_change: true,
//   //     details: true,
//   //     hotlist: true,
//   //     calendar: false,
//   //     show_popup_button: true,
//   //     popup_width: '1000',
//   //     popup_height: '650',
//   //     support_host: 'https://www.tradingview.com',
//   //     toolbar_bg: '#f1f3f6',
//   //     enabled_features: ['hide_left_toolbar_by_default', 'keep_left_toolbar_visible_on_small_screens', 'volume_force_overlay', 'side_toolbar_in_fullscreen_mode']
//   //   };
    

//   //   // Create chart with config
//   //   const chart = createChart(container.current, config);

//   //   // Other chart setup...
//   // }, []);



//   // const [symbol, setSymbol] = useState(true);

//   // Step 1: Fetch Data and Display Chart
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('http://localhost:8081/stockdata/Dilip');
//         const rawData = await res.json();

//         // Format raw data
//         const formattedData = rawData.map(item => ({
//           time: new Date(`${item['1/25/2022']} ${item['10:50:00 AM']}`).getTime() / 1000,
//           open: parseFloat(item['35964.4']),
//           high: parseFloat(item['35964.4__1']),
//           low: parseFloat(item['35908.52']),
//           close: parseFloat(item['35922.24']),
//           volume: parseFloat(item['31.63878']),
//         }));

//         // Sort data by time
//         const sortedData = formattedData.sort((a, b) => a.time - b.time);

//         return sortedData;
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         return [];
//       }
//     };

//     const displayChart = async () => {
//       const chartProperties = {
//         width: 900,
//         height: 575,
//         timeScale: {
//           timeVisible: true,
//           secondsVisible: true,
//         },
//       };

//       const containerId = 'tv_chart_container';
//       const domElement = document.getElementById(containerId);
//       if (!domElement) return;

//       const chart = createChart(domElement, chartProperties);
//       const candleseries = chart.addCandlestickSeries();
//       const klinedata = await fetchData();
//       candleseries.setData(klinedata);
//     };

//     displayChart();
//   }, []);


//   return (
//     <>
    
//     <div className="tradingview-widget-container" id="tv_chart_container" style={{ height: "100%" }} ref={container}></div>
//     </>
//   );
// }

// export default Graph;




// import React, { useEffect, useRef, memo, useState } from 'react';

// function Graph() {
//   const container = useRef();
//   const [symbol, setSymbol] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('http://localhost:8081/stockdata/Dilip');
//         const data = await res.json();
//         if (data && data.length > 0) {
//           const convertedData = data.map(item => ({
//             date: `${item['1/25/2022']}T${item['10:50:00 AM']}`,
//             open: parseFloat(item['35964.4']),
//             high: parseFloat(item['35964.4__1']),
//             low: parseFloat(item['35908.52']),
//             close: parseFloat(item['35922.24']),
//             volume: parseFloat(item['31.63878'])
//           }));
//           setSymbol(JSON.stringify(convertedData));
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (!symbol) return;

//     const script = document.createElement("script");
//     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//       {
//         "autosize": true,
//         "datafeed": {
//           "symbol": "${symbol}",
//           "data": ${symbol}
//         },
//         "symbol": "${symbol}", // Change the symbol here if necessary
//         "interval": "D", // Change the interval if necessary (D for daily)
//         "container_id": "tv_chart_container",
//         "library_path": "/charting_library/", // Change this path if necessary
//         "locale": "en",
//         "disabled_features": [],
//         "enabled_features": [],
//         "charts_storage_url": "https://saveload.tradingview.com",
//         "charts_storage_api_version": "1.1",
//         "client_id": "tradingview.com",
//         "user_id": "public_user_id",
//         "theme": "light",
//         "timezone": "Etc/UTC",
//         "referral_id": "2588",
//         "overrides": {
//           "paneProperties.background": "#131722",
//           "paneProperties.vertGridProperties.color": "#363c4e",
//           "paneProperties.horzGridProperties.color": "#363c4e",
//           "symbolWatermarkProperties.transparency": 90,
//           "scalesProperties.textColor": "#AAA",
//           "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
//           "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f'
//         }
//       }`;
//     container.current.appendChild(script);
//   }, [symbol]);

//   return (
//     <div className="tradingview-widget-container" id="tv_chart_container" style={{height:"100%"}} ref={container}>
//       <div className="tradingview-widget-container__widget"></div>
//     </div>
//   );
// }

// export default memo(Graph);
