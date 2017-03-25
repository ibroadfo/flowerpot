/* eslint-env node */
module.exports = {
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "launchers": {
    "AltPhantom": {
      "exe": "phantomjs",
      "args": ["tests/phantom-runer.js"],
      "protocol": "browser"
    }
  },
  "launch_in_ci": [
    "AltPhantom"
  ],
  "launch_in_dev": [
    "AltPhantom",
    "Chrome"
  ]
};
