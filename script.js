let k = 0
const mainDiv = document.getElementById("mainDiv")
const all_button = document.getElementById("allbutton")
const climate_button = document.getElementById("climatebutton")
const health_button = document.getElementById("healthbutton")
const science_button = document.getElementById("sciencebutton")
const us_button = document.getElementById("usbutton")
const world_button = document.getElementById("worldbutton")

function removeElements(elements){
    for(let i = 0; i < elements.length; i++){
        elements[i].parentNode.removeChild(elements[i]);
    }
}

const allfetching = async () => {
    try { // fetch url pvz: APIlink:request:key
        const stories = await fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=kRdDU2UjAtsSKoeijHfzSZzOd7b2qxBA")
        const stories_msg = await stories.json();
        //console.log(stories_msg.results)
        const results_array = stories_msg.results
        console.log(results_array)

        if(k > 0){
            let j = k
            k = k - j
            removeElements(articleDiv)
            removeElements(document.querySelectorAll('#articleDiv'));
        }
        console.log(k)

        //console.log(results_array[0].section)
        let h = 0

        for (let y in results_array){
            if(h < 30){
                //console.log(results_array[y])

                const articleDiv = document.createElement('div');
                articleDiv.setAttribute('id', 'articleDiv');
                mainDiv.appendChild(articleDiv);

                const articleImg = document.createElement('img');
                articleImg.src = results_array[y].multimedia[1].url
                articleDiv.appendChild(articleImg)

                const txtDiv = document.createElement('div')
                txtDiv.setAttribute('id', 'txtDiv')
                articleDiv.appendChild(txtDiv)

                const articleName = document.createElement('h2');
                articleName.innerText = results_array[y].title
                txtDiv.appendChild(articleName);

                const articleSection = document.createElement('h3');
                articleSection.innerText = results_array[y].section
                txtDiv.appendChild(articleSection);

                const articletxt = document.createElement('p');
                articletxt.innerText = results_array[y].abstract
                txtDiv.appendChild(articletxt);

                const articlebutton = document.createElement('button');
                articlebutton.innerText = "Link"
                articlebutton.classList.add("a-button");
                txtDiv.appendChild(articlebutton);
                const articlelink = document.createElement('a');
                articlelink.href = results_array[y].short_url
                articlebutton.appendChild(articlelink);

                k += 1
                h += 1
            }
            else{
                continue
            }
        }
        console.log(k)

    } catch(error){
        console.log(error)
    }

};

const climatefetching = async () => {
    try { // fetch url pvz: APIlink:request:key
        const stories = await fetch("https://api.nytimes.com/svc/topstories/v2/climate.json?api-key=kRdDU2UjAtsSKoeijHfzSZzOd7b2qxBA")
        const stories_msg = await stories.json();
        //console.log(stories_msg.results)
        const results_array = stories_msg.results
        console.log(results_array)

        if(k > 0){
            let j = k
            k = k - j
            removeElements(articleDiv)
            removeElements(document.querySelectorAll('#articleDiv'));
        }
        console.log(k)

        //console.log(results_array[0].section)
        for (let y in results_array){
            if(results_array[y].section === "climate"){
                //console.log(results_array[y])

                const articleDiv = document.createElement('div');
                articleDiv.setAttribute('id', 'articleDiv');
                mainDiv.appendChild(articleDiv);

                const articleImg = document.createElement('img');
                articleImg.src = results_array[y].multimedia[1].url
                articleDiv.appendChild(articleImg)

                const txtDiv = document.createElement('div')
                txtDiv.setAttribute('id', 'txtDiv')
                articleDiv.appendChild(txtDiv)

                const articleName = document.createElement('h2');
                articleName.innerText = results_array[y].title
                txtDiv.appendChild(articleName);

                const articleSection = document.createElement('h3');
                articleSection.innerText = results_array[y].section
                txtDiv.appendChild(articleSection);

                const articletxt = document.createElement('p');
                articletxt.innerText = results_array[y].abstract
                txtDiv.appendChild(articletxt);

                const articlebutton = document.createElement('button');
                articlebutton.innerText = "Link"
                articlebutton.classList.add("a-button");
                txtDiv.appendChild(articlebutton);
                const articlelink = document.createElement('a');
                articlelink.href = results_array[y].short_url
                articlebutton.appendChild(articlelink);

                k += 1
            }
            else{
                continue
            }
        }
        console.log(k)

    } catch(error){
        console.log(error)
    }

};

