// instant page
import 'instant.page';

// icons
import 'iconify-icon';

// color mode
const toggleColorMode = function() {
  // light
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-mode', 'light')
    return;
  }
  // dark
  document.documentElement.classList.add('dark');
  localStorage.setItem('color-mode', 'dark');
};

document.querySelectorAll('.color-mode').forEach(btn => {
  btn.addEventListener('click', toggleColorMode);
});

// twind
import { install, injectGlobal, autoDarkColor } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
import presetLineclamp from '@twind/preset-line-clamp';
import presetTypography from '@twind/preset-typography';

install({
  presets: [presetAutoprefix(), presetTailwind(), presetLineclamp(), presetTypography()],
  darkMode: 'class',
  darkColor: autoDarkColor,
  hash: false,
  // tailwind config
  theme: {
    extend: {
      colors: ({ theme }) => ({
        pri: theme('colors.sky'),
        sec: theme('colors.pink'),
      }),
      fontFamily: ({ theme }) => ({
        sans: ['Inter', ...theme('fontFamily.sans')],
      }),
    },
  },
  // custom rules
  rules: [
    ['text-wrap-(unset|wrap|nowrap|balance|pretty)', 'textWrap'],
    ['bg-grid', {'background-image': 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\' width=\'4\' height=\'4\'><rect x=\'0\' y=\'0\' width=\'2\' height=\'2\' fill=\'currentColor\'></rect></svg>")'}],
  ],
});

injectGlobal`
  /* layers: defaults, base, components, shortcuts, utilities, overrides */
  @layer base {
    /* .some-selector,#some-selector { @apply text-wrap-balance; } */
  }
`

// alpinejs
import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();