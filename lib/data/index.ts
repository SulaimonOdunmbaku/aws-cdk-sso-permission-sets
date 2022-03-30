import { SetWithInlinePolicy, SetWithManagedPolicy } from '../types';

/**
 * Import all of the policy files here, then add the configuration below
 */
import { policy as denyAdminPolicy } from './policies/denyAdmin';
//import { policy as examplePolicy2 } from './policies/example2';

/**
 * Configuration for each Permission Set.
 */
export const permisssionSets: (SetWithInlinePolicy | SetWithManagedPolicy)[] = [
    //Permission Sets in AWS Audit account.
     {
        name: 'AuditAcctAdmin',
        description: 'Controlled Admin right in AWS Audit account',
        sessionDuration: 4,
        accounts: [
            'audit',
        ],
        groups: [
            'AWSAuditAccountAdmins',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess', 
        ],
        // Custom Inline Policy JSON
        inlinePolicy: denyAdminPolicy,
    },
    {
        name: 'AuditAcctReadOnly',
        description: 'Read-Only right in AWS Audit account',
        sessionDuration: 8,
        accounts: [
            'audit',
        ],
        groups: [
            'AWSAuditAccountReadOnly',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/ReadOnlyAccess',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
    },
    {
        name: 'AuditAcctAWSAdmin',
        description: 'Full admin right in Audit account',
        sessionDuration: 4,
        accounts: [
            'audit',
        ],
        //includeAllAccounts: true,
        groups: [
            'AWSAdmins',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    //Permission Sets in AWS QA account.
    {
        name: 'QAAcctAdmin',
        description: 'Controlled Admin right in AWS QA account',
        sessionDuration: 4,
        accounts: [
            'awsqa',
        ],
        groups: [
            'AWSQAAccountAdmins',
            'AWSPlatformDevTeam',
            'AWSInteractiveDevTeam',
            'AWSDataWebTeam',
            'AWSReleaseTeam',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess', 
        ],
        // Custom Inline Policy JSON
        inlinePolicy: denyAdminPolicy,
    },
    {
        name: 'QAAcctReadOnly',
        description: 'Read-Only right in AWS QA account',
        sessionDuration: 8,
        accounts: [
            'awsqa',
        ],
        groups: [
            'AWSQAAccountReadOnly',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/ReadOnlyAccess',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
    },
    {
        name: 'QAAcctAWSAdmin',
        description: 'Full admin right in AWS QA account',
        sessionDuration: 4,
        accounts: [
            'awsqa',
        ],
        //includeAllAccounts: true,
        groups: [
            'AWSAdmins',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    {
        name: 'QAAcctDBAdmin',
        description: 'DBA access in AWS QA account',
        sessionDuration: 8,
        accounts: [
            'awsqa',
        ],
        groups: [
            'AWSDBATeam',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/job-function/DatabaseAdministrator',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
    },
    //Permission Sets in Dustin Nulf account.
    {
        name: 'DNAcctAWSAdmin',
        description: 'Full admin right in Dustin Nulf account',
        sessionDuration: 4,
        accounts: [
            'dustinnulf',
        ],
        groups: [
            'AWSAdmins',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    //Permission Sets in AWS Dev account.
    {
        name: 'DevAcctAdmin',
        description: 'Controlled Admin right in AWS Dev account',
        sessionDuration: 4,
        accounts: [
            'awsdev',
        ],
        groups: [
            'AWSDevAccountAdmins',
            'AWSPlatformDevTeam',
            'AWSInteractiveDevTeam',
            'AWSDataWebTeam',
            'AWSReleaseTeam',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess', 
        ],
        // Custom Inline Policy JSON
        inlinePolicy: denyAdminPolicy,
    },
    {
        name: 'DevAcctReadOnly',
        description: 'Read-Only right in AWS Dev account',
        sessionDuration: 8,
        accounts: [
            'awsdev',
        ],
        groups: [
            'AWSDevAccountReadOnly',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/ReadOnlyAccess',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
    },
    {
        name: 'DevAcctAWSAdmin',
        description: 'Full admin right in AWS Dev account',
        sessionDuration: 4,
        accounts: [
            'awsdev',
        ],
        //includeAllAccounts: true,
        groups: [
            'AWSAdmins',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    {
        name: 'DevAcctDBAdmin',
        description: 'DBA access in AWS Dev account',
        sessionDuration: 8,
        accounts: [
            'awsdev',
        ],
        groups: [
            'AWSDBATeam',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/job-function/DatabaseAdministrator',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
    },
    //Permission Sets in AWS IT account.
    {
        name: 'ITAcctAdmin',
        description: 'Controlled Admin right in AWS IT account',
        sessionDuration: 4,
        accounts: [
            'awsit',
        ],
        groups: [
            'AWSITAccountAdmins',
            'AWSITTeam',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess', 
        ],
        // Custom Inline Policy JSON
        inlinePolicy: denyAdminPolicy,
    },
    {
        name: 'ITAcctReadOnly',
        description: 'Read-Only right in AWS IT account',
        sessionDuration: 8,
        accounts: [
            'awsit',
        ],
        groups: [
            'AWSITAccountReadOnly',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/ReadOnlyAccess',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
    },
    {
        name: 'ITAcctAWSAdmin',
        description: 'Full admin right in AWS IT account',
        sessionDuration: 4,
        accounts: [
            'awsit',
        ],
        //includeAllAccounts: true,
        groups: [
            'AWSAdmins',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    //Permission Sets in AWS Production account.
    {
        name: 'ProdAcctAdmin',
        description: 'Controlled Admin right in AWS Production account',
        sessionDuration: 4,
        accounts: [
            'awsprod',
        ],
        groups: [
            'AWSProdAccountAdmins',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess', 
        ],
        // Custom Inline Policy JSON
        inlinePolicy: denyAdminPolicy,
    },
    {
        name: 'ProdAcctReadOnly',
        description: 'Read-Only right in AWS Production account',
        sessionDuration: 8,
        accounts: [
            'awsprod',
        ],
        groups: [
            'AWSProdAccountReadOnly',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/ReadOnlyAccess',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
    },
    {
        name: 'ProdAcctAWSAdmin',
        description: 'Full admin right in AWS Production account',
        sessionDuration: 4,
        accounts: [
            'awsprod',
        ],
        //includeAllAccounts: true,
        groups: [
            'AWSAdmins',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    //Permission Sets in DataWeb Dev account.
    {
        name: 'DWEDevAcctAdmin',
        description: 'Controlled Admin right in DataWeb Dev account',
        sessionDuration: 4,
        accounts: [
            'datawebdev',
        ],
        groups: [
            'AWSDWEDevAccountAdmins',
            'AWSPlatformDevTeam',
            'AWSInteractiveDevTeam',
            'AWSDataWebTeam',
            'AWSReleaseTeam',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess', 
        ],
        // Custom Inline Policy JSON
        inlinePolicy: denyAdminPolicy,
    },
    {
        name: 'DWEDevAcctReadOnly',
        description: 'Read-Only right in DataWeb Dev account',
        sessionDuration: 8,
        accounts: [
            'datawebdev',
        ],
        groups: [
            'AWSDWEDevAccountReadOnly',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/ReadOnlyAccess',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
    },
    {
        name: 'DWEDevAcctAWSAdmin',
        description: 'Full admin right in DataWeb Dev account',
        sessionDuration: 4,
        accounts: [
            'datawebdev',
        ],
        //includeAllAccounts: true,
        groups: [
            'AWSAdmins',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    {
        name: 'DWEDevAcctDBAdmin',
        description: 'DBA access in DataWeb Dev account',
        sessionDuration: 8,
        accounts: [
            'datawebdev',
        ],
        groups: [
            'AWSDBATeam',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/job-function/DatabaseAdministrator',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
    },
    //Permission Sets in DataWeb Production account.
    {
        name: 'DWEProdAcctAdmin',
        description: 'Controlled Admin right in DataWeb Production account',
        sessionDuration: 4,
        accounts: [
            'datawebprod',
        ],
        groups: [
            'AWSDWEProdAccountAdmins',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess', 
        ],
        // Custom Inline Policy JSON
        inlinePolicy: denyAdminPolicy,
    },
    {
        name: 'DWEProdAcctReadOnly',
        description: 'Read-Only right in DataWeb Production account',
        sessionDuration: 8,
        accounts: [
            'datawebprod',
        ],
        groups: [
            'AWSDWEProdAccountReadOnly',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/ReadOnlyAccess',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
    },
    {
        name: 'DWEProdAcctAWSAdmin',
        description: 'Full admin right in DataWeb Production account',
        sessionDuration: 4,
        accounts: [
            'datawebprod',
        ],
        //includeAllAccounts: true,
        groups: [
            'AWSAdmins',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    //Permission Sets in Log Archive account.
    {
        name: 'LogArchAcctAdmin',
        description: 'Controlled Admin right in Log Archive account',
        sessionDuration: 4,
        accounts: [
            'logarchive',
        ],
        groups: [
            'AWSLogArchiveAccountAdmins',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess', 
        ],
        // Custom Inline Policy JSON
        inlinePolicy: denyAdminPolicy,
    },
    {
        name: 'LogArchAcctReadOnly',
        description: 'Read-Only right in Log Archive account',
        sessionDuration: 8,
        accounts: [
            'logarchive',
        ],
        groups: [
            'AWSLogArchiveAccountReadOnly',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/ReadOnlyAccess',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
    },
    {
        name: 'LogArchAcctAWSAdmin',
        description: 'Full admin right in Log Archive account',
        sessionDuration: 4,
        accounts: [
            'logarchive',
        ],
        //includeAllAccounts: true,
        groups: [
            'AWSAdmins',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
];

export { environment, accountList, groupList } from './environment';
