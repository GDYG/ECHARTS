import React, {Component} from 'react';
// import $ from 'jquery';
import echarts from 'echarts';
import Child from './Child.js'

// const Parents = React.createContext('aaa')
const {Provider, Consumer} = React.createContext('aaa')
class New2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        };
        // this.textInput = React.createRef()
    }
    componentDidMount() {
       
        // var myEchart = echarts.init(document.getElementById('main'))
         // 指定图表的配置项和数据
        //  var option = {
        //     title: {
        //         text: 'ECharts 入门示例'
        //     },
        //     tooltip: {},
        //     legend: {
        //         data:['销量']
        //     },
        //     xAxis: {
        //         data: []
        //     },
        //     yAxis: {},
        //     series: [{
        //         name: '销量',
        //         type: 'bar',
        //         data: []
        //     }]
        // };

        // 使用刚指定的配置项和数据显示图表。
        // var data1 = ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        // var data2 = [5, 20, 36, 10, 10, 20]
        // myEchart.setOption(option);
        // myEchart.showLoading();
        //  setTimeout(()=> {
        //     myEchart.hideLoading()
        //     myEchart.setOption({
        //         xAxis: {
        //             data: data1
        //         },
        //         series: [{
        //             name: '销量',
        //             data: data2
        //         }]
        //     });
        //  }, 2000)

        // myEchart.setOption({
        //     xAxis: {
        //         type: 'category',
        //         data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
        //     },
        //     legend: {
        //         data:['2015','2016','2017']
        //     },
        //     yAxis: {},
        //     series: [
        //         {
        //             type: 'bar',
        //             name: '2015',
        //             data: [89.3, 92.1, 94.4, 85.4]
        //         },
        //         {
        //             type: 'bar',
        //             name: '2016',
        //             data: [95.8, 89.4, 91.2, 76.9]
        //         },
        //         {
        //             type: 'bar',
        //             name: '2017',
        //             data: [97.7, 83.1, 92.5, 78.1]
        //         }
        //     ]
        // })

        // myEchart.setOption({
        //     legend: {},
        //     dataset: {
        //         source: [
        //             ['product', '2015', '2016', '2017'],
        //             ['1月', 15, 14, 17],
        //             ['2月', 11, 13, 10],
        //             ['3月', 14, 15, 16],
        //             ['4月', 15, 17, 20]
        //         ]
        //     },
        //     xAxis: {
        //         type: 'category'
        //     },
        //     yAxis: {},
        //     series: [
        //        {type: 'bar'},
        //        {type: 'bar'},
        //        {type: 'bar'}
        //     ]
        // })

        
        // myEchart.setOption({
        //     legend: {},
        //     tooltip: {},
        //     dataset: {
        //         // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
        //         // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
        //         dimensions: ['product', '2015', '2016', '2017'],
        //         source: [
        //             {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
        //             {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
        //             {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
        //             {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
        //         ]
        //     },
        //     xAxis: {type: 'category'},
        //     yAxis: {},
        //     series: [
        //         {type: 'bar'},
        //         {type: 'bar'},
        //         {type: 'bar'}
        //     ]
        // })

        // myEchart.setOption({
        //     legend: {
        //     },
        //     tooltip: {},
        //     dataset: {
        //         source: [
        //             ['product', '2012', '2013', '2014', '2015'],
        //             ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
        //             ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
        //             ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
        //         ],
        //         sourceHeader: true
        //     },
        //     xAxis: [
        //         {type: 'category', gridIndex: 0},
        //         {type: 'category', gridIndex: 1}
        //     ],
        //     yAxis: [
        //         {gridIndex: 0},
        //         {gridIndex: 1}
        //     ],
        //     grid: [
        //         {bottom: '55%'},
        //         {top: '55%'}
        //     ],
        //     series: [
        //         // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
        //         {type: 'bar', seriesLayoutBy: 'row'},
        //         {type: 'bar', seriesLayoutBy: 'row'},
        //         {type: 'bar', seriesLayoutBy: 'row'},
        //         // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
        //         {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        //         {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        //         {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        //         {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
        //     ]
        // })

        // myEchart.setOption({
        //     dataset: {
        //         source: [
        //             ['score', 'amount', 'product'],
        //             [89.3, 58212, 'Matcha Latte'],
        //             [57.1, 78254, 'Milk Tea'],
        //             [74.4, 41032, 'Cheese Cocoa'],
        //             [50.1, 12755, 'Cheese Brownie'],
        //             [89.7, 20145, 'Matcha Cocoa'],
        //             [68.1, 79146, 'Tea'],
        //             [19.6, 91852, 'Orange Juice'],
        //             [10.6, 101852, 'Lemon Juice'],
        //             [32.7, 20112, 'Walnut Brownie']
        //         ]
        //     },
        //     xAxis: {},
        //     yAxis: {type: 'category'},
        //     series: [
        //         {
        //             type: 'bar',
        //             encode: {
        //                 x: 1,
        //                 y: 2
        //             }
        //         }
        //     ]
        // })
        // myEchart.on('click', function(params) {
        //     console.log(params)
        // })

        // var obj = {
        //     name: ''
        // }

        // obj = new Proxy(obj, {
        //     get(target, prop) {
        //         return target[prop]
        //     },
        //     set(target, prop, val) {
        //         target[prop] = val
        //         return target[prop]
        //     }
        // })

        // setTimeout(()=> {
        //     obj.name = 'anyahui'
        //     console.log(obj.name)
        // }, 3000)

        // console.log(this.textInput.current.state)
        // console.log(this.telInput)
        
    }
    
    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <div id='main' style={{width: '600px', height: '400px'}}></div>
                <br />
                <br />
                <br />
                {/* <Child ref={el => this.telInput = el} /> */}
                <Provider value='bbb'>
                    <Child Consumer={Consumer}/>
                </Provider>
            </div>
        );
    }
}

export default New2;