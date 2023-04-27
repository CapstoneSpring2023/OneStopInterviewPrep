// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Worker from './workerMock';


describe('download', () => {
    const documentIntial = { content: 'aaa' };
    global.URL.createObjectURL = jest.fn();
    it('msSaveOrOpenBlob should not have been called when navigao is undefined', () => {
      global.URL.createObjectURL = jest.fn(() => 'details');
  window.navigator.msSaveOrOpenBlob = jest.fn(() => 'details');
  download(documentIntial);
  expect(window.navigator.msSaveOrOpenBlob).toHaveBeenCalledTimes(1);
    });
  });

window.Worker = Worker;