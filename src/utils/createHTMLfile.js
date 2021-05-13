const fs = require("fs");

const createHTMLFile = (html) => {
  try {
    fs.writeFileSync("../team.html", html);
    console.info("Your new team html file has been successfully created!")
  } catch (err) {
    console.info("Oh no, something went wrong whilst creating your new file. Please see error below for more information.")
    console.info(err);
  }
};

module.exports = createHTMLFile;