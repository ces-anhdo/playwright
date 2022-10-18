import { test, expect } from '@playwright/test';
 
test('1. Header returns status 200', async ({ request }) => {
  const response = await request.get('https://api.github.com/users/ces-anhdo')
  expect(response.status()).toBe(200)
  
})

 test('2. All fields response in body ', async ({ page }) => {
const response = await page.request.get('https://api.github.com/users/ces-anhdo')
const body = JSON.parse(await response.text())
expect(body.login).toBe("ces-anhdo")
expect(body.id).toBe(114570280)
expect(body.node_id).toBe("U_kgDOBtQ0KA")
expect(body.avatar_url).toBe("https://avatars.githubusercontent.com/u/114570280?v=4")
expect(body.gravatar_id).toBe("")
expect(body.url).toBe("https://api.github.com/users/ces-anhdo")
expect(body.html_url).toBe("https://github.com/ces-anhdo")
expect(body.followers_url).toBe("https://api.github.com/users/ces-anhdo/followers")
expect(body.gists_url).toBe("https://api.github.com/users/ces-anhdo/gists{/gist_id}")
expect(body.starred_url).toBe("https://api.github.com/users/ces-anhdo/starred{/owner}{/repo}")
expect(body.subscriptions_url).toBe("https://api.github.com/users/ces-anhdo/subscriptions")
expect(body.organizations_url).toBe("https://api.github.com/users/ces-anhdo/orgs")
expect(body.repos_url).toBe("https://api.github.com/users/ces-anhdo/repos")
expect(body.events_url).toBe("https://api.github.com/users/ces-anhdo/events{/privacy}")
expect(body.received_events_url).toBe("https://api.github.com/users/ces-anhdo/received_events")
expect(body.type).toBe("User")
expect(body.site_admin).toBe(false)
expect(body.name).toBe(null)
expect(body.company).toBe(null)
expect(body.blog).toBe("")
expect(body.location).toBe(null)
expect(body.email).toBe(null)
expect(body.hireable).toBe(null)
expect(body.bio).toBe(null)
expect(body.twitter_username).toBe(null)
expect(body.public_repos).toBe(1)
expect(body.public_gists).toBe(0)
expect(body.followers).toBe(0)
expect(body.following).toBe(0)
expect(body.created_at).toBe("2022-09-28T08:40:20Z")
expect(body.updated_at).toBe("2022-09-28T09:13:26Z")
})

test('3. Not Found Github account', async ({ request }) => {
  const response = await request.get('https://api.github.com/users/ces-anhdo1')
  expect(response.status()).toBe(404)
  
})