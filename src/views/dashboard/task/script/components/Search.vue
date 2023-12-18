<template>
  <Form layout="inline">
    <FormItem :labelCol="{ span: 8 }" :label="t('business.task.script.search.taskName')">
      <Input
        :placeholder="t('business.task.script.search.inputTaskName')"
        v-model:taskName="taskName"
      />
    </FormItem>
    <FormItem>
      <Select
        v-model:status="status"
        style="width: 183px"
        :placeholder="t('business.task.script.search.status')"
      >
        <SelectOption value="ready">{{ t('business.task.script.search.ready') }}</SelectOption>
        <SelectOption value="running">{{ t('business.task.script.search.running') }}</SelectOption>
        <SelectOption value="stop">{{ t('business.task.script.search.stop') }}</SelectOption>
        <SelectOption value="finish">{{ t('business.task.script.search.finish') }}</SelectOption>
      </Select>
    </FormItem>
    <Button type="submit" class="mr-4">
      <SearchOutlined />
      {{ t('business.task.send.search.search') }}
    </Button>
    <Button type="button" class="mr-4">
      <Icon display="contents" icon="material-symbols:forms-add-on-rounded" />
      {{ t('business.task.send.search.insert') }}
    </Button>
  </Form>
</template>
<script setup lang="ts">
  import { Form, FormItem, Select, SelectOption, Input } from 'ant-design-vue';
  import { Button } from '/@/components/Button';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { ref } from 'vue';
  import { SearchOutlined } from '@ant-design/icons-vue';
  import { Icon } from '/@/components/Icon';

  const { t } = useI18n();
  const taskName = ref('');
  const status = ref('');
</script>

<style scoped lang="less"></style>
