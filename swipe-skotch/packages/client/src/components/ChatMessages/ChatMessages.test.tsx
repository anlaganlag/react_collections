import React from '../../assets/pages/Home/node_modules/react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { ChatMessages } from './ChatMessages';
import { SocketIoProvider } from '../../context/socketIO';
import { MemoryRouter } from '../../assets/pages/Game/node_modules/react-router-dom';

describe('Chat Messages', () => {
  it('sends Chat message to room', async () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <SocketIoProvider>
          <ChatMessages />
        </SocketIoProvider>
      </MemoryRouter>
    );

    // const submitButton = getByTestId('submit-button');
    // const inputText = getByTestId('chat-input');

    // fireEvent.change(inputText, { target: { value: 'foo' } });

    // fireEvent.click(submitButton);

    // await waitForDomChange();

    // await waitForElement(() => getByText('foo'));
    // const linkElement = getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  });

  // it is just a short hand for test
  // it('renders learn react link', () => {
  //   const { getByText } = render(<Chat />);
  //   const linkElement = getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
  // });
});
