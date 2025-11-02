export default eventHandler(async (e) => {
  const posts = await queryCollection(e, 'post').select('tags').all()

  const counts: Record<string, number> = {}
  for (const post of posts) {
    for (const tag of post.tags || []) {
      counts[tag] = (counts[tag] || 0) + 1
    }
  }

  return Object.entries(counts).map(([name, count]) => ({ name, count }))
})
