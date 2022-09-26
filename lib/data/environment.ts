import { Environment, AccountList, GroupList, UserList } from '../types';

/**
 * The Organisation master account (where the SSO configuration resides)
 */
export const environment: Environment = {
    account: '513352092963',
    region: 'us-east-2',
    ssoInstanceArn: 'arn:aws:sso:::instance/ssoins-66844e549925cb98',
};

/**
 * List of Accounts where we want to assign permission sets
 */
export const accountList: AccountList = {
    audit: '813958658093',
    awsqa: '662756475844',
    dustinnulf: '609181666277',
    awsdev: '307707278325',
    awsit: '204262787620',
    awsprod: '513352092963',
    datawebdev: '032478294214',
    datawebprod: '824196775661',
    awstestdev: '106039341785',
    logarchive: '932521301820',
};

/**
 * List of Groups we want to assign permission sets to
 */
export const groupList: GroupList = {
    AWSAuditAccountAdmins: '9a6711ca2c-1e819f2f-7db2-46fe-bc9a-29dda4c556dd',
    AWSAuditAccountReadOnly: '9a6711ca2c-9230e628-6237-4384-a958-716f782aabb0',
    AWSAdmins: '9a6711ca2c-3b02fa27-e4e7-4f39-aa91-d7ac23bf39d0',
    AWSQAAccountAdmins: '9a6711ca2c-4f2eab17-e19f-41be-8bf7-3bdaf302211a',
    AWSQAAccountReadOnly: '9a6711ca2c-5f8fb926-687b-4db8-b44a-b6ef51fd3c69',
    AWSPlatformDevTeam: '9a6711ca2c-a9cae469-69bf-4896-bedb-5c6e530090e5',
    AWSInteractiveDevTeam: '9a6711ca2c-2284191b-b9ab-4733-8c19-68396a6cc7c3',
    AWSDataWebTeam: '9a6711ca2c-f7a725b3-6f40-4585-8c6d-347241c1331d',
    AWSReleaseTeam: '9a6711ca2c-0515836d-e692-492e-a701-eeae22b585ad',
    AWSDBATeam: '9a6711ca2c-46805177-0e14-46b0-8f4a-58ec397ab359',
    AWSDevAccountAdmins: '9a6711ca2c-7ac34bd0-6b83-46b2-a309-ce8c5442f53c',
    AWSDevAccountReadOnly: '9a6711ca2c-6a740a06-388c-439c-aa46-29dcdca2fd99',
    AWSITTeam:'9a6711ca2c-ed491b7a-a12a-4f4d-9f1d-79939f7d3e3a',
    AWSITAccountAdmins: '9a6711ca2c-de75e718-a9ed-4e18-a47b-cf55f52b7aa2',
    AWSITAccountReadOnly: '9a6711ca2c-3670831c-c0f0-4e1e-bd57-c48ee7912271',
    AWSProdAccountAdmins: '9a6711ca2c-209ad488-4b7c-43fd-a29e-af885e1c16c3',
    AWSProdAccountReadOnly: '9a6711ca2c-21c4d74c-ad7b-499b-95b6-a412cf3e1e16',
    AWSDWEDevAccountAdmins: '9a6711ca2c-0275414d-aea8-4cb8-b07d-2352946c0276',
    AWSDWEDevAccountReadOnly: '9a6711ca2c-a4e4cae8-90f2-4240-aafe-1cbe77df6496',
    AWSDWEProdAccountAdmins: '9a6711ca2c-2dd2dd73-b937-4865-bc8c-9e9e614682a8',
    AWSDWEProdAccountReadOnly: '9a6711ca2c-c695cf59-956a-4589-9b81-65db999b166c',
    AWSTestDevAccountAdmins: '9a6711ca2c-dd09f8a6-5746-470a-8863-eb3d86e22d6d',
    AWSTestDevAccountReadOnly: '9a6711ca2c-26964487-2ac9-4d84-8ba3-658c68aed84e',
    AWSAssessmentTeam: '9a6711ca2c-c9d8641a-6503-4b66-bd50-30747c0cf05f',
    AWSLogArchiveAccountAdmins: '9a6711ca2c-db872fef-5502-4766-b304-4a8d7f9eaed3',
    AWSLogArchiveAccountReadOnly: '9a6711ca2c-3fdc94d3-4436-4774-be22-7c382383ddb9',
    AWSiStationManagementTeam: '9a6711ca2c-d7de534c-c4e8-40a8-8702-da9399cf0496',
};

/**
 * List of Users we want to assign permission sets to
 */
 export const userList: UserList = {
    colinschlotter: '9a6711ca2c-2b0106a0-e92c-4632-8ad9-8a0662ff6c08',
    davidpearson: '9a6711ca2c-1fb153dd-14df-4676-a0a2-948cea84f1d8',
    johnjeffus: '9a6711ca2c-06e512a0-15b8-45d5-b003-c746cc0b87a1',
    garywhite: '9a6711ca2c-d9dbf53b-b227-4af8-829a-7f46b13e8d8e',
    zackterry: '9a6711ca2c-af782123-6e79-43a3-9a85-82ad1c67d8d8',
 };