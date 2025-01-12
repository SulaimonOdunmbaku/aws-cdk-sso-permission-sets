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
            Sid: 'ProdAccountsBillingAdminPermission',
            Effect: 'Allow',
            Action: [
                'aws-portal:*',
                'cur:*',
                'ce:*',
                'billingconductor:*',
            ],
            Resource: '*',
        },
    ],
};
