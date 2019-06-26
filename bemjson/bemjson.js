export default {
  block: 'my-block',
  mix: [
    {
      block: 'other-block',
      mods: {
        'mod-name': 'mod-value',
      }
    },
    {
      block: 'other-block',
      elem: 'second-elem',
      elemMods: {
        'elem-mod-name': 'elem-mod-value',
      }
    },
  ],
  content: {
    block: 'my-block',
    elem: 'my-block-element',
  }
};
