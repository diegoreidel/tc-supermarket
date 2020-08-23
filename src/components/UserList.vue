<template>
    <div>
        List component
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserList extends Vue {
    @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>

</style>