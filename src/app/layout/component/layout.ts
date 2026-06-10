import { CommonModule } from "@angular/common";
import { Component, computed, effect, inject } from "@angular/core";
import { LayoutService } from "../service/layout";

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule],
    template: `<div class="layout-wrapper" [ngClass]="containerClass()">
        
    </div> `
})
export class Layout {
    layoutService = inject(LayoutService);

    constructor() {
        effect(() => {
            const state = this.layoutService.layoutState();
            if (state.mobileMenuActive) {
                document.body.classList.add('blocked-scroll');
            } else {
                document.body.classList.remove('blocked-scroll');
            }
        });
    }

    containerClass = computed(() => {
        const config = this.layoutService.layoutConfig();
        const state = this.layoutService.layoutState();
        return {
            'layout-overlay': config.menuMode === 'overlay',
            'layout-static': config.menuMode === 'static',
            'layout-static-inactive': state.staticMenuDesktopInactive && config.menuMode === 'static',
            'layout-overlay-active': state.overlayMenuActive,
            'layout-mobile-active': state.mobileMenuActive
        };
    })
}
