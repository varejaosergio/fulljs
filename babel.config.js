module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],      
      '@babel/preset-react',
    ],
    ignore: ['node_modules', 'build'],
  };




/*module.exports = {
    presets: [ '@babel/react', 'babel/env'],
    plugins: [ '@babel/plugin-proposal-class-properties'],
};*/