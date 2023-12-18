<template>
  <Form layout="inline">
    <FormItem :labelCol="{ span: 8 }" :label="t('business.account.groupManage.search.groupName')">
      <Input
        v-model:groupName="groupName"
        :placeholder="t('business.account.groupManage.search.inputGroupName')"
      />
    </FormItem>
    <Button type="submit" class="mr-4">
      <SearchOutlined />
      {{ t('business.account.groupManage.search.search') }}
    </Button>
    <Button color="primary">
      <Icon display="contents" icon="material-symbols:forms-add-on-rounded" />
      {{ t('business.account.groupManage.search.insert') }}
    </Button>
  </Form>
</template>
<script setup lang="ts">
  import { Form, FormItem, Input } from 'ant-design-vue';
  import { ref } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { SearchOutlined } from '@ant-design/icons-vue';
  import { Button } from '/@/components/Button';
  import Icon from '/@/components/Icon/src/Icon.vue';

  const { t } = useI18n();
  const groupName = ref('');
</script>

<style scoped lang="less"></style>
