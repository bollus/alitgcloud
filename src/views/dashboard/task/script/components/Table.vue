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
  import { getBasicColumns } from './TableData';
  import { ColumnProps } from 'ant-design-vue/lib/table/interface';
  import { ref } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';

  type Key = ColumnProps['key'];

  const { t } = useI18n();
  const columns = getBasicColumns;
  const selectedRowKey = ref<Key[]>([]);
  const actionColumn = ref<BasicColumn>({
    title: t('business.task.script.table.operate'),
    slots: { customRender: 'action' },
  });
  const data = [
    {
      id: 1,
      taskName: '任务名称',
      group: '账号组',
      type: '类型',
      count: '总数',
      success: '成功数',
      failed: '失败数',
      status: '状态',
      date: '日期',
      operate: '操作',
    },
    {
      id: 2,
      taskName: '任务名称',
      group: '账号组',
      type: '类型',
      count: '总数',
      success: '成功数',
      failed: '失败数',
      status: '状态',
      date: '日期',
      operate: '操作',
    },
  ];

  function onSelectChange(selectedRowKeys: Key[]) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    selectedRowKey.value = selectedRowKeys;
  }
</script>
<style scoped lang="less"></style>
