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
    title: t('business.task.script.table.taskName'),
    dataIndex: 'taskName',
    auth: '',
  },
  {
    title: t('business.task.script.table.group'),
    dataIndex: 'group',
    auth: '',
  },
  {
    title: t('business.task.script.table.type'),
    dataIndex: 'type',
    auth: '',
  },
  {
    title: t('business.task.script.table.count'),
    dataIndex: 'count',
    auth: '',
  },
  {
    title: t('business.task.script.table.success'),
    dataIndex: 'success',
    auth: '',
  },
  {
    title: t('business.task.script.table.failed'),
    dataIndex: 'failed',
    auth: '',
  },
  {
    title: t('business.task.script.table.status'),
    dataIndex: 'status',
    auth: '',
  },
  {
    title: t('business.task.script.table.date'),
    dataIndex: 'date',
    auth: '',
  },
];
