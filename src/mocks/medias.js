import UserProfile from '../assets/images/user-profile-pict.png';
import UserPicture from '../assets/images/user-picture.png';
import Media1 from '../assets/images/media';
import { Post1 } from '../assets/images/posts';

export default [
  {
    id: 1,
    userPict: UserProfile,
    name: 'Ashley Doe',
    userName: '@xypericious',
    lastHour: '1h',
    isRetweeted: false,
    isUpvote: false,
    contentImg: Media1,
    contentImgs: [Media1, Post1],
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    isReposted: false,
    tags: ['#hero', '#down'],
    totalComments: 359,
    totalRetweeted: 11300,
    totalUpvoted: 59000,
  },
  {
    id: 2,
    userPict: UserPicture,
    name: 'Kumal Gumpar',
    userName: '@@zayrass',
    lastHour: '1h',
    isRetweeted: true,
    isUpvote: true,
    contentImg: null,
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    tags: ['#tags', '#sample'],
    isReposted: true,
    totalComments: 359,
    totalRetweeted: 11000,
    totalUpvoted: 59000,
  },
];
