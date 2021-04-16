import UserProfile from './../assets/images/user-profile-pict.png';
import UserPicture from './../assets/images/user-picture.png';
import {Media1} from '../assets/images/media';

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
    isReposted: false,
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
    isReposted: true,
    totalComments: 359,
    totalRetweeted: 11000,
    totalUpvoted: 59000,
  },
];
