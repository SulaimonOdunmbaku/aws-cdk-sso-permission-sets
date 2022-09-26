import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SsoMgtStack } from '../lib/sso-mgt-stack';
import { environment } from '../lib/data/environment';

const { account, region } = environment;

const app = new cdk.App();
new SsoMgtStack(app, 'SsoMgtStack', {
    stackName: 'SsoMgtStack',
    description: 'This stack is used to deploy KMS key for Oracle DB encryption.',
    env: { account, region },
});
