import axios from 'axios';

/**
 * @description
 * Class that controls the RESTFUL Methods to fetch the data for the pages
 */
class ContentFetch {

	/**
	 * @description
	 * Will fetch the content of a page based on the slug
	 *
	 * @param {string} slug - The identifier of the page
	 */
	getPageContent(slug) {
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

export default ContentFetch;
