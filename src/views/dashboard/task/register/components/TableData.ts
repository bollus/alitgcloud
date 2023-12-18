import { BasicColumn } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();
export const getBasicColumns: BasicColumn[] = [
  {
    title: t('business.task.register.table.group'),
    dataIndex: 'group',
    auth: '',
  },
  {
    title: t('business.task.register.table.platform'),
    dataIndex: 'platform',
    auth: '',
  },
  {
    title: t('business.task.register.table.proxy'),
    dataIndex: 'proxy',
    auth: '',
  },
  {
    title: t('business.task.register.table.info'),
    dataIndex: 'info',
    auth: '',
  },
  {
    title: t('business.task.register.table.count'),
    dataIndex: 'count',
    auth: '',
  },
  {
    title: t('business.task.register.table.success'),
    dataIndex: 'success',
    auth: '',
  },
  {
    title: t('business.task.register.table.failed'),
    dataIndex: 'failed',
    auth: '',
  },
  {
    title: t('business.task.register.table.status'),
    dataIndex: 'status',
    auth: '',
  },
  {
    title: t('business.task.register.table.date'),
    dataIndex: 'date',
    auth: '',
  },
];
