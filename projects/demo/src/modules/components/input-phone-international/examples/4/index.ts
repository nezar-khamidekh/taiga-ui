import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    TuiInputPhoneInternational,
    tuiInputPhoneInternationalOptionsProvider,
    TuiTooltip,
} from '@taiga-ui/kit';
import {defer} from 'rxjs';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputPhoneInternational, TuiIcon, TuiTooltip],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiInputPhoneInternationalOptionsProvider({
            metadata: defer(async () =>
                import('libphonenumber-js/max/metadata').then((m) => m.default),
            ),
        }),
    ],
})
export default class Example {
    protected readonly countries: readonly TuiCountryIsoCode[] = [
        'TR',
        'IR',
        'IQ',
        'SA',
        'YE',
    ];

    protected countryIsoCode: TuiCountryIsoCode = 'TR';
    protected value = '';
}