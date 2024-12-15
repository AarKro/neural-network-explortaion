import { NeuralNetwork } from "brain.js";
import trainingData from "./trainingData.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let net: any;

export const initNetwork = () => {
  // provide optional config object (or undefined). Defaults shown.
  const config = {
    inputSize: 256,
    hiddenLayers: [128],
    outputSize: 26,
  };
  
  // create a simple feed-forward neural network with backpropagation
  net = new NeuralNetwork(config);

  net.train(trainingData);
}

export const runNetwork = (input: Array<number>) => {
  return net.run(input);
}

