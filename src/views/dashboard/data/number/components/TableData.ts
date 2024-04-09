import { BasicColumn } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();
export const getBasicColumns: BasicColumn[] = [
  {
    title: t('business.data.phoneData.table.group'),
    dataIndex: 'group',
    auth: '',
  },
  {
    title: t('business.data.phoneData.table.count'),
    dataIndex: 'count',
    auth: '',
  },
  {
    title: t('business.data.phoneData.table.remain'),
    dataIndex: 'remain',
    auth: '',
  },
  {
    title: t('business.data.phoneData.table.format'),
    dataIndex: 'format',
    auth: '',
  },
  {
    title: t('business.data.phoneData.table.creator'),
    dataIndex: 'creator',
    auth: '',
  },
  {
    title: t('business.data.phoneData.table.date'),
    dataIndex: 'date',
    auth: '',
  },
];
