<template>
  <Form layout="inline">
    <FormItem :labelCol="{ span: 8 }" :label="t('business.task.add.search.taskName')">
      <Input
        v-model:taskName="taskName"
        :placeholder="t('business.task.add.search.inputTaskName')"
      />
    </FormItem>
    <FormItem>
      <Select
        v-model:status="status"
        style="width: 183px"
        :placeholder="t('business.task.add.search.status')"
      >
        <SelectOption value="ready">{{ t('business.task.add.search.ready') }}</SelectOption>
        <SelectOption value="running">{{ t('business.task.add.search.running') }}</SelectOption>
        <SelectOption value="stop">{{ t('business.task.add.search.stop') }}</SelectOption>
        <SelectOption value="finish">{{ t('business.task.add.search.finish') }}</SelectOption>
      </Select>
    </FormItem>
    <Button type="submit" class="mr-4">
      <SearchOutlined />
      {{ t('business.task.add.search.search') }}
    </Button>
    <Button type="button">
      <Icon display="contents" icon="material-symbols:forms-add-on-rounded" />
      {{ t('business.task.add.search.insert') }}
    </Button>
  </Form>
</template>
<script setup lang="ts">
  import { Form, FormItem, Input, Select, SelectOption } from 'ant-design-vue';
  import { Button } from '/@/components/Button';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { ref } from 'vue';
  import { SearchOutlined } from '@ant-design/icons-vue';
  import Icon from '/@/components/Icon/src/Icon.vue';

  const { t } = useI18n();
  const taskName = ref('');
  const status = ref('');
</script>

<style scoped lang="less"></style>
