import { BasicColumn } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();
export const getBasicColumns: BasicColumn[] = [
  {
    title: t('business.data.proxy.proxyGroup.table.group'),
    dataIndex: 'group',
    auth: '',
  },
  {
    title: t('business.data.proxy.proxyGroup.table.date'),
    dataIndex: 'date',
    auth: '',
  },
];
