import { ModelBuilder } from "./model-builder";

const path = process.argv[2];
const dataPath = path + "/data.json";
const mapperPath = path + "/mapper.json";

let data = require(dataPath);
let mapper = require(mapperPath);

const builder = new ModelBuilder(mapper);
const model = builder.build(data);

console.log(model);