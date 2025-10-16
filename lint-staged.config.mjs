const config = {
  // Patrón para archivos de código (JS, JSX, TS, TSX)
  '*.{js,jsx,ts,tsx}': [
    // 1. Ejecutar Prettier para formateo
    'prettier --write',

    // 2. Ejecutar ESLint:
    //    --fix: corrige automáticamente los problemas.
    //    --max-warnings 0: fuerza a fallar el proceso si hay 1 o más warnings.
    'eslint --fix --max-warnings 0',
  ],

  // Patrón para archivos de estilo/configuración (formateo simple)
  '*.{json,css,scss,md,yaml,yml}': ['prettier --write'],
}

export default config
