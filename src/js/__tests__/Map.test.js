import ErrorRepository from '../Map';

describe('ErrorRepository', () => {
    test('correct error', () => {
        const errorRepository = new ErrorRepository();
        errorRepository.addError(404, 'Not Found');
        errorRepository.addError(500, 'Internal Server Error');

        expect(errorRepository.translate(404)).toBe('Not Found');
        expect(errorRepository.translate(500)).toBe('Internal Server Error');
    })
    test('Unknown error', () => {
        const errorRepository = new ErrorRepository();
        errorRepository.addError(404, 'Not Found');

        expect(errorRepository.translate(500)).toBe('Unknown error');
    })
})
