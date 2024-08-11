function changeCatImage() {
    const img = document.getElementById('catImage');
    const rectangles = document.querySelectorAll('.content-box-mid');
    const verticalNav = document.querySelector('.vertical-nav');

    // Toggle image source
    if (img.src.includes('Cat_outline.png')) {
        img.src = 'Cat_fill.png';
    } else {
        img.src = 'Cat_outline.png';
    }

    // Show the boxes and vertical nav
    rectangles.forEach(rect => rect.style.display = 'block');
    verticalNav.style.display = 'block';
}

function changeDogImage() {
    const img = document.getElementById('dogImage');
    const rectangles = document.querySelectorAll('.content-box-mid');
    const verticalNav = document.querySelector('.vertical-nav');

    // Toggle image source
    if (img.src.includes('Dog_outline.png')) {
        img.src = 'Dog_fill.png';
    } else {
        img.src = 'Dog_outline.png';
    }

    // Show the boxes and vertical nav
    rectangles.forEach(rect => rect.style.display = 'block');
    verticalNav.style.display = 'block';
}

function changeBirdImage() {
    const img = document.getElementById('birdImage');
    const rectangles = document.querySelectorAll('.content-box-mid');
    const verticalNav = document.querySelector('.vertical-nav');

    // Toggle image source
    if (img.src.includes('Bird_outline.png')) {
        img.src = 'Bird_fill.png';
    } else {
        img.src = 'Bird_outline.png';
    }

    // Show the boxes and vertical nav
    rectangles.forEach(rect => rect.style.display = 'block');
    verticalNav.style.display = 'block';
}

function performSearch() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();

    if (searchQuery) {
        // Check for keywords and navigate to the corresponding page and anchor
        if (searchQuery.includes('dietary')) {
            navigateToAnchor('cats.html', 'dietary', searchQuery);
        } else if (searchQuery.includes('activity')) {
            navigateToAnchor('dogs.html', 'activity', searchQuery);
        } else if (searchQuery.includes('relational')) {
            navigateToAnchor('birds.html', 'relational', searchQuery);
        } else {
            alert("Sorry, we couldn't find anything matching your search.");
        }
    }
}

function navigateToAnchor(page, anchor, searchQuery) {
    // Store the search query in local storage to pass it to the next page
    localStorage.setItem('searchQuery', searchQuery);

    // Redirect to the desired page and anchor
    window.location.href = `${page}#${anchor}`;
}

function highlightSearchTerm() {
    const searchQuery = localStorage.getItem('searchQuery');

    if (searchQuery) {
        // Get all elements containing text on the page
        const elements = document.querySelectorAll('.content-box p, .intro-text-large, .intro-text-block');

        elements.forEach(element => {
            const text = element.innerHTML.toLowerCase();
            const searchRegex = new RegExp(searchQuery, 'gi');
            const newText = text.replace(searchRegex, (match) => `<span class="highlight">${match}</span>`);
            element.innerHTML = newText;
        });

        // Clear the stored search query
        localStorage.removeItem('searchQuery');
    }
}

// Call the highlightSearchTerm function when the page loads
window.onload = highlightSearchTerm;
