import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const data: AppRouteModule = {
  path: '/data',
  name: 'Data',
  component: LAYOUT,
  redirect: '/data/index',
  meta: {
    orderNo: 12,
    icon: 'solar:database-linear',
    title: t('routes.dashboard.data.menuTitle'),
  },
  children: [
    {
      path: 'proxy',
      name: 'Proxy',
      component: () => import('/@/views/dashboard/data/proxy/index.vue'),
      meta: {
        icon: 'carbon:server-proxy',
        title: t('routes.dashboard.data.proxy'),
      },
    },
  ],
};

export default data;
