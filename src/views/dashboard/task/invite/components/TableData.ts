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
    title: t('business.task.invite.table.taskName'),
    dataIndex: 'taskName',
    auth: '',
  },
  {
    title: t('business.task.invite.table.group'),
    dataIndex: 'group',
    auth: '',
  },
  {
    title: t('business.task.invite.table.type'),
    dataIndex: 'type',
    auth: '',
  },
  {
    title: t('business.task.invite.table.count'),
    dataIndex: 'count',
    auth: '',
  },
  {
    title: t('business.task.invite.table.success'),
    dataIndex: 'success',
    auth: '',
  },
  {
    title: t('business.task.invite.table.failed'),
    dataIndex: 'failed',
    auth: '',
  },
  {
    title: t('business.task.invite.table.status'),
    dataIndex: 'status',
    auth: '',
  },
  {
    title: t('business.task.invite.table.description'),
    dataIndex: 'description',
    auth: '',
  },
  {
    title: t('business.task.invite.table.date'),
    dataIndex: 'date',
    auth: '',
  },
];
