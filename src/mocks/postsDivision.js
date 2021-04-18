import userPicture from './../assets/images/user-picture.png';
import userPicture2 from './../assets/images/user-profile-pict.png';

export default [
  {
    id: 1,
    userPict: userPicture,
    name: 'Kumal Gumpar',
    userName: '@@zayrass',
    lastHour: '1h',
    contentImg: null,
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    totalComments: 359,
    totalRetweeted: 11300,
    totalUpvoted: 59000,
    tags: ['#tags', '#sample'],
    isRetweeted: false,
    isUpvote: false,
    isReposted: true,
  },
  {
    id: 2,
    userPict: userPicture2,
    name: 'you',
    userName: '@xypericious',
    lastHour: '2h',
    contentImg: '',
    content: 'Cant wait to stream again xoxo',
    totalComments: 359,
    totalRetweeted: 11300,
    totalUpvoted: 59000,
    tags: [],
    isRetweeted: false,
    isUpvote: false,
    isReposted: false,
  },
];
