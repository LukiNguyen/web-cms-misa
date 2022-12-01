<template>
    <v-form
        ref="form"
        v-model="validation"
        class="employee-form"
    >
        <div class="px-10">
            <div class="flex items-center gap-4 mb-5">
                <h2 class="text-3xl font-semibold">
                    Thông tin nhân viên
                </h2>
                <div class="flex items-center gap-3">
                    <v-checkbox v-model="form.isClient" label="Là khách hàng" />
                    <v-checkbox v-model="form.isEmployee" label="Là nhà cung cấp" />
                </div>
            </div>

            <div class="grid grid-cols-2 gap-5">
                <div>
                    <div class="grid grid-cols-5 gap-3">
                        <div class="relative col-span-2">
                            <span class="inline-block mb-2 font-semibold">Mã <span class="text-danger-900">*</span></span>
                            <v-text-field
                                v-model="form.code"
                                :rules="rules.code"
                                autofocus
                                outlined
                                small
                                placeholder="Mã nhân viên"
                                class="relative"
                            />
                        </div>
                        <div class="col-span-3">
                            <span class="inline-block mb-2 font-semibold">Tên <span class="text-danger-900">*</span></span>
                            <v-text-field
                                v-model="form.fullName"
                                :rules="rules.fullName"
                                outlined
                                small
                                placeholder="Mã nhân viên"
                            />
                        </div>
                    </div>
                    <div>
                        <span class="inline-block mb-2 font-semibold">Đơn vị <span class="text-danger-900">*</span></span>
                        <v-select
                            v-model="form.unit"
                            :rules="rules.unit"
                            :items="items"
                            item-value="value"
                            item-text="label"
                            outlined
                            placeholder="Chức vụ"
                        />
                    </div>
                    <div>
                        <span class="inline-block mb-2 font-semibold">Chức danh</span>
                        <v-text-field
                            v-model="form.position"
                            outlined
                            small
                            placeholder="Chức danh"
                        />
                    </div>
                </div>
                <div>
                    <div class="grid grid-cols-5 gap-3">
                        <div class="col-span-2">
                            <span class="inline-block mb-2 font-semibold">Ngày sinh</span>
                            <v-menu
                                v-model="dateOfBirthMenu"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                :nudge-left="80"
                                min-width="auto"
                            >
                                <template #activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="form.dateOfBirth"
                                        append-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        outlined
                                        placeholder="Ngày sinh"
                                        v-on="on"
                                        @keydown.enter="dateOfBirthMenu = true"
                                    />
                                </template>
                                <v-date-picker
                                    v-model="form.dateOfBirth"
                                    @input="dateOfBirthMenu = false"
                                />
                            </v-menu>
                        </div>
                        <div class="col-span-3">
                            <span class="inline-block mb-2 font-semibold">Giới tính</span>
                            <v-radio-group v-model="form.gender" row>
                                <v-radio
                                    v-for="gender in GENDERS_OPTIONS"
                                    :key="gender.value"
                                    :label="gender.label"
                                    :value="gender.value"
                                />
                            </v-radio-group>
                        </div>
                    </div>
                    <div class="grid grid-cols-5 gap-3">
                        <div class="col-span-3">
                            <span class="inline-block mb-2 font-semibold">Số CMND/CCCD</span>
                            <v-text-field
                                v-model="form.identityCardNumber"
                                :rules="rules.identityCardNumber"
                                outlined
                                small
                                placeholder="Số CMND/CCCD"
                            />
                        </div>
                        <div class="col-span-2">
                            <span class="inline-block mb-2 font-semibold">Ngày cấp</span>
                            <v-menu
                                v-model="dateRangeMenu"
                                :close-on-content-click="false"
                                :nudge-left="80"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template #activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="form.dateRange"
                                        placeholder="Ngày cấp"
                                        append-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        outlined
                                        v-on="on"
                                    />
                                </template>
                                <v-date-picker
                                    v-model="form.dateRange"
                                    @input="dateRangeMenu = false"
                                />
                            </v-menu>
                        </div>
                    </div>
                    <div>
                        <span class="inline-block mb-2 font-semibold">Nơi cấp</span>
                        <v-text-field
                            v-model="form.placeForIdentityCards"
                            outlined
                            small
                            placeholder="Nơi cấp"
                        />
                    </div>
                </div>
            </div>
            <div>
                <span class="inline-block mb-2 font-semibold">Địa chỉ</span>
                <v-text-field
                    v-model="form.address"
                    outlined
                    small
                    placeholder="Địa chỉ thường trú"
                />
            </div>
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-3">
                    <span class="inline-block mb-2 font-semibold">ĐT di động</span>
                    <v-text-field
                        v-model="form.phoneNumber"
                        :rules="rules.phoneNumber"
                        outlined
                        small
                        placeholder="Số điện thoại bàn"
                    />
                </div>
                <div class="col-span-3">
                    <span class="inline-block mb-2 font-semibold">ĐT cố định</span>
                    <v-text-field
                        v-model="form.landlineNumber"
                        :rules="rules.landlineNumber"
                        outlined
                        small
                        placeholder="Số điện thoại cố định"
                    />
                </div>
                <div class="col-span-3">
                    <span class="inline-block mb-2 font-semibold">Email</span>
                    <v-text-field
                        v-model="form.email"
                        :rules="rules.email"
                        outlined
                        small
                        placeholder="Email"
                    />
                </div>
            </div>
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-3">
                    <span class="inline-block mb-2 font-semibold">Tài khoản ngân hàng</span>
                    <v-text-field
                        v-model="form.bankAccount"
                        :rules="rules.bankAccount"
                        outlined
                        small
                        placeholder="Tài khoản ngân hàng"
                    />
                </div>
                <div class="col-span-3">
                    <span class="inline-block mb-2 font-semibold">Tên ngân hàng</span>
                    <v-text-field
                        v-model="form.bankName"
                        outlined
                        small
                        placeholder="Tên ngân hàng"
                    />
                </div>
                <div class="col-span-3">
                    <span class="inline-block mb-2 font-semibold">Chi nhánh</span>
                    <v-text-field
                        v-model="form.bankBranch"
                        outlined
                        small
                        placeholder="Chi nhánh ngân hàng"
                    />
                </div>
            </div>
        </div>
    </v-form>
