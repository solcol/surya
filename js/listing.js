// find the element in our HTML with the ID "property-listing"
const outputElement = document.getElementById('property-listing');

async function showProperties(sortMethod, filtering) {
    // if we didn't get passed in a filtering option, use the global "showOnly" variable if it exists
    if(!filtering && showOnly) {
        filtering = showOnly;
    }

    // create a string where our output HTML will go
    let outputHTML = "";

    // create an array where we can sort our properties
    let sortedProperties = properties;

    switch (sortMethod) {
        case "low-to-high": {
            console.info("Low to High");
            sortedProperties.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            break;
        }

        case "high-to-low": {
            console.info("High to Low");
            sortedProperties.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            break;
        }

        case "weighted": {
            console.info("Weighted");
            // "weighted" is so houses can be shown in a specific order though at the moment they are just random
            sortedProperties.sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight));
            break;
        }

        default: {
            // do nothing and keep the order they are in the json file
        }
    }

    // for every element in "properties", do something with it ("p")
    for (let p of sortedProperties) {
        // if we are only meant to show flats, skip over those that are not flats
        if(filtering == 'flats' && p.type.toLowerCase() !== 'flat') continue;

        // if we are only meant to show houses, skip over those that are not houses
        if(filtering == 'houses' && p.type.toLowerCase() !== 'house') continue;

        // this is HTML of a Bulma "card" component
        // https://bulma.io/documentation/components/card/
        // += allows us to "append" (add to) an existing string
        outputHTML += `
            <div class="column is-one-third">
                <a class="card" href="property.html">
                    <header class="card-header is-shadowless">
                        <p class="card-header-title">
                            ${p.title}
                        </p>
                    </header>

                    <div class="card-image">
                        <figure class="image is-16by9">
                            <img src="${p.images[0]}">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="tags are-large">
                            <span class="tag">${p.type}</span>
                            <span class="tag">${p.is_for}</span>    
                            ${p.rights ? `<span class="tag">${p.rights}</span>` : ''}
                        </div>
                        
                        <div class="tags are-medium">
                            <span class="tag"><i class="fas fa-fw fa-bed"></i>&nbsp;${p.beds ? p.beds : '?'} beds</span>
                            <span class="tag"><i class="fas fa-fw fa-bath"></i>&nbsp;${p.baths ? p.baths : '?'} baths</span>
                        </div>

                        <div class="content">
                            ${p.price_type ? p.price_type : ''} <b>£${p.price.toLocaleString('en-GB')}</b>
                        </div>
                    </div>
                </a>
            </div>
        `;
    }

    // set the content (innerHTML) of output (the element defined at the start of this file) to the generated HTML
    outputElement.innerHTML = outputHTML;
}