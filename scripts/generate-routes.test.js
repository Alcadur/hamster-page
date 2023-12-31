describe('scripts/generate-routes', function () {
    let fsMock;

    beforeEach(function () {
        jest.mock('fs', () => ({
            readdirSync: jest.fn(),
            lstatSync: jest.fn((path) => {
                const fileOrDir = path.split('/').at(-1);

                return {
                    isDirectory: () => fileOrDir.substring(0, 3) === 'dir'
                };
            }),
            writeFileSync: jest.fn()
        }));

        fsMock = require('fs');
    });

    afterEach(function () {
        jest.resetModules();
        jest.resetAllMocks();
    });

    describe('file creation', function () {
        beforeEach(function () {
            fsMock.readdirSync.mockReturnValueOnce([]);
        });

        it('should save file under "./src/config/routes.js" with "w" flag', function () {
            require('./generate-routes');

            const writeFileSyncFirstCall = fsMock.writeFileSync.mock.calls[0];

            expect(writeFileSyncFirstCall[0]).toEqual('./src/config/routes.js');
            expect(writeFileSyncFirstCall[2].flag).toEqual('w');
        });
    });

    describe('static content', function () {
        beforeEach(function () {
            fsMock.readdirSync.mockReturnValueOnce([]);
        });

        it('should add generated info in first line', function () {
            require('./generate-routes');

            const fileContentLines = getWriteFileSyncFileContentLines(fsMock);

            expect(fileContentLines[0]).toEqual('// That file was generated by src/scripts/generated-routes.js run it again to update');
        });

        it('should add ROUTE_INDEX as first route', function () {
            require('./generate-routes');

            const fileContentLines = getWriteFileSyncFileContentLines(fsMock);

            expect(fileContentLines[1]).toEqual('export const ROUTE_INDEX = "/";');
        });
    });

    describe('flat structure', function () {
        /**
         * @param {string[]} flatStructure
         */
        function prepare(flatStructure) {
            fsMock.readdirSync.mockReturnValue([])
                .mockReturnValueOnce(flatStructure);
        }

        it('should generate correct routes', function () {
            prepare(['dir1', 'dir2', 'file', 'dir4-with-dash']);

            require('./generate-routes');

            const fileContentLines = getWriteFileSyncFileContentLines(fsMock);

            expect(fileContentLines).toHaveLength(5);
            expect(fileContentLines[2]).toEqual('export const ROUTE_DIR1 = "/dir1";');
            expect(fileContentLines[3]).toEqual('export const ROUTE_DIR2 = "/dir2";');
            expect(fileContentLines[4]).toEqual('export const ROUTE_DIR4_WITH_DASH = "/dir4-with-dash";');

        });

        it('should sort content ascending', function () {
            prepare(['dir-bbb', 'dir-ccc', 'file', 'dir-aaa']);

            require('./generate-routes');

            const fileContentLines = getWriteFileSyncFileContentLines(fsMock);

            expect(fileContentLines).toHaveLength(5);
            expect(fileContentLines[2]).toEqual('export const ROUTE_DIR_AAA = "/dir-aaa";');
            expect(fileContentLines[3]).toEqual('export const ROUTE_DIR_BBB = "/dir-bbb";');
            expect(fileContentLines[4]).toEqual('export const ROUTE_DIR_CCC = "/dir-ccc";');
        });
    });

    describe('nested structure', function () {
        /**
         * @param {[string[]]} nestedStructure - [
         *  ['dir1', 'dir2', ...], - level 0
         *  ['dir1/dir1.1', 'dir1/dir1.2', ...], - level 1 for dir1
         *  [], - back to root path like "cd .."
         *  ['dir2/dir2.1', 'dir2/dir2.2', ...], - level 1 for dir2
         *  [],
         *  ..., - reset level 1 dirs
         *  [...], - level 2 for dir 1 (content of dir1.1)
         *  ]
         */
        function prepare(nestedStructure) {
            fsMock.readdirSync.mockReturnValue([]);

            nestedStructure.forEach(level => {
                fsMock.readdirSync.mockReturnValueOnce(level);
            });
        }

        it('should correct generate nested routs', function () {
            const endOfDir = [];
            const level0 = ['dir1', 'dir2', 'dir3'];
            const dir1 = ['dir1-1'];
            const dir2 = ['dir2-1', 'dir2-2', 'dir2-3'];
            const dir2_1 = ['dir2-1-1'];
            const dir2_3 = ['dir2-3-1'];
            const dir3 = ['dir3-1', 'dir3-2'];
            const dir3_2 = ['dir3-2-1'];

            prepare([
                level0, dir1, endOfDir, dir2, dir2_1, endOfDir, endOfDir, dir2_3, endOfDir, dir3, endOfDir, dir3_2
            ]);

            require('./generate-routes');

            const fileContentLines = getWriteFileSyncFileContentLines(fsMock);

            expect(fileContentLines[1]).toEqual('export const ROUTE_INDEX = "/";');
            expect(fileContentLines[2]).toEqual('export const ROUTE_DIR1 = "/dir1";');
            expect(fileContentLines[3]).toEqual('export const ROUTE_DIR1__DIR1_1 = "/dir1/dir1-1";');
            expect(fileContentLines[4]).toEqual('export const ROUTE_DIR2 = "/dir2";');
            expect(fileContentLines[5]).toEqual('export const ROUTE_DIR2__DIR2_1 = "/dir2/dir2-1";');
            expect(fileContentLines[6]).toEqual('export const ROUTE_DIR2__DIR2_1__DIR2_1_1 = "/dir2/dir2-1/dir2-1-1";');
            expect(fileContentLines[7]).toEqual('export const ROUTE_DIR2__DIR2_2 = "/dir2/dir2-2";');
            expect(fileContentLines[8]).toEqual('export const ROUTE_DIR2__DIR2_3 = "/dir2/dir2-3";');
            expect(fileContentLines[9]).toEqual('export const ROUTE_DIR2__DIR2_3__DIR2_3_1 = "/dir2/dir2-3/dir2-3-1";');
            expect(fileContentLines[10]).toEqual('export const ROUTE_DIR3 = "/dir3";');
            expect(fileContentLines[11]).toEqual('export const ROUTE_DIR3__DIR3_1 = "/dir3/dir3-1";');
            expect(fileContentLines[12]).toEqual('export const ROUTE_DIR3__DIR3_2 = "/dir3/dir3-2";');
            expect(fileContentLines[13]).toEqual('export const ROUTE_DIR3__DIR3_2__DIR3_2_1 = "/dir3/dir3-2/dir3-2-1";');
            expect(fileContentLines[14]).toBeUndefined();
        });
    });
});

/**
 * @param fsMock
 * @param {number} callIndex
 * @returns {string[]}
 */
function getWriteFileSyncFileContentLines(fsMock, callIndex = 0) {
    return fsMock.writeFileSync.mock.calls[callIndex][1].split('\n');
}