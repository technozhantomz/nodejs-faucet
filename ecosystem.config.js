module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.',
     //give your process a meaningful name
    name: 'development'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],
    // Deployment Configuration
  deploy : {
    production : {
      user : 'ubuntu',
      host : '143.110.152.24',
      ref  : 'origin/master',
      repo : 'git@github.com:technozhantomz/nodejs-faucet',
      path : '/var/www/create.commodity.llc/html/nodejs-faucet'
    }
  }
};
