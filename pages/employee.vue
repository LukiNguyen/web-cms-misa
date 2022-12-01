<template>
    <div>
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-3xl font-semibold">
                Nhân viên
            </h2>
            <v-btn depressed color="primary" @click="$refs.EmployeeDialog.open()">
                Thêm mới nhân viên
            </v-btn>
        </div>
        <div class="bg-white rounded shadow-4xl">
            <EmployeeFilter />
            <EmployeeTable />
        </div>
        <EmployeeDialog ref="EmployeeDialog" />
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import EmployeeFilter from '@/components/employee/Filter.vue';
    import EmployeeTable from '@/components/employee/Table.vue';
    import EmployeeDialog from '@/components/employee/Dialog.vue';

    export default {
        components: {
            EmployeeFilter,
            EmployeeTable,
            EmployeeDialog,
        },

        async asyncData({ store }) {
            await store.dispatch('employee/fetchAll');
        },

        data() {
            return {

            };
        },

        computed: {
            ...mapState('employee', ['empolyee']),
        },

        // async created() {
        //     await this.fetchData();
        // },
    };
</script>