const healthfetching = async () => {
    try { // fetch url pvz: APIlink:request:key
        const stories = await fetch("https://api.nytimes.com/svc/topstories/v2/health.json?api-key=kRdDU2UjAtsSKoeijHfzSZzOd7b2qxBA")
        const stories_msg = await stories.json();
        //console.log(stories_msg.results)
        const results_array = stories_msg.results
        console.log(results_array)

        if(k > 0){
            let j = k
            k = k - j
            removeElements(articleDiv)
            removeElements(document.querySelectorAll('#articleDiv'));
        }
        console.log(k)

        //console.log(results_array[0].section)
        for (let y in results_array){
            if(results_array[y].section === "health"){
                //console.log(results_array[y])

                const articleDiv = document.createElement('div');
                articleDiv.setAttribute('id', 'articleDiv');
                mainDiv.appendChild(articleDiv);

                const articleImg = document.createElement('img');
                articleImg.src = results_array[y].multimedia[1].url
                articleDiv.appendChild(articleImg)

                const txtDiv = document.createElement('div')
                txtDiv.setAttribute('id', 'txtDiv')
                articleDiv.appendChild(txtDiv)

                const articleName = document.createElement('h2');
                articleName.innerText = results_array[y].title
                txtDiv.appendChild(articleName);

                const articleSection = document.createElement('h3');
                articleSection.innerText = results_array[y].section
                txtDiv.appendChild(articleSection);

                const articletxt = document.createElement('p');
                articletxt.innerText = results_array[y].abstract
                txtDiv.appendChild(articletxt);

                const articlebutton = document.createElement('button');
                articlebutton.innerText = "Link"
                articlebutton.classList.add("a-button");
                txtDiv.appendChild(articlebutton);
                const articlelink = document.createElement('a');
                articlelink.href = results_array[y].short_url
                articlebutton.appendChild(articlelink);

                k += 1
            }
            else{
                continue
            }
        }
        console.log(k)

    } catch(error){
        console.log(error)
    }

};

const sciencefetching = async () => {
    try { // fetch url pvz: APIlink:request:key
        const stories = await fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=kRdDU2UjAtsSKoeijHfzSZzOd7b2qxBA")
        const stories_msg = await stories.json();
        //console.log(stories_msg.results)
        const results_array = stories_msg.results
        console.log(results_array)

        if(k > 0){
            let j = k
            k = k - j
            removeElements(articleDiv)
            removeElements(document.querySelectorAll('#articleDiv'));
        }
        console.log(k)

        //console.log(results_array[0].section)
        for (let y in results_array){
            if(results_array[y].section === "science"){
                //console.log(results_array[y])

                const articleDiv = document.createElement('div');
                articleDiv.setAttribute('id', 'articleDiv');
                mainDiv.appendChild(articleDiv);

                const articleImg = document.createElement('img');
                articleImg.src = results_array[y].multimedia[1].url
                articleDiv.appendChild(articleImg)

                const txtDiv = document.createElement('div')
                txtDiv.setAttribute('id', 'txtDiv')
                articleDiv.appendChild(txtDiv)

                const articleName = document.createElement('h2');
                articleName.innerText = results_array[y].title
                txtDiv.appendChild(articleName);

                const articleSection = document.createElement('h3');
                articleSection.innerText = results_array[y].section
                txtDiv.appendChild(articleSection);

                const articletxt = document.createElement('p');
                articletxt.innerText = results_array[y].abstract
                txtDiv.appendChild(articletxt);

                const articlebutton = document.createElement('button');
                articlebutton.innerText = "Link"
                articlebutton.classList.add("a-button");
                txtDiv.appendChild(articlebutton);
                const articlelink = document.createElement('a');
                articlelink.href = results_array[y].short_url
                articlebutton.appendChild(articlelink);

                k += 1
            }
            else{
                continue
            }
        }
        console.log(k)

    } catch(error){
        console.log(error)
    }

};

