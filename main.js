const LinksSocialMedia = {
  github: 'Caetano-Loiola',
  youtube: 'channel/UCOpfLiUSU3z0KbZZblaf8yQ',
  facebook: 'caetano.loiola.14',
  instagram: 'caetano_loiola/',
  twitter: 'CaeLArts'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userName.textContent = data.login
    })
}

getGitHubProfileInfos()
