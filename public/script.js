document.addEventListener("DOMContentLoaded", function() {
    loadProfile();
    loadRepositories();
    loadCarousel();
    loadColleagues();
    loadRepository1();
    loadRepository2();
    loadRepository3();
});



function loadProfile() {
    fetch('https://07007eb8-b189-4920-ac6e-d44fa8da6196-00-2s210ch6vsh8h.worf.replit.dev/profile')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#meu_nome h1').textContent = data.name;
            document.querySelector('.perfil img').src = "assets/FOTO.jpeg";
            document.querySelector('#Nome').textContent = data.name;
            document.querySelector('#descriçao').textContent = data.description;
            document.querySelector('#local').textContent = "Location: " + data.location;
            document.querySelector('#site').textContent = data.site;
            document.querySelector('.fa-instagram').parentNode.href = data.instagram;
            document.querySelector('.fa-github').parentNode.href = data.github;
        });
}

function loadRepositories() {
    fetch('https://07007eb8-b189-4920-ac6e-d44fa8da6196-00-2s210ch6vsh8h.worf.replit.dev/repositories')
        .then(response => response.json())
        .then(data => {
            let reposHTML = '';
            data.forEach(repo => {
                reposHTML += `
                    <div class="secao-div-card">
                        <a href="${repo.link}">
                        <img decoding="async" src="${repo.image}" alt="imagem do ${repo.name}">
                        <h3>${repo.name}</h3>
                        <p>${repo.description}</p>
                        </a>
                    </div>
                `;
            });
            document.querySelector('.secao-div').innerHTML = reposHTML;
        });
}

function loadCarousel() {
    fetch('https://07007eb8-b189-4920-ac6e-d44fa8da6196-00-2s210ch6vsh8h.worf.replit.dev/carousel')
        .then(response => response.json())
        .then(data => {
            let carouselHTML = '';
            data.forEach((item, index) => {
                carouselHTML += `
                    <div class="slide slide_${index + 1}">
                        <div class="slide-content">
                            <img src="${item.image}" width="400" height="400" alt="imagem do ${item.title}">
                        </div>
                    </div>
                `;
            });
            document.querySelector('.inner').innerHTML = carouselHTML;
        });
}

function loadColleagues() {
    fetch('https://07007eb8-b189-4920-ac6e-d44fa8da6196-00-2s210ch6vsh8h.worf.replit.dev/colleagues')
        .then(response => response.json())
        .then(data => {
            let colleaguesHTML = '';
            data.forEach(colleague => {
                colleaguesHTML += `
                    <div class="colega">
                        <img src="${colleague.image}" alt="imagem do ${colleague.name}">
                        <h3>${colleague.name}</h3>
                        
                    </div>
                `;
            });
            document.querySelector('footer').innerHTML = colleaguesHTML;
        });
}

function loadRepository1() {
    fetch('https://07007eb8-b189-4920-ac6e-d44fa8da6196-00-2s210ch6vsh8h.worf.replit.dev/repository1')
        .then(response => response.json())
        .then(data => {
            document.getElementById('repo-title').textContent = `Repositório: ${data.title}`;
            document.getElementById('repo-description').textContent = data.description;
            document.getElementById('repo-date').textContent = data.creationDate;
            document.getElementById('repo-language').textContent = data.language;
            document.getElementById('repo-link').href = data.link;
            document.getElementById('repo-link').textContent = data.link;

            let topicsHTML = '';
            data.topics.forEach(topic => {
                topicsHTML += `<li>${topic}</li>`;
            });
            document.getElementById('repo-topics').innerHTML = topicsHTML;
        });
}

function loadRepository2() {
    fetch('https://07007eb8-b189-4920-ac6e-d44fa8da6196-00-2s210ch6vsh8h.worf.replit.dev/repository2')
        .then(response => response.json())
        .then(data => {
            document.getElementById('repo-title').textContent = `Repositório: ${data.title}`;
            document.getElementById('repo-description').textContent = data.description;
            document.getElementById('repo-date').textContent = data.creationDate;
            document.getElementById('repo-language').textContent = data.language;
            document.getElementById('repo-link').href = data.link;
            document.getElementById('repo-link').textContent = data.link;

            let topicsHTML = '';
            data.topics.forEach(topic => {
                topicsHTML += `<li>${topic}</li>`;
            });
            document.getElementById('repo-topics').innerHTML = topicsHTML;
        });
}
function loadRepository3() {
    fetch('https://07007eb8-b189-4920-ac6e-d44fa8da6196-00-2s210ch6vsh8h.worf.replit.dev/repository3')
        .then(response => response.json())
        .then(data => {
            document.getElementById('repo-title').textContent = `Repositório: ${data.title}`;
            document.getElementById('repo-description').textContent = data.description;
            document.getElementById('repo-date').textContent = data.creationDate;
            document.getElementById('repo-language').textContent = data.language;
            const repoLinkElement = document.getElementById('repo-link');
            if (data.link) {
                repoLinkElement.innerHTML = `<a href="${data.link}">${data.link}</a>`;
            } else {
                repoLinkElement.textContent = "Em breve";
            }

            let topicsHTML = '';
            data.topics.forEach(topic => {
                topicsHTML += `<li>${topic}</li>`;
            });
            document.getElementById('repo-topics').innerHTML = topicsHTML;
        });
}