import { MdBook as icon } from 'react-icons/md';

export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: icon,
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      description: 'Name of the Project',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      }
    },
    {
      name: 'thumbnail',
      title: 'thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Description of project',
     },
    {
      name: 'stack',
      title: 'Stacks used',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'stack' }]  }],
      description: 'Tech stack for this project',
    },
    {
      name: 'type',
      title: 'Professional',
      type: 'boolean',
      description: 'Is this professional project?',
    }
  ]
};