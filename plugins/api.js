import Employee from '@/api/employee';

export default (context, inject) => {
    // Initialize API factories
    const factories = {
        employee: Employee(context.$axios),
    };

    // Inject $api
    inject('api', factories);
};
