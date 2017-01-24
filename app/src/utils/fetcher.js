import axios from 'axios';

/**
 * @description
 * Class that controls the RESTFUL Methods to fetch the data for the pages
 */
class Fetcher {

	/**
	 * @description
	 * Will fetch the content of a page based on the slug
	 *
	 * @param {string} slug - The identifier of the page
	 * @return {object} promise - The result promise
	 */
	getArticleContent(slug) {
		return axios
			.get(`https://cosmicjs.com/v1/marcocardoso/object/${slug}`)
			.then((response) => {
				return response.data.object;
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

export default Fetcher;
