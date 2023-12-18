<template>
  <Form layout="inline">
    <FormItem>
      <Select
        v-model:status="status"
        style="width: 183px"
        :placeholder="t('business.task.register.search.status')"
      >
        <SelectOption value="ready">{{ t('business.task.register.search.ready') }}</SelectOption>
        <SelectOption value="running">{{
          t('business.task.register.search.running')
        }}</SelectOption>
        <SelectOption value="stop">{{ t('business.task.register.search.stop') }}</SelectOption>
        <SelectOption value="finish">{{ t('business.task.register.search.finish') }}</SelectOption>
      </Select>
    </FormItem>
    <Button type="submit"><SearchOutlined />{{ t('business.task.register.search.search') }}</Button>
    <Button type="button">
      <Icon display="contents" icon="material-symbols:forms-add-on-rounded" />
      {{ t('business.task.register.search.insert') }}
    </Button>
  </Form>
</template>
<script setup lang="ts">
  import { Form, FormItem, Select, SelectOption } from 'ant-design-vue';
  import { Button } from '/@/components/Button';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { SearchOutlined } from '@ant-design/icons-vue';
  import Icon from '/@/components/Icon/src/Icon.vue';
  import { ref } from 'vue';

  const { t } = useI18n();
  const status = ref('');
</script>

<style scoped lang="less"></style>
