import js from "@eslint/js"
import jsdoc from "eslint-plugin-jsdoc"
import uglify from "@gesslar/uglier"

const eslint = [
  js.configs.recommended,
  jsdoc.configs["flat/recommended"],
  ...uglify({
    with: ["lints-js", "lints-jsdoc", "web"],
    overrides: {
      // Apply browser globals to scripts in the scripts/ directory
      web: {files: ["scripts/**/*.{js,mjs,cjs}"]},
    },
  })
]

export default eslint
