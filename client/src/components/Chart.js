import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({ ChartData, name }) => {
  const calculateAverage = (total, count) => count === 0 ? 0 : total / count;

  let data = [];
  let chartTitle = 'Car Sales in Thousands';

  if (name) {
    // Filtering and calculating average sales for a specific manufacturer
    const manufacturerData = ChartData.filter(entry => entry.Manufacturer.includes(name));
    const salesByYear = {
      FY22: [],
      FY23: [],
      FY24: []
    };
    const countByYear = {
      FY22: 0,
      FY23: 0,
      FY24: 0
    };

    manufacturerData.forEach(entry => {
      salesByYear.FY22.push(parseFloat(entry["FY22"]));
      salesByYear.FY23.push(parseFloat(entry["FY23"]));
      salesByYear.FY24.push(parseFloat(entry["FY24"]));
      countByYear.FY22++;
      countByYear.FY23++;
      countByYear.FY24++;
    });

    const averageSalesByYear = {
      FY22: calculateAverage(salesByYear.FY22.reduce((acc, curr) => acc + curr, 0), countByYear.FY22).toFixed(0),
      FY23: calculateAverage(salesByYear.FY23.reduce((acc, curr) => acc + curr, 0), countByYear.FY23).toFixed(0),
      FY24: calculateAverage(salesByYear.FY24.reduce((acc, curr) => acc + curr, 0), countByYear.FY24).toFixed(0)
    };

    data = [averageSalesByYear.FY22, averageSalesByYear.FY23, averageSalesByYear.FY24];
    chartTitle = `Car Sales in Thousands - ${name}`;
  } else {
    // Calculating average sales for all manufacturers
    const manufacturerSalesFY22 = {};
    const manufacturerSalesFY23 = {};
    const manufacturerSalesFY24 = {};
    const manufacturerCountFY22 = {};
    const manufacturerCountFY23 = {};
    const manufacturerCountFY24 = {};

    ChartData.forEach(entry => {
      const manufacturer = entry["Manufacturer"];
      const salesFY22 = parseFloat(entry["FY22"]);
      const salesFY23 = parseFloat(entry["FY23"]);
      const salesFY24 = parseFloat(entry["FY24"]);

      manufacturerSalesFY22[manufacturer] = (manufacturerSalesFY22[manufacturer] || 0) + salesFY22;
      manufacturerSalesFY23[manufacturer] = (manufacturerSalesFY23[manufacturer] || 0) + salesFY23;
      manufacturerSalesFY24[manufacturer] = (manufacturerSalesFY24[manufacturer] || 0) + salesFY24;

      manufacturerCountFY22[manufacturer] = (manufacturerCountFY22[manufacturer] || 0) + 1;
      manufacturerCountFY23[manufacturer] = (manufacturerCountFY23[manufacturer] || 0) + 1;
      manufacturerCountFY24[manufacturer] = (manufacturerCountFY24[manufacturer] || 0) + 1;
    });

    const manufacturerAverageFY22 = {};
    const manufacturerAverageFY23 = {};
    const manufacturerAverageFY24 = {};

    Object.keys(manufacturerSalesFY22).forEach(manufacturer => {
      manufacturerAverageFY22[manufacturer] = calculateAverage(manufacturerSalesFY22[manufacturer], manufacturerCountFY22[manufacturer]);
      manufacturerAverageFY23[manufacturer] = calculateAverage(manufacturerSalesFY23[manufacturer], manufacturerCountFY23[manufacturer]);
      manufacturerAverageFY24[manufacturer] = calculateAverage(manufacturerSalesFY24[manufacturer], manufacturerCountFY24[manufacturer]);
    });

    const averageFY22 = (Object.values(manufacturerAverageFY22).reduce((acc, curr) => acc + curr, 0) / Object.keys(manufacturerAverageFY22).length).toFixed(0);
    const averageFY23 = (Object.values(manufacturerAverageFY23).reduce((acc, curr) => acc + curr, 0) / Object.keys(manufacturerAverageFY23).length).toFixed(0);
    const averageFY24 = (Object.values(manufacturerAverageFY24).reduce((acc, curr) => acc + curr, 0) / Object.keys(manufacturerAverageFY24).length).toFixed(0);

    data = [averageFY22, averageFY23, averageFY24];
  }

  const chartData = {
    series: [{
      name: 'Sales',
      data: data
    }],
    options: {
      chart: {
        type: 'bar',
        height: 20,
      },
      plotOptions: {
        bar: {
          borderRadius: 2,
          horizontal: true,
        }
      },
      fill: {
        colors: ['#FFA500']
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['FY22', 'FY23', 'FY24'],
        labels: {
          style: {
            colors: '#FFFFFF'
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#FFFFFF'
          }
        }
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "K";
          }
        }
      },
      title: {
        text: chartTitle, // Set the chart title dynamically
        floating: true,
        offsetY: 5,
        align: 'center',
        style: {
          color: '#FFFFFF'
        }
      },
      theme: {
        mode: 'dark'
      }
    }
  };

  return (
    <>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height="100%" />
    </>
  );
};

export default ApexChart;
