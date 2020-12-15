import { JSONPath } from "jsonpath-plus";
import { Mapper } from "./mapper";
import { Model } from "./model";

export class ModelBuilder {
    private mapper: Mapper;

    constructor(mapper: Mapper) {
        this.mapper = mapper;
    }

    build(json: any) {
        let model = new Model();
        model.title = JSONPath({path: this.mapper.title, json})[0];
        model.description = JSONPath({path: this.mapper.description, json})[0];
        model.year = JSONPath({path: this.mapper.year, json})[0] as number;
        return model;
    }
}