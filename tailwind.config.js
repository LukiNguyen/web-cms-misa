// Default config here: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const colors = require('tailwindcss/colors');

module.exports = {
    content: [],
    safelist: [{
        pattern: /bg-(prim|blue|orange|red|yellow|gray|green)-100/,
    }, {
        pattern: /border-(prim|blue|orange|red|yellow|gray|green)-100/,
    },
    'bg-yellow-100',
    'from-prim-800',
    'to-prim-900',
    'from-second-500',
    'to-second-600',
    'from-yellow-900',
    'to-warning-900',
    ],
    theme: {
        extend: {
            boxShadow: {
                '3xl': '0px 1px 0px #D7DAE7',
                '4xl': '0px 1px 5px rgba(0, 0, 0, 0.15)',
            },
            transitionProperty: {
                height: 'height',
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            background: '#F5F7F8',
            prim: {
                900: '#3aa554',
                800: '#818DEF',
                700: '#939EF1',
                600: '#A5AEF3',
                500: '#B7BEF5',
                400: '#C9CFF8',
                300: '#DBDFFA',
                200: '#EDEFFD',
                50: '#4D96FF',
            },
            second: {
                900: '#0E2D80',
                600: '#3E8FFF',
                500: '#3E9EFF',
                400: '#51ADFF',
                300: '#6DBCFF',
                200: '#97CFFF',
                100: '#BFE1FF',
                50: '#E5F3FF',
            },
            gray: {
                900: '#131313',
                800: '#333333',
                700: '#515151',
                600: '#646464',
                500: '#8B8B8B',
                400: '#ACACAC',
                300: '#D1D1D1',
                200: '#E3E3E3',
                100: '#EEEEEE',
                50: '#F7F7F7',
            },
            danger: {
                900: '#D11A2A',
                800: '#FF6A77',
                500: '#FFF6F8',
                100: '#FF6B6B',
                50: '#FFF6F8',
            },
            success: {
                900: '#54B767',
                800: '#54B767',
                50: '#F4FEF7',
                100: '#6BCB77',
            },
            warning: {
                900: '#FFA34B',
                800: '#F5ECE3',
                50: '#FFF9F3',
            },
            yellow: {
                900: '#FFD66B',
            },
            neutral: {
                50: '#fafafa',
                100: '#f5f5f5',
                200: '#e5e5e5',
                300: '#d4d4d4',
                400: '#a3a3a3',
                500: '#737373',
                600: '#525252',
                700: '#404040',
                800: '#262626',
                900: '#171717',
            },
            slate: {
                50: '#f8fafc',
                100: '#f1f5f9',
                200: '#e2e8f0',
                300: '#cbd5e1',
                400: '#94a3b8',
                500: '#64748b',
                600: '#475569',
                700: '#334155',
                800: '#1e293b',
                900: '#0f172a',
            },
        },
        fontSize: {
            '2xs': ['10px', { lineHeight: '14px' }],
            xs: ['12px', { lineHeight: '18px' }],
            sm: ['13px', { lineHeight: '20px' }],
            base: ['14px', { lineHeight: '22px' }],
            lg: ['16px', { lineHeight: '24px' }],
            xl: ['18px', { lineHeight: '28px' }],
            '2xl': ['20px', { lineHeight: '30px' }],
            '3xl': ['24px', { lineHeight: '36px' }],
            '4xl': ['36px', { lineHeight: '48px' }],
            '5xl': ['39px', { lineHeight: '51px' }],
            '6xl': ['46px', { lineHeight: '54px' }],
            '7xl': ['72px', { lineHeight: '64px' }],
        },
        fontWeight: {
            regular: '500',
            semibold: '600',
            bold: '700',
        },
        borderRadius: {
            none: '0px',
            sm: '4px',
            DEFAULT: '8px',
            md: '10px',
            lg: '16px',
            xl: '20px',
            full: '9999px',
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
};