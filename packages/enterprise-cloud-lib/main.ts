import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { Instance } from "@cdktf/provider-aws/lib/instance";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // define resources here
    new AwsProvider(this, "example-enterprise-us-east-1", {
      region: "us-east-1",
      profile: "example-enterprise-admin"
    })

    new Instance(this, "example", {
      ami: "ami-0005e0cfe09cc9050",
      instanceType: "t2.micro",
      tags: {
        Name: "example"
      }
    })
  }
}

const app = new App();
new MyStack(app, "Enterprise-Example");
app.synth();
