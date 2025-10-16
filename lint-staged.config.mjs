const buildEslintCommand = () => `npx eslint .`

const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}

export default lintStagedConfig
