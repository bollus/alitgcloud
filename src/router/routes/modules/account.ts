import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const account: AppRouteModule = {
  path: '/account',
  name: 'Account',
  component: LAYOUT,
  redirect: '/account/index',
  meta: {
    hideChildrenInMenu: true,
    orderNo: 11,
    icon: 'mdi:account-multiple',
    title: t('routes.dashboard.account.accounts'),
  },
  children: [
    {
      path: 'index',
      name: 'Accounts',
      component: () => import('/@/views/dashboard/account/index.vue'),
      meta: {
        title: t('routes.dashboard.account.accounts'),
      },
    },
  ],
};

export default account;
