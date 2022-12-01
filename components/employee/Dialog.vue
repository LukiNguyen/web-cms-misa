<template>
    <v-dialog v-model="visible" max-width="1000" persistent>
        <template #default>
            <v-card>
                <div class="flex-1 flex justify-end items-center">
                    <v-btn
                        class="!bg-white "
                        small
                        elevation="0"
                        fab
                    >
                        <v-icon dark>
                            mdi-help-circle-outline
                        </v-icon>
                    </v-btn>
                    <v-btn
                        class="!bg-white "
                        small
                        elevation="0"
                        fab
                        @click="close"
                    >
                        <v-icon dark>
                            mdi-close
                        </v-icon>
                    </v-btn>
                </div>

                <EmployeeForm ref="EmployeeForm" :employee="employeeData" @submit="submitForm" />

                <div class="px-10">
                    <v-divider />
                    <div class="flex justify-between items-center gap-5 py-8">
                        <v-btn outlined>
                            Hủy
                        </v-btn>
                        <div class="flex justify-end gap-5">
                            <v-btn outlined>
                                Cất
                            </v-btn>
                            <v-btn color="primary" @click="$refs.EmployeeForm.submit()">
                                Cất và thêm
                            </v-btn>
                        </div>
                    </div>
                </div>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
    import EmployeeForm from '@/components/employee/Form.vue';

    export default {
        components: {
            EmployeeForm,
        },

        data() {
            return {
                visible: false,
                employee: {},
                isCopy: false,
            };
        },

        computed: {
            employeeData() {
                return this.employee;
            },
        },

        methods: {
            open(data, type = false) {
                this.employee = data;
                this.isCopy = type;
                this.visible = true;
            },
            close() {
                this.visible = false;
            },

            async submitForm(form) {
                try {
                    if (this.employee) {
                        await this.updateEmployee(form);
                    } else if (this.employee && this.isCopy) {
                        await this.creatEmployee(form);
                    } else {
                        await this.creatEmployee(form);
                    }
                } catch (e) {
                    console.log(e);
                }
            },

            async creatEmployee(form) {
                try {
                    await this.$api.employee.create(form);
                } catch (e) {
                    console.log(e);
                }
            },
            async updateEmployee(form) {
                try {
                    await this.$api.employee.update(form);
                } catch (e) {
                    console.log(e);
                }
            },
        },
    };
</script>
