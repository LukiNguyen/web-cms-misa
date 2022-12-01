<template>
    <div class="employee-table">
        <v-data-table
            v-model="selected"
            show-select
            :headers="headers"
            :items="desserts"
            item-key="code"
            hide-default-footer
            disable-pagination
        >
            <template #footer>
                <Pagination
                    :data="{
                        total: 17,
                        page: 1,
                        perPage: 12
                    }"
                />
            </template>
            <template #[`item.gender`]="{ item }">
                <span>{{ GENDER_LABEL[item.gender] }}</span>
            </template>
            <template #[`item.actions`]="{ item }">
                <div class="flex items-center gap-2 justify-center">
                    <v-menu offset-y :close-on-content-click="false">
                        <template #activator="{ on, attrs }">
                            <div
                                v-bind="attrs"
                                class="flex items-center gap-2 justify-center"
                                v-on="on"
                            >
                                <span class="font-semibold text-second-600">Sửa</span>
                                <v-btn
                                    elevation="0"
                                    class="!text-second-600 !bg-transparent"
                                >
                                    <v-icon>mdi-menu-down</v-icon>
                                </v-btn>
                            </div>
                        </template>
                        <v-list>
                            <v-list-item
                                class="hover:!text-prim-900 hover:bg-black/10 block"
                                @click="$refs.EmpoyeeDialog.open(item, true)"
                            >
                                <span>Nhân bản</span>
                            </v-list-item>
                            <v-list-item
                                class="hover:!text-prim-900 hover:bg-black/10 block"
                                @click="$refs.EmpoyeeDialog.open(item)"
                            >
                                <span>Sửa</span>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </template>
        </v-data-table>

        <EmpoyeeDialog ref="EmpoyeeDialog" />
    </div>
</template>

<script>
    import EmpoyeeDialog from '@/components/employee/Dialog.vue';
    import Pagination from '@/components/shared/Pagination.vue';
    import { mapDataFromOptions } from '@/utils/convertData';
    import { GENDERS_OPTIONS } from '@/constants/employee/genders';

    export default {
        components: {
            Pagination,
            EmpoyeeDialog,
        },

        props: {
            empolyees: {
                type: Array,
                default: () => [],
            },
        },

        data() {
            return {
                selected: [],
                itemss: [
                    { title: 'Nhân bản' },
                    { title: 'Xóa' },
                    { title: 'Ngừng sử dụng' },
                ],
                headers: [
                    {
                        text: 'Mã Nhân viên',
                        align: 'start',
                        value: 'code',
                        width: '160px',
                    },
                    {
                        text: 'Tên nhân viên',
                        value: 'fullName',
                        width: '250px',
                    },
                    {
                        text: 'Giới tính',
                        value: 'gender',
                        width: '120px',
                        sortable: false,
                    },
                    {
                        text: 'Ngày sinh',
                        value: 'dateOfBirth',
                        width: '150px',
                        align: 'center',
                    },
                    {
                        text: 'Số CMND',
                        value: 'identityCardNumber',
                        width: '180px',
                        sortable: false,
                    },
                    {
                        text: 'Chức Danh',
                        value: 'position',
                        width: '200px',
                        sortable: false,
                    },
                    {
                        text: 'Tên đơn vị',
                        value: 'unit',
                        width: '220px',
                        sortable: false,
                    },
                    {
                        text: 'Số tài khoản',
                        value: 'bankAccount',
                        width: '180px',
                        sortable: false,
                    },
                    {
                        text: 'Tên ngân hàng',
                        value: 'bankName',
                        width: '200px',
                        sortable: false,
                    },
                    {
                        text: 'Chi nhánh tài khoản ngân hàng',
                        value: 'bankBranch',
                        width: '300px',
                        sortable: false,
                    },
                    {
                        text: 'Hành động',
                        value: 'actions',
                        sortable: false,
                        width: '150px',
                        align: 'center',
                        fixed: true,
                    },
                ],
                desserts: [
                    {
                        code: 'MS12050',
                        fullName: 'Nguyen Thanh Minh',
                        unit: 'technology',
                        position: 'Nhân viên',
                        dateOfBirth: '20/11/2000',
                        gender: 'male',
                        identityCardNumber: '205106386111',
                        dateRange: '27/12/2027',
                        placeForIdentityCards: 'Nam Định',
                        address: 'Tây Hồ, Hà Nội',
                        phoneNumber: '0931283123',
                        landlineNumber: '0931283123',
                        email: 'minhnguyendev@gmail.com',
                        bankAccount: '312312873899',
                        bankName: 'MB bank',
                        bankBranch: 'Tay Ho',
                        isEmployee: true,
                        isClient: null,
                    },
                ],
            };
        },

        computed: {
            GENDER_LABEL() {
                return this.mapDataFromOptions(GENDERS_OPTIONS, 'value', 'label');
            },
        },

        methods: {
            mapDataFromOptions,
        },
    };
</script>

<style lang="scss">
.employee-table {
  .v-data-table {
    @apply overflow-x-auto #{!important};
    .v-data-table__wrapper > table > thead > tr > th {
      @apply text-base font-bold uppercase text-slate-900 #{!important}
    }
  }
  .v-btn:not(.v-btn--round).v-size--default {
    @apply px-1 h-auto min-w-0 rounded-none #{!important};
    &:focus {
        @apply border border-solid border-second-600 bg-transparent #{!important};
    }
  }
}
</style>
