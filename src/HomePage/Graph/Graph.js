import React, { Component } from 'react';
import './Graph.css'
import { Chart } from 'react-google-charts';

let myData = [
	['Skill', 'Proficiency', { role: 'style' }],
    ['HTML, CSS, JavaScript', 9, '#00BFFF'],
    ['React', 9, '#00BFFF'],
    ['Node & Express', 7.5, '#00BFFF'],
    ['Git/Github', 8, '#00BFFF'],
    ['Learning Spanish', 1, '#00BFFF'],
    ['C++', 10, '#00BFFF'],
    ['Java', 8, '#00BFFF'],
    ['Python', 8.5, '#00BFFF']
]

var myOptions = {
    title: 'My Skills',
    titleTextStyle: {
      color: 'black'
    },
    width: '80%',
    height: '800',
    backgroundColor: 'transparent',
    fontSize: '25px',
    fontName: 'Times New Roman',
    animation: {
      startup: true,
      duration: 1000,
      easing: 'out'
    },
    hAxis: {
      textStyle: {
        fontSize: 14,
        color: 'black',
        bold: true,
        italic: false
      }
    },
    vAxis: {
      gridlines: {color: 'black', count: 3},
      textStyle: {
        fontSize: 18,
        color: 'black',
        bold: false,
        italic: false
      },
      titleTextStyle: {
        fontSize: 18,
        color: 'black',
        italic: false
      }
    },
    legend: { position: 'none' }
  };

class Graph extends Component {
    render() {
        return (
            <div data-wow-offset="80" data-wow-delay='.5s' className='chart-wrapper fadeInRight wow'>
                <Chart
				          width={'100%'}
				          chartType="BarChart"
				          loader={<div>Loading Chart</div>}
				          data={myData}
				          options={myOptions}
				          legendToggle
				        />
            </div>
        );
    }
}

export default Graph;