module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'flowerpot',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
