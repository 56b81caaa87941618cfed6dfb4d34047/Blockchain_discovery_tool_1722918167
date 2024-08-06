/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722918168", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 bg-opacity-50 rounded-lg backdrop-filter backdrop-blur-lg shadow-lg">
            <div id="footer-container" class="max-w-screen-xl p-8 py-10 mx-auto lg:py-16">
                <hr id="footer-divider" class="my-6 border-white border-opacity-20 sm:mx-auto lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition-colors duration-300">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-3 sm:h-10" alt="Landwind Logo" />
                            CryptoExplorer - Discover the Decentralized Web
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-300">
                        Stay ahead of the blockchain curve with CryptoExplorer. Our app aggregates the latest news, projects, and insights from the rapidly evolving world of decentralized technologies. Join our community of forward-thinkers and never miss a beat in the digital revolution.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
