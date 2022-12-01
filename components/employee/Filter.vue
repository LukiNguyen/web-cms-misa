<template>
    <div class="employee-filter">
        <div class="px-3 py-4 flex justify-between">
            <div>
                <v-menu offset-y :close-on-content-click="false">
                    <template #activator="{ on, attrs }">
                        <v-btn
                            v-bind="attrs"
                            outlined
                            elevation="0"
                            class="!rounded-full"
                            v-on="on"
                        >
                            Thực hiện hàng loạt
                            <v-icon class="ml-2">
                                mdi-menu-down
                            </v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            class="hover:!text-prim-900 hover:bg-black/10 block"
                            @click="$refs.EmpoyeeDialog.open()"
                        >
                            <span>Xóa</span>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div class="flex justify-end gap-3">
                <div class="w-[300px]">
                    <v-text-field placeholder="Tìm kiếm theo mã, tên nhân viên" outlined>
                        <v-icon slot="append" class="cursor-pointer">
                            mdi-magnify
                        </v-icon>
                    </v-text-field>
                </div>
                <v-btn
                    class="!bg-white "
                    fab
                    small
                    elevation="0"
                >
                    <v-icon dark>
                        mdi-reload
                    </v-icon>
                </v-btn>
                <v-btn
                    class="!bg-white "
                    fab
                    small
                    elevation="0"
                >
                    <v-icon dark>
                        mdi-microsoft-excel
                    </v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: '',
            };
        },
        methods: {
            appendIconCallback() {
                alert('click:append');
            },
            prependIconCallback() {
                alert('click:prepend');
            },
        },
    };
</script>

<style lang="scss">
    .employee-filter {
        .v-input__slot {
            @apply min-h-[40px] mb-0 #{!important};
        }
        .v-input__append-inner {
            @apply mt-2 #{!important};
        }
        .v-text-field__details {
            @apply hidden;
        }
    }
</style>
