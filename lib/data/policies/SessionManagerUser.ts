/* eslint-disable no-template-curly-in-string */
import { InlinePolicy } from '../../types';

/**
 * Inline IAM Policy.
 * Storing it here rather than importing from JSON so
 * we can take advantage of type checking, and
 * can use comments in the policy where required.
 * You can paste a JSON policy here and use the Auto-fix in
 * the linter to reformat as JS.
 */
export const policy: InlinePolicy = {
    Version: '2012-10-17',
    Statement: [
        {
            Sid: 'UserPermissionToUseSSMDocuments',
            Effect: 'Allow',
            Action: [
                'ssm:StartSession',
                'ssm:SendCommand' 
            ],
            Resource: [
                'arn:aws:ec2:*:*:instance/*',
                'arn:aws:ssm:*:*:document/SSM-SessionManagerRunShell',
                'arn:aws:ssm:*:*:document/AWS-StartSSHSession',
                'arn:aws:ssm:*:*:document/AWS-StartPortForwardingSession'
            ],
            Condition: {
                'BoolIfExists': {
                    'ssm:SessionDocumentAccessCheck': 'true' 
                }
            }
        },
        {
            Sid: 'UserPermissionToUseSessionManager',
            Effect: 'Allow',
            Action: [
                'ssm:DescribeSessions',
                'ssm:GetConnectionStatus',
                'ssm:DescribeInstanceInformation',
                'ssm:DescribeInstanceProperties',
                'ec2:DescribeInstances'
            ],
            Resource: '*'
        },
        {
            Sid: 'UserPermissionToInitiateAndTerminateSessions',
            Effect: 'Allow',
            Action: [
                'ssm:TerminateSession',
                'ssm:ResumeSession'
            ],
            Resource: [
                "arn:aws:ssm:*:*:session/${aws:username}-*"
            ]
        },
     /* {
            Effect: 'Allow',
            Action: [
                'kms:GenerateDataKey' 
            ],
            Resource: 'key-name'
        } */
    ],
};
