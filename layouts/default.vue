<template>
    <v-app dark>
        <v-navigation-drawer
            v-model="drawer"
            fixed
            app
        >
            <v-list>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    router
                    exact
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
            fixed
            app
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>
                <slot name="title" />
            </v-toolbar-title>
            <v-spacer />
        </v-app-bar>
        <v-main>
            <v-container class="!p-6">
                <Nuxt />
            </v-container>
        </v-main>
        <v-footer absolute app>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: 'DefaultLayout',
        data() {
            return {
                drawer: false,
                items: [
                    {
                        icon: 'mdi-apps',
                        title: 'Welcome',
                        to: '/',
                    },
                    {
                        icon: 'mdi-account-multiple',
                        title: 'Employee',
                        to: '/employee',
                    },
                ],
                title: 'Vuetify.js',
            };
        },
    };
</script>
