const URL = ".../model/";

  let model, webcam, labelContainer, maxPredictions;

  // Load the image model and setup the webcam
  export async function init(photoURL) {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    let canvas = document.createElement('canvas');
    let img = new Image();
    img.src = photoURL;
   
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0);
    }
    model = await tmImage.load(modelURL, metadataURL);
    predict(canvas);
  }

  async function predict(canvas) {
    const prediction = await model.predict(canvas);
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction = prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    }
    console.log("------------------")
    console.log(prediction)
    console.log("------------------")
  }