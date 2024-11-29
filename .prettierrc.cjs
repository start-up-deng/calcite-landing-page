module.exports = {
  basePath: '/calcite-landing-page',
  assetPrefix: '/calcite-landing-page/',
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  importOrder: ['^react$', '^react-dom$', '^#.(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}
