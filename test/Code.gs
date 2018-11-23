function doGet(){
    return HtmlService.createHtmlOutputFromFile('index');
   
    
}
function doPost(e){
    Logger.log(e);
}


function test() {
    Logger.log('test');
}

function testingGulp() {
    Logger.log('this should be pushed');
}

function thirdTry() {}

function Hull_Langmuir(d,k) {
    /* Evaluates the above relationship for graphing on Google sheets
       and checked against the spreadsheet evaluation for verification
    */
    
    return d/(d+k); 
    }
    
    
    function call_log10(x) {
    // Merely allows calling the function from a spreadsheet cell
    return Math.log10(x);
    }
    
    
    function call_Random() {
    /* Merely allows calling the function from a spreadsheet cell
    Math.random() uses a random seed generated from the timestamp
    so all students should have 'different' noise...
    ...would need recoding if a seed to generate 'identical' noise were needed
    */ 
    
    return Math.random();
    
    }
    
    
    function a_norminv(x,mu,sig) {
    /* This function mimics the standard spreadsheet function "norminv",
    which basically redistributes a flat uniform random distribution on  [0,1]
    to a peaked normal (Gaussian) distribution, with mean 'mu', and std. dev 'sig'
    by rescaling the axis,using an inverse mapping function, hence the name.
    
    This approximation should be good enough for our needs,
    striking a balance between accuracy and speed,
    as it is just used to simulate random noise.      */
    
      xp=Math.abs(0.5-x)
      
       xp_inv=mu+sig*Math.sqrt(-Math.PI*Math.log(1-4*xp*xp)/2.0);
      
      if (x >= 0.5) {
        return xp_inv;
      } else {
        return -xp_inv;
      }
    
    }

// const CHART = {};

// CHART.load = (sheetData) => {
//   // Load the Visualization API and the corechart package.
//   google.charts.load('current', {'packages':['corechart']});

//   // Set a callback to run when the Google Visualization API is loaded.
//   google.charts.setOnLoadCallback(drawChart);

//   // Callback that creates and populates a data table,
//   // instantiates the pie chart, passes in the data and
//   // draws it.
//   function drawChart() {

//     // Create the data table.
//     const data = new google.visualization.DataTable();
//     data.addColumn('string', 'City');
//     data.addColumn('number', 'Attendance');
//     data.addRows(sheetData);

//     // Set chart options
//     const options = {
//                     'title': 'Women\'s March Attendance by City',
//                     'width': 750,
//                     'height': 500
//                   };

//     // Instantiate and draw our chart, passing in some options.
//     const chart = new google.visualization.BarChart(document.getElementById('chart_div'));
//     chart.draw(data, options);
//   }

// }


// const SHEET = {};

// const publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/185EbxGklql1wZgoTjwYPsth0RcmoqmutP2DKddqIKnY/pubhtml';

// SHEET.load = (data, tabletop) => {
//   let arrayOfData = [];

//   data.forEach((item) => {
//     let attendance = parseInt(item.Attendance, 10) * 1000;
//     arrayOfData.push([item.City, attendance]);
//   });

//   // Sort cities by name
//   let sortArrayOfData = arrayOfData.sort();

//   // Load the data into Google Charts
//   CHART.load(sortArrayOfData);
// }

// SHEET.init = (url) => {
//   Tabletop.init({
//     key: url,
//     callback: SHEET.load,
//     simpleSheet: true
//   })
// }

// window.addEventListener('DOMContentLoaded', SHEET.init(publicSpreadsheetUrl));