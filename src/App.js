import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

// import 'stream-chat-react/dist/css/v2/index.css';

const chatClient = new StreamChat('kodemia19g');
const userToken = 'ey00000';

chatClient.connectUser(
  {
    id: 'koderKike',
    name: 'koderKike',
    image: 'https://getstream.io/random_png/?id=koder-kike-10',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'livestream', {
  image: 'https://api.dicebear.com/5.x/fun-emoji/svg',
  name: 'Chat for Groups',
  members: ['Parent-9'],
});

const App = () => (
  <Chat client={chatClient} theme='str-chat__theme-light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
