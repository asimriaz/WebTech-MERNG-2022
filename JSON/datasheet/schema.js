const model = process.argv[2].split('\\')
const modelName = model[model.length-1].split('.')[0].slice(0, -1);
const capitalize = (val) =>  val.charAt(0).toUpperCase() + val.slice(1)
const file = require(`./${model}`)

console.log(`
const mongoose = require('mongoose');
const { Schema, model } = mongoose

const ${modelName}Schema = new Schema({
    ${Object.keys(file[0]).map((k, i) => `${i !== 0?`\n`:``}\t${k}: ${capitalize(typeof file[0][k])},`).join('')}
});

module.exports = model('${modelName.charAt(0).toUpperCase() + modelName.slice(1)}', ${modelName}Schema);
`)
