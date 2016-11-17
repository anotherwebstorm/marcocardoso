/**
 * @description
 * polyfills
 */
import '../../../node_modules/element-closest/element-closest';

/**
 * @description
 * class imports
 */
import ExampleModule from './components/examplemodule';

document.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('main')) {
		ExampleModule();
	}
});
