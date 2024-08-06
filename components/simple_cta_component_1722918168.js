/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722918168", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-16 mx-auto lg:py-24 lg:px-6">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
                <div id="cta-title-container" class="flex mb-6">
                    <h2 id="cta-title" class="flex-1 text-3xl font-extrabold leading-tight tracking-tight text-white">Discover Cosmic Blockchain Innovations</h2>
                </div>

                <div id="cta-subtitle-container" class="flex mb-8">
                    <p id="cta-subtitle" class="flex-1 font-light text-pink-100 md:text-lg">Venture into the ethereal realm of cutting-edge blockchain technology.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-900 bg-pink-300 bg-opacity-70 hover:bg-opacity-90 focus:ring-4 focus:ring-pink-200 font-medium rounded-lg text-sm px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105">
                        <i class='bx bx-planet mr-2'></i>Explore Cosmic Tech
                    </a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
