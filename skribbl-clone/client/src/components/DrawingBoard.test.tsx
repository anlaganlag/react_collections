import React from 'react';
import Socket from '../utils/Socket';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { GameContext } from '../providers/GameProvider';
import DrawingBoardProvider, { Line } from '../providers/DrawingBoardProvider';
import DrawingBoard from './DrawingBoard';
import { CanvasContextMock } from '../mocks/canvasCtx';
import mockServerSocket from '../mocks/serverSocket';
import { waitFor } from '../utils';
import mockSocket from '../mocks/Socket';

describe('drawing board', (): void => {
  beforeEach(() => {
    const socketMock = mockSocket();
    //@ts-expect-error
    Socket.getSocket = () => {
      return socketMock;
    };
  });
  describe('user', () => {
    beforeEach(() => {
      render(
        <GameContext.Provider value={{ drawingPermission: true }}>
          <DrawingBoardProvider>
            <DrawingBoard
              width={window.outerWidth}
              height={window.outerHeight}
            ></DrawingBoard>
          </DrawingBoardProvider>
        </GameContext.Provider>
      );
    });
    it('can draw dot', (): void => {
      const canvas = screen.getByTestId('canvas') as HTMLCanvasElement;
      const ctxMock = (canvas.getContext('2d') as unknown) as CanvasContextMock;
      fireEvent.mouseDown(canvas, { clientX: 50, clientY: 50 });
      fireEvent.mouseUp(canvas, { clientX: 50, clientY: 50 });
      expect(ctxMock.stroke).toBeCalledTimes(1);
      expect(ctxMock.lineTo).toBeCalledTimes(1);
    });
    it('can draw patterns', (): void => {
      const canvas = screen.getByTestId('canvas') as HTMLCanvasElement;
      const ctxMock = (canvas.getContext('2d') as unknown) as CanvasContextMock;
      fireEvent.mouseDown(canvas, { clientX: 70, clientY: 70 });
      fireEvent.mouseMove(canvas, { clientX: 50, clientY: 100 });
      fireEvent.mouseUp(canvas, { clientX: 50, clientY: 50 });
      expect(ctxMock.stroke).toBeCalledTimes(2);
      expect(ctxMock.lineTo).toBeCalledTimes(2);
    });
    it('can finish pattern when stop holding mouse', (): void => {
      const canvas = screen.getByTestId('canvas') as HTMLCanvasElement;
      const ctxMock = (canvas.getContext('2d') as unknown) as CanvasContextMock;
      fireEvent.mouseDown(canvas, { clientX: 50, clientY: 50 });
      fireEvent.mouseUp(canvas, { clientX: 50, clientY: 50 });
      expect(ctxMock.beginPath).toBeCalledTimes(1);
    });
  });
  describe('socket', (): void => {
    beforeEach(() => {
      render(
        <GameContext.Provider value={{ drawingPermission: true }}>
          <DrawingBoardProvider>
            <DrawingBoard
              width={window.outerWidth}
              height={window.outerHeight}
            ></DrawingBoard>
          </DrawingBoardProvider>
        </GameContext.Provider>
      );
    });
    it('draws when socket recieves a message', (): void => {
      const canvas = screen.getByTestId('canvas') as HTMLCanvasElement;
      const ctxMock = (canvas.getContext('2d') as unknown) as CanvasContextMock;
      const serverSocket = mockServerSocket(Socket.getSocket());

      const line: Line = {
        brushSize: 10,
        color: '#000000',
        x: 10,
        y: 10,
        isEnding: true,
      };
      serverSocket.emit('lineDraw', line);
      serverSocket.emit('lineDraw', line);
      serverSocket.emit('lineDraw', line);
      expect(ctxMock.stroke).toBeCalledTimes(3);
    });
    it('redraws the drawing state', async (): Promise<void> => {
      const canvas = screen.getByTestId('canvas') as HTMLCanvasElement;
      const ctxMock = (canvas.getContext('2d') as unknown) as CanvasContextMock;
      const serverSocket = mockServerSocket(Socket.getSocket());
      const lines: Line[] = new Array(10).fill({
        brushSize: 20,
        color: '#ffffff',
        x: 50,
        y: 20,
        isEnding: false,
      });
      serverSocket.emit('drawingState', lines);
      await waitFor(100);
      expect(ctxMock.stroke).toBeCalledTimes(10);
    });
    it('clears the canvas when round starts', (): void => {
      const canvas = screen.getByTestId('canvas') as HTMLCanvasElement;
      const ctxMock = (canvas.getContext('2d') as unknown) as CanvasContextMock;
      const serverSocket = mockServerSocket(Socket.getSocket());
      serverSocket.emit('roundStart', 1);
      expect(ctxMock.clearRect).toBeCalledTimes(1);
    });
  });
});
afterEach(cleanup);
