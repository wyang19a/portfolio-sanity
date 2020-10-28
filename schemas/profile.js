import { MdPerson as icon } from 'react-icons/md';

export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  icon: icon,
  fields: [
    {
      name: 'name',
      title: 'Profile Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
     },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    }
  ]
};