import { of } from "rxjs";
import { HeroesComponent } from "../heroes/heroes.component"

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'Spider Dude', strength: 8},
            {id: 2, name: 'Kayla', strength: 10},
            {id: 3, name: 'Erick', strength: 9}
        ]

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

        component = new HeroesComponent(mockHeroService);
    })

    describe('delete', () => {
        it('should remove the indicated hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        })

        // interaction test
        it('should call deleteHero with correct parameter', () => {
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        })
    })
})