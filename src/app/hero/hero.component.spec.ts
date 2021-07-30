import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroComponent } from "./hero.component"

describe('Hero component (shallow test)', () =>{
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            // tells test to not error if unknown attribute is found in the HTML
            schemas: [NO_ERRORS_SCHEMA]
        });
        // create component and store component into a variable
        fixture = TestBed.createComponent(HeroComponent);

        // able to access different parts of the component
        fixture.componentInstance;
    })

    it ('should contain the correct hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3};

        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    })

    it ('should render the hero name in an anchor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3};
        // necessary since no bindings update until a change is detected
        fixture.detectChanges();

        // gets ahold of the elements in the DOM
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    })
})