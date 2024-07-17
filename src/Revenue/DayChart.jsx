/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
  },
};



const DayChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Product One',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },

      {
        name: 'Product Two',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
    ],
  });

  return (
    <div className="col-span-12 rounded-sm px-5 pt-7.5 pb-5 sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="sm:gap-5">
          <div className="flex gap-2">
          <div>
            <span className="mt-2 mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-blue-800">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-blue-800"></span>
            </span>
          </div>
            <div className="">
              <p className="font-semibold text-xl text-blue-800">Total Revenue</p>
              <p className="text-sm font-medium text-gray-500">12.04.2024 - 12.07.2024</p>
            </div>
          </div>
          <div className="flex gap-2 min-w-47.5">
          <div>
          <span className="mt-2 mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-green-800">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-green-800"></span>
            </span>
          </div>
            <div className="">
              <p className="font-semibold text-xl text-green-800">Total Sales</p>
              <p className="text-sm text-gray-500 font-medium">12.04.2024 - 12.07.2024</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default DayChart;
