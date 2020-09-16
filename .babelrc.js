let babel_env = process.env[
  "BABEL_ENV"
];
let loose = false,
  modules = false,
  useESModules = false;

switch (babel_env) {
  case "commonjs":
    loose = true;
    modules = "cjs";
    useESModules = false;
    break;
  case "es":
    loose = true;
    modules = false;
    useESModules = true;
    break;
  case "umd":
    loose = false;
    modules = false;
    useESModules = false;
    break;
}

const presets = [
  [
    "@babel/preset-env",
    {
      loose, modules
    }
  ],
  "@babel/preset-react"
];

const plugins = [
  "@babel/plugin-proposal-object-rest-spread",
  [
    "@babel/plugin-transform-runtime",
    {
      useESModules
    }
  ]
];

if (babel_env === "preview") {
  plugins.push([
    "import",
    {
      libraryName: "antd",
      libraryDirectory: "es",
      style: "css" // `style: true` 会加载 less 文件
    },
    "ant-design"
  ]);
}

module.exports = {
  presets, plugins
};