import { weatherReducer } from '../weatherReducer';

describe('weather reducer', () => {

    it('should return the initial state', () => {
        expect(weatherReducer(undefined, {})).toEqual({});
    });

    it('reducer should SET WEATHER', ()=> {
        const newState = { weather: {temp: 280.5}, error: '' }
        expect(weatherReducer({}, { type: 'SET_WEATHER', weather: {temp: 280.5}, error: ''})).toEqual(newState);
    });

    it('reducer should START LOADING', () => {
        const newState = { isLoading: true };
		expect(weatherReducer({}, { type: 'START_LOADING', isLoading: true })).toEqual(newState);
    });
    it('reducer should RESET LOADING', () => {
        const newState = { isLoading: false };
		expect(weatherReducer({}, { type: 'RESET_LOADING', isLoading: false })).toEqual(newState);
    });
    it('reducer should SET ERROR', () => {
        const newState = { error: 'error message' };
		expect(weatherReducer({}, { type: 'SET_ERROR', error: 'error message' })).toEqual(newState);
    });

})