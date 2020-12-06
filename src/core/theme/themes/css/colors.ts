import { DefaultTheme } from 'styled-components'
import colors from 'core/theme/colors'

const cssThemeColors: DefaultTheme['colors'] = {
    background: colors.navy,
    backgroundBackground: colors.navyDark,
    backgroundForeground: colors.navyLighter,
    backgroundAlt: colors.navyDark,
    backgroundInverted: colors.greyTeal,
    backgroundInvertedAlt: '#FBFAE1',
    text: colors.greyTeal,
    textAlt: colors.greyTealDark,
    textInverted: colors.navyDark,
    textHighlight: colors.greenDark,
    link: colors.pink,
    linkActive: colors.greenDark,
    contrast: '#0bdf67',
    border: colors.greyTeal,
    heatmap: colors.pinkLight,
    lineChartDefaultColor: '#59DF7F',
    barChart: {
        primary: colors.blue,
        secondary: '#556ad7',
    },
    ranges: {
        tools: {
            would_use: '#59DF7F',
            would_not_use: colors.pink,
            interested: '#ACFFC3',
            not_interested: colors.pinkLight,
            never_heard: '#59608a',
        },
        toolSections: {
            pre_post_processors: colors.indigo,
            css_frameworks: colors.pink,
            css_methodologies: colors.red,
            css_in_js: colors.purple,
        },
        features: {
            used: colors.blue,
            heard: colors.greyTeal,
            never_heard: colors.navyLighter,
        },
        featureSections: {
            syntax: colors.indigo,
            language: colors.pink,
            data_structures: colors.red,
            browser_apis: colors.purple,
            other_features: colors.orange,
        },
        features_simplified: {
            know_it: '#ACFFC3',
            used_it: '#59DF7F',
        },
        gender: {
            male: colors.blue,
            female: colors.teal,
            non_binary: colors.red,
            prefer_not_to_say: colors.greyMediumer,
        },
        opinions: {
            4: colors.pink,
            3: colors.pinkLight,
            2: '#59608a',
            1: colors.blueLight,
            0: colors.blue,
        },
    },
    distinct: [
        colors.indigo,
        colors.teal,
        colors.pink,
        colors.red,
        colors.green,
        colors.yellow,
        colors.aqua,
        colors.orange,
        colors.olive,
        colors.skyblue,
        colors.purple,
    ],
    countries: [
        colors.blue,
        colors.blueLight,
        colors.blueLighter,
        colors.pinkLightest,
        colors.pinkLighter,
        colors.pinkLight,
        colors.pink,
    ],
}

export default cssThemeColors
