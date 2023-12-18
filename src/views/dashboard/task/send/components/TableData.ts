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
    title: t('business.task.send.table.group'),
    dataIndex: 'group',
    auth: '',
  },
  {
    title: t('business.task.send.table.target'),
    dataIndex: 'target',
    auth: '',
  },
  {
    title: t('business.task.send.table.type'),
    dataIndex: 'type',
    auth: '',
  },
  {
    title: t('business.task.send.table.content'),
    dataIndex: 'content',
    auth: '',
  },
  {
    title: t('business.task.send.table.count'),
    dataIndex: 'count',
    auth: '',
  },
  {
    title: t('business.task.send.table.success'),
    dataIndex: 'success',
    auth: '',
  },
  {
    title: t('business.task.send.table.failed'),
    dataIndex: 'failed',
    auth: '',
  },
  {
    title: t('business.task.send.table.status'),
    dataIndex: 'status',
    auth: '',
  },
  {
    title: t('business.task.send.table.date'),
    dataIndex: 'date',
    auth: '',
  },
];
