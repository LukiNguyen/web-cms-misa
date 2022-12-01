<template>
    <div class="custom-pagination flex justify-between items-center py-3 px-3">
        <div>Tổng số: <span class="font-bold">{{ pagination?.total || 0 }}</span> bản ghi</div>
        <div class="flex items-center justify-end flex-1 gap-3">
            <v-select
                v-model="pagination.perPage"
                :items="PAGINATION_OPTIONS"
                item-value="value"
                item-text="label"
                outlined
                class="!max-w-[250px]"
            />
            <v-pagination
                v-model="pagination.page"
                :length="total"
                :total-visible="6"
                class=""
            />
        </div>
    </div>
</template>

<script>
    import { PAGINATION_OPTIONS } from '@/configs/pagination';
    import _assign from 'lodash/assign';
    import _cloneDeep from 'lodash/cloneDeep';
    import _omit from 'lodash/omit';

    export default {
        props: {
            router: {
                type: Boolean,
                default: true,
            },
            data: {
                type: Object,
                required: true,
            },
            isQuery: {
                type: Boolean,
                default: true,
            },
            query: {
                type: String,
                default: 'page',
            },
            limitQuery: {
                type: String,
                default: 'limit',
            },
        },
        data() {
            return {
                PAGINATION_OPTIONS,
                pagination: _cloneDeep({
                    ...this.data,
                    page: parseInt(this.data?.page, 10),
                    perPage: parseInt(this.data?.perPage, 10),
                }),
                goTo: 1,

            };
        },

        computed: {
            total() {
                return Math.floor(this.pagination?.total / this.pagination?.perPage);
            },
        },

        watch: {
            data(value) {
                this.pagination = _cloneDeep({
                    ...value,
                    page: parseInt(value.page, 10),
                });
                this.goTo = +value.page;
            },
        },

        methods: {
            handleChangePage(page) {
                if (this.isQuery) {
                    this.pushParam({
                        [this.query]: Number.isInteger(page) ? page : undefined,
                    });
                } else {
                    this.$emit('changePage', { page });
                }
            },

            changePerPage(perPage) {
                if (this.isQuery) {
                    this.pushParam({
                        [this.limitQuery]: perPage,
                        [this.query]: 1,
                    });
                } else {
                    this.$emit('changePage', { perPage });
                }
            },

            pushParam(params) {
                this.$emit('change', {
                    ...this.pagination,
                    ...params,
                });
                if (this.router) {
                    const path = this.$route.path;

                    const otherParams = _omit(this.$route.query, Object.keys(params));
                    const query = _assign({}, otherParams, params);

                    this.$router.push({ path, query });
                }
            },
        },
    };
</script>

<style lang="scss">
.custom-pagination {

    .v-input__slot {
        @apply mb-0 #{!important};
    }
    .v-text-field.v-text-field--enclosed .v-text-field__details {
        @apply hidden #{!important};
    }
}
</style>
