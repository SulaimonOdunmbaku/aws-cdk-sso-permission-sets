import { Environment, AccountList, GroupList } from '../types';

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
    logarchive: '932521301820',
};

/**
 * List of Groups we want to assign permission sets to
 */
export const groupList: GroupList = {
    AWSAuditAccountAdmins: '9a6711ca2c-81346acc-d162-4336-a2c1-38f56dc2efc3',
    AWSAuditAccountReadOnly: '9a6711ca2c-4d19fb43-b114-4316-b009-de87c6ac537a',
    AWSAdmins: '9a6711ca2c-aaab1610-cc75-4b2a-9913-8230c7ba4281',
    AWSQAAccountAdmins: '9a6711ca2c-3a40b5b2-f4ad-48c2-bbab-7ff7db0078a0',
    AWSQAAccountReadOnly: '9a6711ca2c-6b7d6286-13d5-4197-bd3c-ebe326b99fd3',
    AWSPlatformDevTeam: '9a6711ca2c-5763afe3-b767-47e1-91e8-911074137d41',
    AWSInteractiveDevTeam: '9a6711ca2c-64ecc8c5-5765-4bad-b196-ddb24574f585',
    AWSDataWebTeam: '9a6711ca2c-3389eae8-581c-4a96-9b8b-24a90269ca59',
    AWSReleaseTeam: '9a6711ca2c-1ed91221-0634-44b3-a8ef-a0e568253f86',
    AWSDBATeam: '9a6711ca2c-c5308cd8-3496-4198-9050-1196e25aac26',
    AWSDevAccountAdmins: '9a6711ca2c-1bc95ebf-a432-49b8-a28f-29f5850877c1',
    AWSDevAccountReadOnly: '9a6711ca2c-02c9c176-17fb-47b7-b283-043d9a565a13',
    AWSITTeam:'9a6711ca2c-a04121d9-fb73-4e92-b8dc-56c8c246593a',
    AWSITAccountAdmins: '9a6711ca2c-4fc44b0a-619b-4e47-af41-2dd6ad0bb7e4',
    AWSITAccountReadOnly: '9a6711ca2c-f02a7025-ac44-41c4-8659-6ee289071e06',
    AWSProdAccountAdmins: '9a6711ca2c-870f0b60-7fbc-4103-86a8-82acdb4cf61c',
    AWSProdAccountReadOnly: '9a6711ca2c-0afd6f24-065a-4274-a7f7-85800986ce56',
    AWSDWEDevAccountAdmins: '9a6711ca2c-3c0057e3-5696-4674-8eb2-31153fa805b1',
    AWSDWEDevAccountReadOnly: '9a6711ca2c-fe6c79ae-db0a-47e5-9c26-2b80caaa3e43',
    AWSDWEProdAccountAdmins: '9a6711ca2c-efc2252c-5dcd-4ba9-8f00-8a75c6a601bf',
    AWSDWEProdAccountReadOnly: '9a6711ca2c-42cc1822-5949-4357-bbb0-801bef896ddd',
    AWSLogArchiveAccountAdmins: '9a6711ca2c-3db019c6-65da-41e8-8734-5202bc8aa7a0',
    AWSLogArchiveAccountReadOnly: '9a6711ca2c-367d423d-c924-4eb7-9f80-6a683c189a8b',
};
