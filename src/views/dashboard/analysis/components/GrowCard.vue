<template>
  <div class="md:flex">
    <Card
      size="small"
      :loading="loading"
      :title="t('business.dashboard.growCard.balance')"
      class="md:w-1/4 w-full !md:mt-0 !mt-4 !md:mr-4"
      :canExpan="false"
    >
      <template #extra>
        <Tag color="green">{{ 'USDT-TRC20' }}</Tag>
      </template>

      <div class="py-4 px-4 flex justify-between">
        <CountTo prefix="$" :startVal="1" :endVal="2000" class="text-2xl" />
        <Icon icon="total-sales|svg" :size="40" />
      </div>

      <div class="p-2 px-4 flex justify-between">
        <span>{{ t('business.dashboard.growCard.rechargeAll') }}</span>
        <CountTo prefix="$" :startVal="1" :endVal="150000" />
      </div>
    </Card>

    <Card
      size="small"
      :loading="loading"
      :title="t('business.dashboard.growCard.portCount')"
      class="md:w-1/4 w-full !md:mt-0 !mt-4 !md:mr-4"
      :canExpan="false"
    >
      <template #extra>
        <Tag color="green">{{ t('business.dashboard.growCard.port') }}</Tag>
      </template>

      <div class="py-4 px-4 flex justify-between">
        <div>
          <CountTo :startVal="0" :endVal="80" class="text-2xl" />
          <span class="text-2xl">/</span>
          <CountTo :startVal="0" :endVal="100" class="text-2xl" />
        </div>
        <Icon icon="total-sales|svg" :size="40" />
      </div>

      <div class="p-2 px-4 flex justify-between">
        <span>{{ t('business.dashboard.growCard.portExpire') }}</span>
        <span>2024-02-04 23:59:59</span>
      </div>
    </Card>

    <Card
      size="small"
      :loading="loading"
      :title="t('business.dashboard.growCard.accountCount')"
      class="md:w-1/4 w-full !md:mt-0 !mt-4 !md:mr-4"
      :canExpan="false"
    >
      <template #extra>
        <Tag color="green">{{ 'Telegram' }}</Tag>
      </template>

      <div class="py-4 px-4 flex justify-between">
        <CountTo :startVal="1" :endVal="500" class="text-2xl" />
        <Icon icon="test|svg" :size="40" />
      </div>

      <div class="p-2 px-4 flex justify-between">
        <span>{{ t('business.dashboard.growCard.bannedCount') }}</span>
        <CountTo :startVal="1" :endVal="73" />
      </div>
    </Card>

    <Card
      size="small"
      :loading="loading"
      :title="t('business.dashboard.growCard.friendCount')"
      class="md:w-1/4 w-full !md:mt-0 !mt-4"
      :canExpan="false"
    >
      <template #extra>
        <Tag color="green">{{ 'Friend' }}</Tag>
      </template>

      <div class="py-4 px-4 flex justify-between">
        <CountTo :startVal="1" :endVal="1800" class="text-2xl" />
        <Icon icon="test|svg" :size="40" />
      </div>

      <div class="p-2 px-4 flex justify-between">
        <span>{{ t('business.dashboard.growCard.messageCount') }}</span>
        <CountTo :startVal="1" :endVal="3400" />
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
  import { CountTo } from '/@/components/CountTo';
  import { Icon } from '/@/components/Icon';
  import { Tag, Card } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';

  defineProps({
    loading: {
      type: Boolean,
    },
  });
  const { t } = useI18n();
</script>
