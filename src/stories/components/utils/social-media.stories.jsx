import twig from './social-media.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: '@Components/Utils/Social Media',

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  social: [
    {
      url: '#',
      handle: 'facebook'
    },
    {
      url: '#',
      handle: 'youtube'
    }
  ]
};
//
