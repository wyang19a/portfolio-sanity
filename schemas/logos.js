import { MdImage as icon } from 'react-icons/md';

export default {
  name: 'logos',
  title: 'Logos',
  type: 'document',
  icon: icon,
  fields: [
    {
      name: 'name',
      title: 'Logo name',
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
  ]
};