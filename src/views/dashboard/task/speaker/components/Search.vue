<template>
  <Form layout="inline">
    <FormItem>
      <Select
        v-model:status="status"
        style="width: 183px"
        :placeholder="t('business.task.speaker.search.status')"
      >
        <SelectOption value="ready">{{ t('business.task.speaker.search.ready') }}</SelectOption>
        <SelectOption value="running">{{ t('business.task.speaker.search.running') }}</SelectOption>
        <SelectOption value="stop">{{ t('business.task.speaker.search.stop') }}</SelectOption>
        <SelectOption value="finish">{{ t('business.task.speaker.search.finish') }}</SelectOption>
      </Select>
    </FormItem>
    <Button type="submit" class="mr-4">
      <SearchOutlined />
      {{ t('business.task.speaker.search.search') }}
    </Button>
    <Button type="button" class="mr-4">
      <Icon display="contents" icon="material-symbols:forms-add-on-rounded" />
      {{ t('business.task.speaker.search.insert') }}
    </Button>
  </Form>
</template>
<script setup lang="ts">
  import { Form, FormItem, Select, SelectOption } from 'ant-design-vue';
  import { Button } from '/@/components/Button';
  import { SearchOutlined } from '@ant-design/icons-vue';
  import { Icon } from '/@/components/Icon';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { ref } from 'vue';

  const { t } = useI18n();
  const status = ref('');
</script>

<style scoped lang="less"></style>
