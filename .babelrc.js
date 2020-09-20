const plugins = [
  [
    'babel-plugin-transform-imports',
    {
      '@material-ui/core': {
        transform: '@material-ui/core/${member}',
        // transform: '@material-ui/core/esm/${member}',
        preventFullImport: true,
      },
      '@material-ui/styles': {
        transform: '@material-ui/styles/${member}',
        // transform: '@material-ui/styles/esm/${member}',
        preventFullImport: true,
      },
      '@material-ui/icons': {
        transform: '@material-ui/icons/${member}',
        // transform: '@material-ui/icons/esm/${member}',
        preventFullImport: true,
      },
      '@material-ui/lab': {
        transform: '@material-ui/lab/${member}',
        // transform: '@material-ui/lab/esm/${member}',
        preventFullImport: true,
      },
    },
  ],
];

const presets = ['next/babel'];

module.exports = {plugins, presets};