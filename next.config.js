module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/', // Define o caminho onde os arquivos serão servidos
          outputPath: 'static/', // Define o caminho de saída dos arquivos no diretório público
        },
      },
    });

    return config;
  },
};