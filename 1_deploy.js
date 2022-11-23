const secondhand = artifacts.require('secondhand')
module.exports = function (deployer) {
  deployer.deploy(secondhand)
}
