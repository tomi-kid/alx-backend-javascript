/**
 * Contains the miscellaneous route handlers.
 * @author Seid Hamid <https://github.com/radu2022>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
