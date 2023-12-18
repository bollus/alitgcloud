<template>
  <BasicTable
    inset
    :showIndexColumn="false"
    :row-selection="{ selectedRowKeys: selectedRowKey, onChange: onSelectChange }"
    :clickToRowSelect="true"
    class="mt-4"
    :columns="columns"
    :actionColumn="actionColumn"
    :dataSource="data"
    :pagination="{ pageSize: 20 }"
  >
    <template #action>
      <a>操作</a>
    </template>
  </BasicTable>
</template>
<script setup lang="ts">
  import { BasicColumn, BasicTable } from '/@/components/Table';
  import { getBasicColumns } from '../groupManage/TableData';
  import { ColumnProps } from 'ant-design-vue/lib/table/interface';
  import { ref } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';

  type Key = ColumnProps['key'];

  const { t } = useI18n();
  const columns = getBasicColumns;
  const selectedRowKey = ref<Key[]>([]);
  const actionColumn = ref<BasicColumn>({
    title: t('business.account.groupManage.table.operate'),
    slots: { customRender: 'action' },
  });
  const data = [
    {
      id: 1,
      groupName: 'Group name1',
      date: '2023-12-02',
    },
    {
      id: 2,
      groupName: 'Group name2',
      date: '2023-12-11',
    },
  ];

  function onSelectChange(selectedRowKeys: Key[]) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    selectedRowKey.value = selectedRowKeys;
  }
</script>

<style scoped lang="less"></style>
