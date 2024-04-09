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
    {
      path: 'number',
      name: 'Number',
      component: () => import('/@/views/dashboard/data/number/index.vue'),
      meta: {
        icon: 'heroicons:device-phone-mobile',
        title: t('routes.dashboard.data.phoneData'),
      },
    },
    {
      path: 'personalData',
      name: 'PersonalData',
      component: () => import('/@/views/dashboard/data/personal/index.vue'),
      meta: {
        icon: 'mdi:briefcase-account-outline',
        title: t('routes.dashboard.data.personalData'),
      },
    },
    {
      path: 'imageData',
      name: 'ImageData',
      component: () => import('/@/views/dashboard/data/image/index.vue'),
      meta: {
        icon: 'fluent:image-library-28-regular',
        title: t('routes.dashboard.data.imageData'),
      },
    },
  ],
};

export default data;
