export default {
  block: 'parent-block',
  mix: [
    {
      block: 'another-block',
      mods: {
        'mod-name': 'mod-value',
      }
    },
    {
      block: 'yet-another-block',
      elem: 'second-elem',
      elemMods: {
        'elem-mod-name': 'elem-mod-value',
      }
    },
  ],
  content: {
    block: 'child-block',
    elem: 'my-block-element',
  }
};
