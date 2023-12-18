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
    title: t('business.task.speaker.table.taskName'),
    dataIndex: 'taskName',
    auth: '',
  },
  {
    title: t('business.task.speaker.table.group'),
    dataIndex: 'group',
    auth: '',
  },
  {
    title: t('business.task.speaker.table.type'),
    dataIndex: 'type',
    auth: '',
  },
  {
    title: t('business.task.speaker.table.rule'),
    dataIndex: 'rule',
    auth: '',
  },
  {
    title: t('business.task.speaker.table.interval'),
    dataIndex: 'interval',
    auth: '',
  },
  {
    title: t('business.task.speaker.table.count'),
    dataIndex: 'count',
    auth: '',
  },
  {
    title: t('business.task.speaker.table.success'),
    dataIndex: 'success',
    auth: '',
  },
  {
    title: t('business.task.speaker.table.failed'),
    dataIndex: 'failed',
    auth: '',
  },
  {
    title: t('business.task.speaker.table.status'),
    dataIndex: 'status',
    auth: '',
  },
  {
    title: t('business.task.speaker.table.date'),
    dataIndex: 'date',
    auth: '',
  },
];
