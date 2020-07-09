import  React from 'react';
import ReactApexChart from 'react-apexcharts'



class Pie extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 44, 12],
        options: {
          chart: {
            width : 20,
            type: 'donut',
          },
          plotOptions: {
            pie: {
              donut: {
                size: '85%'
              }
            }
          },
          labels: ["Regression", "Classification", "Clustering"],
          dataLabels: {
            enabled: false
          },
          colors:['#63B7AF', '#ABF0E9', '#8CCBBE'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }, 
      };
    }
    render() {
      return (
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
        </div>
      );
    }
  }

export default Pie