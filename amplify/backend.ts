import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as sns from 'aws-cdk-lib/aws-sns';

const backend = defineBackend({
  auth,
  data,
});

const customResourceStack = backend.createStack('CustomResources');

new sqs.Queue(customResourceStack, 'SampleQueue1');
new sns.Topic(customResourceStack, 'SampleTopic');
