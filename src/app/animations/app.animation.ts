import { trigger, state, style, animate, transition } from '@angular/animations';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

export function visibility() {
    return trigger('visibility', [
        state('shown', style({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        state('hidden', style({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        transition('* => *', animate('0.5s ease-in-out'))
    ]);
}

export function flyInOut() {
    return trigger('flyInOut',[
        state('*', style({
            opacity: 1,
            transition: 'translateX(0)'
        })),
        transition(':enter', [
            style({ 
                transform: 'translateX(-30%)', 
                opacity: 0}),
            animate('300ms ease-in')
        ]),
        transition(':leave',[
            animate('300ms ease-out', style({ 
                transform: 'translateX(30%)', 
                opacity: 0}))
        ])
    ]);
} 

export function expand() {
    return trigger('expand', [
        state('*', style({
            opacity: 1,
            transform: 'translateX(20)'
        })),
        transition(':enter', [
            style({ 
                transform: 'translateY(-70%)', 
                opacity: 0
            }),
            animate('500ms ease-in', style({
                opacity: 1,
                transform: 'translateX(0)'
            }))
        ])
    ]);
}
