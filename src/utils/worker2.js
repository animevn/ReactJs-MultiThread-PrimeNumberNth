import * as Comlink from "comlink";
import {getValue} from "./workerHelper";

const calculatePrimeNumber = {
  getValue,
};

Comlink.expose(calculatePrimeNumber);