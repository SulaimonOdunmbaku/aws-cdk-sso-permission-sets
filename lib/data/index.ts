import { SetWithInlinePolicy, SetWithManagedPolicy } from '../types';

/**
 * Import all of the policy files here, then add the configuration below
 */
import { policy as denyAdminPolicy } from './policies/denyAdmin';
import { policy as SREPermissionForProdAcctsPolicy } from './policies/SREPermissionForProdAccts';
import { policy as ProdAcctBillingAdminPolicy} from './policies/ProdAcctBillingAdmin';
import { policy as SessionManagerUserPolicy} from './policies/SessionManagerUser';
import { policy as DBPermissionForTestDevAcctPolicy} from './policies/DBPermissionForTestDevAcct';
import { policy as DBPermissionForITAcctPolicy} from './policies/DBPermissionForITAcct';

/*
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
        users: [],
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
        users: [],
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
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    //Permission Sets in AWS QA account.
    {
        name: 'QAAcctAdmin',
        description: 'Controlled Admin right in AWS QA account',
        sessionDuration: 12,
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
        users: [],
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
        sessionDuration: 12,
        accounts: [
            'awsqa',
        ],
        groups: [
            'AWSQAAccountReadOnly',
        ],
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/ReadOnlyAccess',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
    },
    {
        name: 'QAAcctAWSAdmin',
        description: 'Full admin right in AWS QA account',
        sessionDuration: 12,
        accounts: [
            'awsqa',
        ],
        //includeAllAccounts: true,
        groups: [
            'AWSAdmins',
        ],
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    {
        name: 'QAAcctDBAdmin',
        description: 'DBA access in AWS QA account',
        sessionDuration: 12,
        accounts: [
            'awsqa',
        ],
        groups: [
            'AWSDBATeam',
        ],
        users: [],
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
        sessionDuration: 12,
        accounts: [
            'dustinnulf',
        ],
        groups: [
            'AWSAdmins',
        ],
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    //Permission Sets in AWS Dev account.
    {
        name: 'DevAcctAdmin',
        description: 'Controlled Admin right in AWS Dev account',
        sessionDuration: 12,
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
        users: [],
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
        sessionDuration: 12,
        accounts: [
            'awsdev',
        ],
        groups: [
            'AWSDevAccountReadOnly',
        ],
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/ReadOnlyAccess',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
    },
    {
        name: 'DevAcctAWSAdmin',
        description: 'Full admin right in AWS Dev account',
        sessionDuration: 12,
        accounts: [
            'awsdev',
        ],
        //includeAllAccounts: true,
        groups: [
            'AWSAdmins',
        ],
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    {
        name: 'DevAcctDBAdmin',
        description: 'DBA access in AWS Dev account',
        sessionDuration: 12,
        accounts: [
            'awsdev',
        ],
        groups: [
            'AWSDBATeam',
        ],
        users: [],
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
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess', 
        ],
        // Custom Inline Policy JSON
        inlinePolicy: denyAdminPolicy
    },
    {
        name: 'ITAcctReadOnly',
        description: 'Read-Only right in AWS IT account',
        sessionDuration: 4,
        accounts: [
            'awsit',
        ],
        groups: [
            'AWSITAccountReadOnly',
        ],
        users: [],
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
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    {
        name: 'ITAcctDBAdmin',
        description: 'DBA access in IT account',
        sessionDuration: 4,
        accounts: [
            'awsit',
        ],
        groups: [
            'AWSDBATeam',
        ],
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            //'arn:aws:iam::aws:policy/job-function/DatabaseAdministrator',
            'arn:aws:iam::aws:policy/ReadOnlyAccess',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
        // Custom Inline Policy JSON
        inlinePolicy: DBPermissionForITAcctPolicy,
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
        users: [],
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
        sessionDuration: 4,
        accounts: [
            'awsprod',
        ],
        groups: [
            'AWSProdAccountReadOnly',
            'AWSReleaseTeam',
        ],
        users: [],
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
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    //Permission Sets in DataWeb Dev account.
    {
        name: 'DWEDevAcctAdmin',
        description: 'Controlled Admin right in DataWeb Dev account',
        sessionDuration: 12,
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
        users: [],
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
        sessionDuration: 12,
        accounts: [
            'datawebdev',
        ],
        groups: [
            'AWSDWEDevAccountReadOnly',
        ],
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/ReadOnlyAccess',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
    },
    {
        name: 'DWEDevAcctAWSAdmin',
        description: 'Full admin right in DataWeb Dev account',
        sessionDuration: 12,
        accounts: [
            'datawebdev',
        ],
        //includeAllAccounts: true,
        groups: [
            'AWSAdmins',
        ],
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    {
        name: 'DWEDevAcctDBAdmin',
        description: 'DBA access in DataWeb Dev account',
        sessionDuration: 12,
        accounts: [
            'datawebdev',
        ],
        groups: [
            'AWSDBATeam',
        ],
        users: [],
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
        users: [],
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
        sessionDuration: 4,
        accounts: [
            'datawebprod',
        ],
        groups: [
            'AWSDWEProdAccountReadOnly',
            'AWSReleaseTeam',
        ],
        users: [],
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
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    //Permission Sets in AWS Test Dev account.
    {
        name: 'AWSTestDevAcctAdmin',
        description: 'Controlled Admin right in AWS Test Dev account',
        sessionDuration: 12,
        accounts: [
            'awstestdev',
        ],
        groups: [
            'AWSTestDevAccountAdmins',
            'AWSAssessmentTeam',
            'AWSPlatformDevTeam',
            'AWSReleaseTeam',
        ],
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess', 
        ],
        // Custom Inline Policy JSON
        inlinePolicy: denyAdminPolicy,
    },
    {
        name: 'AWSTestDevAcctReadOnly',
        description: 'Read-Only right in AWS Test Dev account',
        sessionDuration: 12,
        accounts: [
            'awstestdev',
        ],
        groups: [
            'AWSTestDevAccountReadOnly',
        ],
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/ReadOnlyAccess',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
        ],
    },
    {
        name: 'AWSTestDevAcctAWSAdmin',
        description: 'Full admin right in AWS Test Dev account',
        sessionDuration: 12,
        accounts: [
            'awstestdev',
        ],
        //includeAllAccounts: true,
        groups: [
            'AWSAdmins',
        ],
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    {
        name: 'AWSTestDevAcctDBAdmin',
        description: 'DBA access in AWS Test Dev account',
        sessionDuration: 12,
        accounts: [
            'awstestdev',
        ],
        groups: [
            'AWSDBATeam',
        ],
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/job-function/DatabaseAdministrator',
            'arn:aws:iam::aws:policy/AWSSupportAccess',
            'arn:aws:iam::aws:policy/AmazonEC2FullAccess',
        ],
        // Custom Inline Policy JSON
        inlinePolicy: DBPermissionForTestDevAcctPolicy,
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
        users: [],
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
        sessionDuration: 4,
        accounts: [
            'logarchive',
        ],
        groups: [
            'AWSLogArchiveAccountReadOnly',
        ],
        users: [],
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
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    //SRE Permission Sets in AWS Prod and DataWeb Prod accounts. 
    {
        name: 'SREWritePersmissionForProdAccts',
        description: 'SRE Permission in AWS Prod and DataWeb Prod accounts',
        sessionDuration: 4,
        accounts: [
            'awsprod',
            'datawebprod',
        ],
        groups: [],
        users: [
            'colinschlotter',
            'davidpearson',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AmazonEC2FullAccess',
            'arn:aws:iam::aws:policy/CloudWatchFullAccess',
        ],
        // Custom Inline Policy JSON
        inlinePolicy: SREPermissionForProdAcctsPolicy,
    },
//SRE Permission Sets in AWS Prod and DataWeb Prod accounts. 
    {
        name: 'ProdAcctBillingAdmin',
        description: 'Billing Admins in Prod Accounts',
        sessionDuration: 4,
        accounts: [
            'awsprod',
        ],
        groups: [],
        users: [
            'johnjeffus',
            'garywhite',
            'zackterry',
            'davidpearson',
        ],
        // List of AWS Managed Policy Arns
        managedPolicies: [],
        // Custom Inline Policy JSON
        inlinePolicy: ProdAcctBillingAdminPolicy,
    },
    //AWSiStationManagementTeam group permission set
    {
        name: 'AllAcctAWSMgtAdmin',
        description: 'Full admin right in all AWS accounts for CTO level',
        sessionDuration: 4,
        accounts: [
            'audit',
            'awsqa',
            'dustinnulf',
            'awsdev',
            'awsit',
            'awsprod',
            'datawebdev',
            'datawebprod',
            'awstestdev',
            'logarchive',
        ],
        groups: [
            'AWSiStationManagementTeam',
        ],
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/AdministratorAccess',
        ],
    },
    {
        name: 'AllAcctAWSMgtReadOnly',
        description: 'Read-Only right in all AWS accounts for CTO level',
        sessionDuration: 4,
        accounts: [
            'audit',
            'awsqa',
            'dustinnulf',
            'awsdev',
            'awsit',
            'awsprod',
            'datawebdev',
            'datawebprod',
            'awstestdev',
            'logarchive',
        ],
        groups: [
            'AWSiStationManagementTeam',
        ],
        users: [],
        // List of AWS Managed Policy Arns
        managedPolicies: [
            'arn:aws:iam::aws:policy/ReadOnlyAccess',
        ],
    }
];

export { environment, accountList, groupList, userList } from './environment';
