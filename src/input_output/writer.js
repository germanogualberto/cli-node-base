/**
 * Writes the output in the stdout
 * @param {*} dataToPrint The data to write
 * @param {*} isSilentExecution If true, the function will return without writing it in stdout
 * @returns A list of something
 */
const writeOutput = (dataToPrint, isSilentExecution) => {
  if (!isSilentExecution) {
    console.log(dataToPrint);
  }
  return dataToPrint;
};

export { writeOutput };
