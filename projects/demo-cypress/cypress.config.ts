import {nxComponentTestingPreset} from '@nx/angular/plugins/component-testing';
import {defineConfig} from 'cypress';
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin';

const preset = nxComponentTestingPreset(__filename);

export default defineConfig({
    video: false,
    fixturesFolder: 'src/fixtures',
    viewportWidth: 500,
    viewportHeight: 900,
    responseTimeout: 60000,
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
    component: {
        ...preset,
        devServer: {
            ...preset.devServer,
            options: {
                ...preset.devServer.options,
                projectConfig: {
                    ...preset.devServer.options.projectConfig,
                    buildOptions: {
                        ...preset.devServer.options.projectConfig.buildOptions,
                        tsConfig: './tsconfig.json',
                        assets: [
                            {
                                glob: '**/*',
                                input: 'projects/demo/src/assets/',
                                output: './assets/',
                            },
                            {
                                glob: '**/*',
                                input: 'projects/icons/src',
                                output: 'assets/taiga-ui/icons',
                            },
                        ],
                        baseHref: '/',
                        styles: ['projects/demo/src/styles/styles.less'],
                    },
                },
            },
        },
        supportFile: 'src/support/component.ts',
        indexHtmlFile: 'src/support/component-index.html',
        specPattern: 'src/tests/**/*.cy.ts',
        experimentalSingleTabRunMode: true,
        setupNodeEvents(on, config) {
            getCompareSnapshotsPlugin(on, config);

            on('before:browser:launch', (browser, launchOptions) => {
                if (browser.name === 'chrome') {
                    launchOptions.args.push(
                        '--no-sandbox',
                        '-–no-first-run',
                        '--disable-setuid-sandbox',
                        '--hide-scrollbars',
                        '--printBackground=true',
                        '--disable-dev-shm-usage',
                        '--disable-gpu',
                        '--font-render-hinting=medium',
                        '--disable-skia-runtime-opts',
                        '--disable-lcd-text',
                        '--disable-accelerated-2d-canvas',
                        '--disable-canvas-aa',
                        '--disable-composited-antialiasing',
                        '--force-device-scale-factor=2',
                        '--high-dpi-support=1',
                        '--force-prefers-reduced-motion',
                        '--force-color-profile=srgb',
                        '--incognito',
                    );
                }

                return launchOptions;
            });

            return config;
        },
    },
});
