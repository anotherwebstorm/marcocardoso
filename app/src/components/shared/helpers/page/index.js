import axios from 'axios';

/**
 * @description
 * Class that controls the RESTFUL Methods to fetch the data for the pages
 */
class Page {

	/**
	 * @description
	 * Will fetch the content of a page based on the slug
	 *
	 * @param {string} slug - The identifier of the page
	 */
	getPage(slug) {
		axios.get(`https://cosmicjs.com/v1/marcocardoso/object/${slug}`)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}

}

export default Page;
