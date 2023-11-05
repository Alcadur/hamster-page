import { allSkillsArray, allSkillsByKey } from '@/data/skillsUtils';

const mockSkills = [
    { name: 'JavaScript', level: 99 },
    { name: 'CSS', level: 99 }
]

describe('SkillsUtils', function () {

    jest.mock('./skills.json', () => mockSkills);

    describe('allSkillsArray', function () {
        it('should not change source array by reference', function () {
            const NAME_BEFORE_CHANGE = mockSkills[0].name;
            allSkillsArray[0].name = 'a';

            expect(mockSkills[0].name).not.toEqual(allSkillsArray[0].name);
            expect(mockSkills[0].name).toEqual(NAME_BEFORE_CHANGE);
        });
    });

    describe('allSkillsByKey', function () {
        it('should map name to key based on "skillNameKeyMap"', function () {
            expect(allSkillsByKey.JavaScript).toBeUndefined();
            expect(allSkillsByKey.javaScript).toBeDefined();
        });

        it('should change name to lowercase when there will bo no mapper', function () {
            expect(allSkillsByKey.css).toBeDefined();
        });
    });
});