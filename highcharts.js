$(function () {
    $('#container').highcharts({
        title: {
            text: 'Meat Consumption per Person in the United States, 1960-2013',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: Earth Policy Institute',
            x: -20
        },
        xAxis: {
            categories: ['1960', '1970', '1980', '1990', '2000', '2010']
        },
        yAxis: {
            title: {
                text: 'Kilograms'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'kg'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
      series: [{
            name: 'Chicken',
            data: [10, 16, 21, 30, 40, 43]
        }, {
            name: 'Beef',
            data: [40, 52, 47, 43, 44, 39]
        }, {
            name: 'Pork',
            data: [34, 32, 33, 29, 30, 28]
       }, 
       {
            name: 'Total',
            data: [85, 102, 102, 103, 114, 110]
        }]
    });
});
