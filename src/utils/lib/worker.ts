import {expose} from "comlink";
import {getValue} from "./workerHelper";

const calculatePrimeNumber = {
  getValue:getValue,
};

export type MyWorker = typeof calculatePrimeNumber;

expose(calculatePrimeNumber);