<template>
  <Form layout="inline">
    <FormItem>
      <span class="mr-4">
        <Select
          v-model:type="type"
          style="width: 183px"
          :placeholder="t('business.task.send.search.type')"
        >
          <SelectOption value="text">{{ t('business.task.send.search.text') }}</SelectOption>
          <SelectOption value="image">{{ t('business.task.send.search.image') }}</SelectOption>
          <SelectOption value="imageAndText">{{
            t('business.task.send.search.imageAndText')
          }}</SelectOption>
          <SelectOption value="voice">{{ t('business.task.send.search.voice') }}</SelectOption>
          <SelectOption value="forward">{{ t('business.task.send.search.forward') }}</SelectOption>
        </Select>
      </span>
      <Select
        v-model:status="status"
        style="width: 183px"
        :placeholder="t('business.task.send.search.status')"
      >
        <SelectOption value="ready">{{ t('business.task.send.search.ready') }}</SelectOption>
        <SelectOption value="running">{{ t('business.task.send.search.running') }}</SelectOption>
        <SelectOption value="stop">{{ t('business.task.send.search.stop') }}</SelectOption>
        <SelectOption value="finish">{{ t('business.task.send.search.finish') }}</SelectOption>
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
    <Button type="button" color="error">
      <DeleteOutlined />
      {{ t('business.task.send.search.deleteAllCache') }}
    </Button>
  </Form>
</template>
<script setup lang="ts">
  import { Form, FormItem, Select, SelectOption } from 'ant-design-vue';
  import { Button } from '/@/components/Button';
  import { Icon } from '/@/components/Icon';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { ref } from 'vue';
  import { SearchOutlined, DeleteOutlined } from '@ant-design/icons-vue';

  const { t } = useI18n();
  const type = ref('');
  const status = ref('');
</script>

<style scoped lang="less"></style>
