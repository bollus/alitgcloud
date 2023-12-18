import { BasicColumn } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();
export const getBasicColumns: BasicColumn[] = [
  {
    title: t('business.account.groupManage.table.groupName'),
    dataIndex: 'groupName',
    auth: '',
  },
  {
    title: t('business.account.groupManage.table.date'),
    dataIndex: 'date',
    auth: '',
  },
];
