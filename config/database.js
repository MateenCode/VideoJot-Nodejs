if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: "mongodb://mateen:mateen1222@ds111138.mlab.com:11138/videojot"
  };
} else {
  module.exports = {
    mongoURI: "mongodb://mateen:mateen1222@ds111138.mlab.com:11138/videojot"
  };
}
