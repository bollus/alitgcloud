import { BasicColumn } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();
export const getBasicColumns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    auth: '',
  },
  {
    title: t('business.task.add.table.taskName'),
    dataIndex: 'taskName',
    auth: '',
  },
  {
    title: t('business.task.add.table.group'),
    dataIndex: 'group',
    auth: '',
  },
  {
    title: t('business.task.add.table.userData'),
    dataIndex: 'userData',
    auth: '',
  },
  {
    title: t('business.task.add.table.type'),
    dataIndex: 'type',
    auth: '',
  },
  {
    title: t('business.task.add.table.count'),
    dataIndex: 'count',
    auth: '',
  },
  {
    title: t('business.task.add.table.success'),
    dataIndex: 'success',
    auth: '',
  },
  {
    title: t('business.task.add.table.failed'),
    dataIndex: 'failed',
    auth: '',
  },
  {
    title: t('business.task.add.table.status'),
    dataIndex: 'status',
    auth: '',
  },
  {
    title: t('business.task.add.table.description'),
    dataIndex: 'description',
    auth: '',
  },
  {
    title: t('business.task.add.table.date'),
    dataIndex: 'date',
    auth: '',
  },
];
