/* eslint-disable no-template-curly-in-string */
import { Effect } from 'aws-cdk-lib/aws-iam';
import { Condition } from 'aws-cdk-lib/aws-stepfunctions';
import { InlinePolicy } from '../../types';

/**
 * Inline IAM Policy.
 * Storing it here rather than importing from JSON so
 * we can take advantage of type checking, and
 * can use comments in the policy where required.
 * You can paste a JSON policy here and use the Auto-fix in
 * the linter to reformat as JS.
 */

//👇 DB Admins Permission in IT Account
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
           // Resource: '*',
            Resource: [
                'arn:aws:ec2:*:*:instance/*',
                'arn:aws:ssm:*:*:document/iStationSessionManagerRunShell',
                'arn:aws:ssm:*:*:document/AWS-ApplyAnsiblePlaybooks',
                'arn:aws:ssm:*:*:document/iStationStartPortForwardingSession' //Temporary permission as we will not allow SSH over Session Manager.
            ],
            Condition: {
                'BoolIfExists': {
                    'ssm:SessionDocumentAccessCheck': 'true' 
                },
               /*'StringLike': {
                    'ssm:resourceTag/Application': 'Oracle'
                    //'aws:ResourceTag/Application': 'Oracle'
            }*/
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
                'ec2:DescribeInstances',
                'ssm:StartAssociationsOnce',
                'ssm:UpdateAssociation'
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
        {//Test Session Creation and Encryption
            Effect: 'Allow',
            Action: [
                'kms:GenerateDataKey' 
            ],
            Resource: 'arn:aws:kms:us-east-2:204262787620:key/f3f2d07b-4aef-4a03-9d87-b023a1266eb6'
        },
        {
            Sid: 'DBPermissionForOracleEC2Instance',
            Effect: 'Allow',
            Action: [
                'ec2:*'
                /*'ec2:StartInstances',
                'ec2:StopInstances',
                'ec2:RebootInstances',
                'ec2:MonitorInstances',
                'ec2:UnmonitorInstances',
                'ec2:AttachVolume',
                'ec2:DetachVolume',
                'ec2:AttachNetworkInterface',
                'ec2:DetachNetworkInterface',
                'ec2:CreateImage',*/
            ],
            Resource: '*',
            /*Condition: {
                'StringEquals': {'aws:ResourceTag/Application': 'Oracle'},
                //'StringLike': {'ec2:ResourceTag/Team': 'Database'},
            },*/
        },
        {
            Sid: 'DBAsPermissionToUseOracleKMSKey',
            Effect: 'Allow',
            Action: [
                'kms:Encrypt',
                'kms:Decrypt',
                'kms:ReEncrypt*',
                'kms:GenerateDataKey*',
                'kms:DescribeKey'
            ],
            Resource: [
                'arn:aws:kms:us-east-2:204262787620:key/bef3ddc8-9320-4d85-8cb6-0cc6471832bb',
            ],
        },
        {
            Sid: 'DBAsPermissionToGrantAWSServicesToUseOracleKMSKey',
            Effect: 'Allow',
            Action: [
                'kms:CreateGrant',
                'kms:ListGrants',
                'kms:RevokeGrant'
            ],
            Resource: [
                'arn:aws:kms:us-east-2:204262787620:key/bef3ddc8-9320-4d85-8cb6-0cc6471832bb',
            ],
            Condition: {
                'Bool': {
                    'kms:GrantIsForAWSResource': 'true' 
                },
            }
        },
        {
            Sid: 'DBAsPermissionToOracleS3Bucket',
            Effect: 'Allow',
            Action: [
                's3:ListBucket',
                's3:ListBucketMultipartUploads',
                's3:GetBucketLocation',
                's3:GetEncryptionConfiguration'
            ],
            Resource: [
                'arn:aws:s3:::istation-oracle-bucket',
            ],
        },
        {
            Sid: 'DBAsPermissionToObjectsInOracleS3Bucket',
            Effect: 'Allow',
            Action: [
                's3:GetObject',
                's3:PutObject',
                's3:PutObjectAcl',
                's3:DeleteObject',
                's3:AbortMultipartUpload',
                's3:ListMultipartUploadParts',
            ],
            Resource: [
                'arn:aws:s3:::istation-oracle-bucket/*',
            ],
        },
        //Grant temporary permission for secrets manager and ssm parameter store
        {
            Sid:'DBATempPermissionForSecretManagerAndSSMParameterStore',
            Effect: 'Allow',
            Action: [
                'secretsmanager:CreateSecret',
                'secretsmanager:DeleteSecret',
                'secretsmanager:PutSecretValue',
                'secretsmanager:RestoreSecret',
                'secretsmanager:TagResource',
                'secretsmanager:UntagResource',
                'secretsmanager:UpdateSecret',
                'secretsmanager:GetSecretValue',
                'secretsmanager:GetResourcePolicy',
                'secretsmanager:DeleteResourcePolicy',
                'secretsmanager:PutResourcePolicy',
                'secretsmanager:ValidateResourcePolicy',
                'ssm:DeleteParameter',
                'ssm:DeleteParameters',
                'ssm:LabelParameterVersion',
                'ssm:PutParameter',
                'ssm:LabelParameterVersion',
            ],
            Resource: '*',            
        }
    ],
};
