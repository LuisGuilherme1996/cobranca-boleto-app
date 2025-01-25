import { NgModule } from "@angular/core";
import { FloatLabelComponent } from "./components/prime-ng/inputs/floatLabel.component";
import { CardContentResponsiveComponent } from "./components/responsive/responsiveCardContent/responsiveCardContent";

@NgModule({
    declarations: [],
    imports: [
        FloatLabelComponent,
        CardContentResponsiveComponent
    ],
    providers: [],
    exports: [
        FloatLabelComponent,
        CardContentResponsiveComponent
    ]
})

export class SharedModule {}