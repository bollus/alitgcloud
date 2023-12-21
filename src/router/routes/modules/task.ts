import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const task: AppRouteModule = {
  path: '/task',
  name: 'Task',
  component: LAYOUT,
  meta: {
    orderNo: 11,
    icon: 'material-symbols:task-alt-rounded',
    title: t('routes.dashboard.task.task'),
  },
  children: [
    {
      path: 'register',
      name: 'Register',
      component: () => import('/@/views/dashboard/task/register/index.vue'),
      meta: {
        icon: 'lucide:clipboard-signature',
        title: t('routes.dashboard.task.batchRegister'),
      },
    },
    {
      path: 'add',
      name: 'Add',
      component: () => import('/@/views/dashboard/task/add/index.vue'),
      meta: {
        icon: 'ant-design:usergroup-add-outlined',
        title: t('routes.dashboard.task.add'),
      },
    },
    {
      path: 'send',
      name: 'Send',
      component: () => import('/@/views/dashboard/task/send/index.vue'),
      meta: {
        icon: 'bi:send-fill',
        title: t('routes.dashboard.task.send'),
      },
    },
    {
      path: 'invite',
      name: 'Invite',
      component: () => import('/@/views/dashboard/task/invite/index.vue'),
      meta: {
        icon: 'ant-design:user-outlined',
        title: t('routes.dashboard.task.invite'),
      },
    },
    {
      path: 'speaker',
      name: 'Speaker',
      component: () => import('/@/views/dashboard/task/speaker/index.vue'),
      meta: {
        icon: 'material-symbols:sound-detection-loud-sound-outline-rounded',
        title: t('routes.dashboard.task.speaker'),
      },
    },
    {
      path: 'script',
      name: 'Script',
      component: () => import('/@/views/dashboard/task/script/index.vue'),
      meta: {
        icon: 'material-symbols:time-auto-outline-rounded',
        title: t('routes.dashboard.task.script'),
      },
    },
  ],
};

export default task;
