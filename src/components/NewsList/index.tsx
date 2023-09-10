import NewsCard from "../shared/NewsCard";
import styles from './NewsList.module.css';

const mockNews = [
  {
    id: 0,
    title: "First new",
    description: "First new description",
    image: "/default-news.webp",
  },
  {
    id: 1,
    title: "Second new",
    description: "Second new description",
    image: "/default-news.webp",
  },
  {
    id: 2,
    title: "Third new",
    description: "Third new description",
    image: "/default-news.webp",
  },
  {
    id: 3,
    title: "Fourth new",
    description: "Fourth new description",
    image: "/default-news.webp",
  }
]

export default function NewsList() {
  const newsItems = mockNews.map((news) => {
    return <li><NewsCard key={news.id} data={news}/></li>
  })

  return (
      <ul className={styles.list}>
        {newsItems}
      </ul>
  )
}
