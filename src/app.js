import { readInput, writeOutput } from "./input_output/index.js";
import { stdin, stdout } from "node:process";

/**
 * A base cli app
 * @param 
    {*} options
 * @returns TODO: something
 */
const app = async (
  options = {
    inputStream: stdin,
    isSilentExecution: false,
  }
) => {
  return "I am a CLI app";
};

export { app };
