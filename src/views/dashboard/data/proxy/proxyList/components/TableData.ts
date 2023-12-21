import { BasicColumn } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();
export const getBasicColumns: BasicColumn[] = [
  {
    title: 'Ip',
    dataIndex: 'ip',
    auth: '',
  },
  {
    title: t('business.data.proxy.proxyList.table.port'),
    dataIndex: 'port',
    auth: '',
  },
  {
    title: t('business.data.proxy.proxyList.table.username'),
    dataIndex: 'username',
    auth: '',
  },
  {
    title: t('business.data.proxy.proxyList.table.password'),
    dataIndex: 'password',
    auth: '',
  },
  {
    title: t('business.data.proxy.proxyList.table.control'),
    dataIndex: 'control',
    auth: '',
  },
  {
    title: t('business.data.proxy.proxyList.table.repeat'),
    dataIndex: 'repeat',
    auth: '',
  },
  {
    title: t('business.data.proxy.proxyList.table.group'),
    dataIndex: 'group',
    auth: '',
  },
  {
    title: t('business.data.proxy.proxyList.table.status'),
    dataIndex: 'status',
    auth: '',
  },
  {
    title: t('business.data.proxy.proxyList.table.date'),
    dataIndex: 'date',
    auth: '',
  },
];
