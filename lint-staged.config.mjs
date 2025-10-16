const buildEslintCommand = () => `eslint . --max-warnings 0`

const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}

export default lintStagedConfig
