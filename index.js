const totp = require("totp-generator");
const crypto = require("crypto");

/**
 * @param {string} secret - The secret to generate the code for client
 */
class TOTP {
  /**
   * @typedef {Object} TOTPOptions
   * @property {Number} [step=30] - The time step in seconds
   * @property {}
   */
  /**
   *
   * @param {String} secrect - The secret to use
   * @param {} options
   */
  constructor(secret, options = {}) {
    this.secret = secret;
  }

  /**
   *
   * @returns {String} - The base16 encoded secret
   */
  getNewSecret() {
    return crypto.randomBytes(16).toString("hex");
  }

  /**
   * @returns {String} - The current token
   */
  generate() {
    return totp(this.secret, this.options);
  }
  /**
   *
   * @param {String} token - The token to validate
   * @returns {Boolean} - True if the token is valid, false otherwise
   */
  verify(token) {
    return this.generate(this.secret) === token;
  }
}

module.exports = {
  TOTP,
};
