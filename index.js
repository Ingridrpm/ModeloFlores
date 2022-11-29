var model = null;
var predResult = document.getElementById('result');

async function initialize() 
{
    model = await tf.loadLayersModel('model.json');
}

async function predict() 
{
	let image = document.getElementById("idImage")  
	let tensorImg =   tf.browser.fromPixels(image).resizeNearestNeighbor([300, 300]).toFloat().expandDims();
  	prediction = await model.predict(tensorImg).data();
	console.log(prediction)
	/*
	predResult.innerHTML = prediction[0];
	if (prediction[0] === 0) 
	{
      		predResult.innerHTML = "I think it's a cat";
	} 
	else if (prediction[0] === 1) 
	{
      		predResult.innerHTML = "I think it's a dog";
	} 	
	else 
	{
      		predResult.innerHTML = "This is Something else";
  	}
	*/
}

initialize();