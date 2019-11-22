import { configure } from '@storybook/react';

import { addParameters } from '@storybook/react'
import { DocsPage } from '@storybook/addon-docs/blocks';

// const req = require.context('../components', true, /\.stories\.[tj]s?$/);
configure(require.context('../components', true, /\.stories\.js$/), module);
configure(require.context('../components', true, /\.stories\.ts$/), module);

configure(require.context('../components', true, /\.stories\.mdx$/), module);

addParameters({
  docs: DocsPage,
});