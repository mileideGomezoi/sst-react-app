import { SSTConfig } from "sst";
import { ExampleStack } from "./stacks/ExampleStack";

export default {
  config(_input) {
    return {
      name: "my-sst-app",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.stack(ExampleStack);
  },
} satisfies SSTConfig;
