function makeplot() {
  Plotly.d3.csv("final_recipe_dataset_N.csv", function(data){ processData(data) } );

};

function processData(allRows) {

  console.log(allRows);
  var cookTime = [], numSteps = [], recipeNames = [];

  for (var i=0; i<allRows.length; i++) {
    row = allRows[i];
    cookTime.push( row['Total_Time'] );
    numSteps.push( row['Number_cooking_step'] );
    recipeNames.push( row['Name'] );
  }
  console.log( 'Time', cookTime, 'Steps', numSteps, 'Names', recipeNames );
  makePlotly( cookTime, numSteps, recipeNames );
};

function makePlotly( cookTime, numSteps, recipeNames ){
  var scatterPlot = document.getElementById("scatterPlot");
  var traces = [{
    x: cookTime,
    y: numSteps,
    mode: 'markers',
    type: 'scatter',
    name: recipeNames,
    text: recipeNames,
    marker: { size: 12}
  }];
  
  
  var layout = {
    title: 'Total Cook Time by Number of Steps in a Recipe',
    xaxis: {
      title: 'Number of Steps',
      titlefont: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'lightgrey'
      },
      showticklabels: true,
      tickangle: 'auto'
    },
    yaxis: {
      title: 'Total Cook Time (minutes)',
      titlefont: {
        family: 'Arial, sans-serif',
        size: 14,
        color: 'lightgrey'
      }
    }

  };

  Plotly.newPlot('scatterPlot', traces, layout);
};
  makeplot();




