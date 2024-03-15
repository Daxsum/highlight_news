import fs from 'fs'
import path from 'path'
import * as matter from 'gray-matter'

const mdFiles = path.join(process.cwd(), 'blogMd')
export const getPostSlugs = () => {
  const allPosts = fs.readdirSync(mdFiles)
  return allPosts.map(fileName => {
    const slug = fileName.replace('.md', '')
    const fileContent = fs.readFileSync(path.join(mdFiles, fileName), 'utf-8')
    const {data, content} = matter(fileContent)

    return {
      data,
      content,
      slug,
    }
  })
}

export const data = [
  {
    slug: '1',
    title: 'Highlight News',
    date: '22-02-2000',
    author: 'Adhanom Kidanmariam',
    authorImage: 'A.jpg',
    content:
      "1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    slug: '1',
    title: 'Highlight News ',
    date: '22-02-2000',
    author: 'Adhanom Kidanmariam',
    authorImage: 'A.jpg',
    content:
      "2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    slug: '1',
    title: 'Highlight news',
    date: '22-02-2000',
    author: 'Adhanom Kidanmariam',
    authorImage: 'A.jpg',
    content:
      "3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
]
