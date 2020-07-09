import React from 'react'
import ReactApexChart from 'react-apexcharts'



class Column extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Count',
          data: [44, 55, 57, 56, 61]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '25%',
              endingShape: 'rounded'
            },
          },
          colors:['#63B7AF'],
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['SVM', 'LR', 'RF', 'DT', 'NN'],
          },
          yaxis: {
            title: {
              text: 'Number of Models'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return  val + " models"
              }
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

    <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
    </div>
      );
    }
  }

  export default Column