</template>

<script>
    // import _cloneDeep from 'lodash';
    import { GENDERS_OPTIONS, GENDERS } from '@/constants/employee/genders';
    import { validEmail, validNumberString, phoneValidator } from '@/utils/form';

    const defaultForm = {
        code: null,
        fullName: null,
        unit: null,
        position: null,
        dateOfBirth: null,
        gender: GENDERS.MALE,
        identityCardNumber: null,
        dateRange: null,
        placeForIdentityCards: null,
        address: null,
        phoneNumber: null,
        landlineNumber: null,
        email: null,
        bankAccount: null,
        bankName: null,
        bankBranch: null,
        isEmployee: true,
        isClient: null,
    };

    export default {
        props: {
            employee: {
                type: Object,
            },
        },
        data() {
            return {
                form: this.employee ? this.employee : defaultForm,
                GENDERS,
                GENDERS_OPTIONS,
                validation: true,
                items: [
                    {
                        label: 'Phòng quản lý',
                        value: 'manager',
                    },
                    {
                        label: 'Phòng kỹ thuật',
                        value: 'technology',
                    },
                    {
                        label: 'Phòng thiết kế',
                        value: 'design',
                    },
                ],
                defaultForm,
                rules: {
                    code: [(value) => !!value || 'Mã code không được để trống'],
                    fullName: [(value) => !!value || 'Tên không được để trống'],
                    unit: [(value) => !!value || 'Đơn vị không được để trống'],
                    identityCardNumber: [(value) => !value || validNumberString(value)],
                    phoneNumber: [(value) => !value || phoneValidator(value)],
                    landlineNumber: [(value) => !value || phoneValidator(value)],
                    email: [(value) => !value || validEmail(value)],
                    bankAccount: [(value) => !value || validNumberString(value)],
                },
                dateOfBirthMenu: false,
                dateRangeMenu: false,
            };
        },

        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    this.$emit('submit', this.form);
                }
            },
            reset() {
                this.$refs.form.reset();
            },
            resetValidation() {
                this.$refs.form.resetValidation();
            },
        },
    };
</script>

<style lang="scss">
.employee-form {
    .v-input--checkbox {
        .v-messages.theme--light {
            @apply hidden #{!important};
        }
    }
}
</style>
