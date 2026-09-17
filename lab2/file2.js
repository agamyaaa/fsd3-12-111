import { writeFile, appendFile, readFile } from "fs/promises";
//await appendFile("hello2.txt","\nFS Hi! I am Aadi 😊");
// const readData = async (filename) => {
//   const content = await readFile(filename, "utf-8");
//   return content;
// };
// const writeData = async (filename) => {
//   await writeFile(filename, " JS is so much easy");
// };
// const appendData = async (filename) => {
//   await appendFile(filename, "\nFS is much easy than other ");
// };

// if a function uses await keyword then the function must be async
// const data = await readData("fun1.js");
// console.log(data);
// (async () => {
//   console.log(await writeData("hello2.txt"));
//   console.log(await appendData("hello2.txt"));
//   console.log(await readData("hello2.txt"));
// })();
//  keyword
// try  catch block is used to handle the error in async await

// try is used to run the code and catch is used to handle the error if any error occurs in try block
const readData = async (filename) => {
  try {
    const content = await readFile(filename, "utf-8");
    return content;
  } catch (e) {
    console.log(e.message);
    console.log("File not found ");
  } finally {
    console.log("Read data finished");
  }
};
const writeData = async (filename, content) => {
  try {
    await writeFile(filename, content);
  } catch (error) {
    console.log(error.message);
  }
};
const appendData = async (filename, content) => {
  try {
    await appendFile(filename, content);
  } catch (error) {
    console.log(error.message);
  }
};
const deleteFile = async (filename) => {
  try {
    await unlink(filename);
  } catch (error) {
    console.log(error.message);
  }
};
const content = await readData("fun1.js");
console.log(content);

//13
