import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatformDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiSurfaceDirective} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiPlatformDirective,
        TuiCardLarge,
        TuiSurfaceDirective,
        TuiHeaderDirective,
        TuiButtonDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
