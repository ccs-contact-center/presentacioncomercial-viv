import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";
import { Bar } from "react-chartjs-2";

const optionsBar = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        min: 0,
        scaleLabel: {
          display: true,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 10
        },
        ticks: {
          min: 0,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 14
        },
        gridLines: {
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        min: 0,
        scaleLabel: {
          display: true,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 10
        },
        ticks: {
          min: 0,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 14
        },
        gridLines: {
          display: false
        }
      }
    ]
  }
};

class BarChart extends Component {
  static defaultProps = {
    data: [0, 0, 0]
  };

  getData(dataProp) {
    var data = {
      labels: ["2018", "2019", "2020"],
      datasets: [
        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.6)",
            "rgba(192,3,39,0.7)",
            "rgba(50,50,50,0.8)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                data={
                  isVisible ? () => this.getData(this.props.data) : [0, 0, 0]
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class BarChartDoble extends Component {
  static defaultProps = {
    data1: [0, 0, 0],
    data2: [0, 0, 0]
  };

  getData(dataProp) {
    var data = {
      labels: ["2018", "2019", "2020"],
      datasets: [
        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.6)",
            "rgba(192,3,39,0.7)",
            "rgba(50,50,50,0.8)"
          ],
          data: dataProp[0]
        },

        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.6)",
            "rgba(192,3,39,0.7)",
            "rgba(50,50,50,0.8)"
          ],
          data: dataProp[1]
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                data={
                  isVisible ? () => this.getData(this.props.data) : [0, 0, 0]
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}
export { BarChart, BarChartDoble };
