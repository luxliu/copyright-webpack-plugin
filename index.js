class CopyrightWebpackPlugin {
  constructor(options) {
    this.options = options;
    this.copyrightContent = `
        Copyright @${this.options.name}\n
        ${this.options.content}
    `;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'CopyrightWebpackPlugin',
      (compilation, cb) => {
        compilation.assets['copyright.txt'] = {
          source: function () {
            return this.copyrightContent;
          },
          size: function () {
            return this.copyrightContent.length;
          },
        };

        cb();
      }
    );
  }
}

module.exports = CopyrightWebpackPlugin;
