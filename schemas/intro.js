import { MdHome as icon } from 'react-icons/md';

export default {
  name: 'intro',
  title: 'Intro',
  type: 'document',
  icon: icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    // {
    //   name: 'subheading',
    //   title: 'Intro sub-heading',
    //   type: 'string',
    // },
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
  ]
};