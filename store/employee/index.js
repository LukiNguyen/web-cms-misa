export const emptyState = () => ({
    employees: [],
    employee: {},
    pagination: {},
});

export const state = emptyState();

export const mutations = {
    SET_STATE(state, { prop, data }) {
        state[prop] = data;
    },
    SET_EMPTY(state) {
        Object.assign(state, emptyState());
    },
};

export const getters = {
};

export const actions = {
    async fetchAll({ commit }, payload) {
        const { data: { employees, pagination } } = await this.$api.employee.getAll(payload);
        commit('SET_STATE', { prop: 'employees', data: employees });
        commit('SET_STATE', { prop: 'pagination', data: pagination });
    },

    async fetchDetail({ commit }, payload) {
        const { data: { employee } } = await this.$api.employee.getDetail(payload.id);
        commit('SET_STATE', { prop: 'project', data: employee });
    },

    resetState({ commit }) {
        commit('SET_EMPTY');
    },
};
