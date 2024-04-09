<template>
  <Form layout="inline">
    <FormItem :labelCol="{ span: 8 }" :label="t('business.data.personal.group.search.group')">
      <Input
        v-model:group="group"
        :placeholder="t('business.data.personal.group.search.groupInput')"
      />
    </FormItem>
    <Button class="mr-4" type="submit">
      <SearchOutlined />
      {{ t('business.data.personal.group.search.search') }}
    </Button>
    <Button class="mr-4" type="button">
      <Icon display="contents" icon="material-symbols:forms-add-on-rounded" />
      {{ t('business.data.personal.group.search.insert') }}
    </Button>
    <Button color="error" type="button"
      ><DeleteOutlined />{{ t('business.data.personal.group.search.batchDelete') }}</Button
    >
  </Form>
</template>
<script setup lang="ts">
  import { Form, FormItem, Input } from 'ant-design-vue';
  import { Button } from '/@/components/Button';
  import { SearchOutlined, DeleteOutlined } from '@ant-design/icons-vue';
  import { Icon } from '/@/components/Icon';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { ref } from 'vue';

  const { t } = useI18n();
  const group = ref('');
</script>

<style scoped lang="less"></style>
