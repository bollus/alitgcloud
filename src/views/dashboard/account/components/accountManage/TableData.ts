import { BasicColumn } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();
export const getBasicColumns: BasicColumn[] = [
  {
    title: t('business.account.accountManage.table.avatar'),
    dataIndex: 'avatar',
    auth: '',
  },
  {
    title: t('business.account.accountManage.table.country'),
    dataIndex: 'country',
    auth: '',
  },
  {
    title: t('business.account.accountManage.table.phone'),
    dataIndex: 'phone',
    auth: '',
  },
  {
    title: t('business.account.accountManage.table.username'),
    dataIndex: 'username',
    auth: '',
  },
  {
    title: t('business.account.accountManage.table.nickname'),
    dataIndex: 'nickname',
    auth: '',
  },
  {
    title: t('business.account.accountManage.table.friend'),
    dataIndex: 'friend',
    auth: '',
  },
  {
    title: t('business.account.accountManage.table.group'),
    dataIndex: 'group',
    auth: '',
  },
  {
    title: t('business.account.accountManage.table.accountGroup'),
    dataIndex: 'accountGroup',
    auth: '',
  },
  {
    title: t('business.account.accountManage.table.online'),
    dataIndex: 'online',
    auth: '',
  },
  {
    title: t('business.account.accountManage.table.status'),
    dataIndex: 'status',
    auth: '',
  },
  {
    title: t('business.account.accountManage.table.description'),
    dataIndex: 'description',
    auth: '',
  },
  {
    title: t('business.account.accountManage.table.socks5'),
    dataIndex: 'socks5',
    auth: '',
  },
  {
    title: t('business.account.accountManage.table.customerService'),
    dataIndex: 'customerService',
    auth: '',
  },
  {
    title: t('business.account.accountManage.table.coordinates'),
    dataIndex: 'coordinates',
    auth: '',
  },
  {
    title: t('business.account.accountManage.table.date'),
    dataIndex: 'date',
    auth: '',
  },
];