const usfetching = async () => {
    try { // fetch url pvz: APIlink:request:key
        const stories = await fetch("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=kRdDU2UjAtsSKoeijHfzSZzOd7b2qxBA")
        const stories_msg = await stories.json();
        //console.log(stories_msg.results)
        const results_array = stories_msg.results
        console.log(results_array)

        if(k > 0){
            let j = k
            k = k - j
            removeElements(articleDiv)
            removeElements(document.querySelectorAll('#articleDiv'));
        }
        console.log(k)

        //console.log(results_array[0].section)
        for (let y in results_array){
            if(results_array[y].section === "us"){
                //console.log(results_array[y])

                const articleDiv = document.createElement('div');
                articleDiv.setAttribute('id', 'articleDiv');
                mainDiv.appendChild(articleDiv);

                const articleImg = document.createElement('img');
                articleImg.src = results_array[y].multimedia[1].url
                articleDiv.appendChild(articleImg)

                const txtDiv = document.createElement('div')
                txtDiv.setAttribute('id', 'txtDiv')
                articleDiv.appendChild(txtDiv)

                const articleName = document.createElement('h2');
                articleName.innerText = results_array[y].title
                txtDiv.appendChild(articleName);

                const articleSection = document.createElement('h3');
                articleSection.innerText = results_array[y].section
                txtDiv.appendChild(articleSection);

                const articletxt = document.createElement('p');
                articletxt.innerText = results_array[y].abstract
                txtDiv.appendChild(articletxt);

                const articlebutton = document.createElement('button');
                articlebutton.innerText = "Link"
                articlebutton.classList.add("a-button");
                txtDiv.appendChild(articlebutton);
                const articlelink = document.createElement('a');
                articlelink.href = results_array[y].short_url
                articlebutton.appendChild(articlelink);

                k += 1
            }
            else{
                continue
            }
        }
        console.log(k)

    } catch(error){
        console.log(error)
    }

};

const worldfetching = async () => {
    try { // fetch url pvz: APIlink:request:key
        const stories = await fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=kRdDU2UjAtsSKoeijHfzSZzOd7b2qxBA")
        const stories_msg = await stories.json();
        //console.log(stories_msg.results)
        const results_array = stories_msg.results
        console.log(results_array)

        if(k > 0){
            let j = k
            k = k - j
            removeElements(articleDiv)
            removeElements(document.querySelectorAll('#articleDiv'));
        }
        console.log(k)

        //console.log(results_array[0].section)
        for (let y in results_array){
            if(results_array[y].section === "world"){
                //console.log(results_array[y])

                const articleDiv = document.createElement('div');
                articleDiv.setAttribute('id', 'articleDiv');
                mainDiv.appendChild(articleDiv);

                const articleImg = document.createElement('img');
                articleImg.src = results_array[y].multimedia[1].url
                articleDiv.appendChild(articleImg)

                const txtDiv = document.createElement('div')
                txtDiv.setAttribute('id', 'txtDiv')
                articleDiv.appendChild(txtDiv)

                const articleName = document.createElement('h2');
                articleName.innerText = results_array[y].title
                txtDiv.appendChild(articleName);

                const articleSection = document.createElement('h3');
                articleSection.innerText = results_array[y].section
                txtDiv.appendChild(articleSection);

                const articletxt = document.createElement('p');
                articletxt.innerText = results_array[y].abstract
                txtDiv.appendChild(articletxt);

                const articlebutton = document.createElement('button');
                articlebutton.innerText = "Link"
                articlebutton.classList.add("a-button");
                txtDiv.appendChild(articlebutton);
                const articlelink = document.createElement('a');
                articlelink.href = results_array[y].short_url
                articlebutton.appendChild(articlelink);

                k += 1
            }
            else{
                continue
            }
        }
        console.log(k)

    } catch(error){
        console.log(error)
    }

};

all_button.addEventListener("click", allfetching)
climate_button.addEventListener("click", climatefetching)
health_button.addEventListener("click", healthfetching)
science_button.addEventListener("click", sciencefetching)
us_button.addEventListener("click", usfetching)
world_button.addEventListener("click", worldfetching)