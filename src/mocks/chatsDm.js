import userPicture from './../assets/images/user-1.png';
import User2 from './../assets/images/user-2.png';

export default [
  {
    userId: 1,
    userImg: userPicture,
    userFullName: 'Emma Stone',
    userName: '@emmastone',
    lastChat: '1h',
    lastChatText: "Let's play together!",
    chats: [
      {
        chatId: 1,
        userImg: userPicture,
        userName: '@zayross',
        lastChat: '1h',
        chatText: 'What do you guys think of mmorpg?',
      },
      {
        chatId: 2,
        userImg: User2,
        userName: '@jimmy',
        lastChat: '1h',
        chatText: 'What do you guys think of mmorpg?',
      },
    ],
  },
  {
    userId: 2,
    userImg: User2,
    userFullName: 'Jimmy Standalone',
    userName: '@jimmy',
    lastChat: '1h',
    lastChatText: "Let's play together!",
  },
];
